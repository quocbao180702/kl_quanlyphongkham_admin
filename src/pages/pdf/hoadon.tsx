import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

function HoadonPDF({ data }: { data: any }) {
    const pdfRef = useRef<HTMLDivElement>(null);

    const downloadPdf = () => {
        const input = pdfRef.current;
        if (input) {
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save('hoadon.pdf');
            });
        } else {
            console.error("The PDF container is not yet available.");
        }
    }

    return (
        <>
            <div className="container" ref={pdfRef}>
                <p>Xin chào <strong>{data?.benhnhan?.hoten}</strong></p>
                <p>Thông tin hóa đơn:</p>
                <p>- Điện thoại: <strong>{data.benhnhan?.ngaysinh}</strong></p>
                <p>- Ngày sinh: <strong>20-02-2002</strong></p>
                <p>Thông tin dịch vụ bao gồm:</p>
                <table style={{ border: "1" }}>
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}>#</th>
                            <th>Tên</th>
                            <th style={{ width: "5%" }}>Số lượng</th>
                            <th style={{ width: "15%" }}>Đơn giá</th>
                            <th style={{ width: "20%" }}>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.thuocs && data?.thuocs.map((thuoc: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{thuoc?.ten}</td>
                                <td>{thuoc?.soluong}</td>
                                <td>{thuoc?.gia}</td>
                                <td>{thuoc?.thanhtien}</td>
                            </tr>
                        ))}
                        {data?.chitietcanlamsang && data?.chitietcanlamsang.map((canlamsang: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{canlamsang?.ten}</td>
                                <td>{canlamsang?.soluong}</td>
                                <td>{canlamsang?.gia}</td>
                                <td>{canlamsang?.thanhtien}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3}>Tổng tiền sản phẩm:</td>
                            <td className="text-center" colSpan={2}>
                                <strong>{data?.thanhtien}</strong><sup><u>đ</u></sup>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>Trân trọng,</p>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={downloadPdf}>Download</button>
            </div>
        </>
    );
}

export default HoadonPDF;