import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import { useRef } from "react";
import { Image, Table } from "react-bootstrap";
import { getUrlImage } from "../../utils/uploadFile";

function PhieuCanLamSang({ data }: any) {
    const pdfRef = useRef<HTMLDivElement>(null);

    const downloadPdf = () => {
        const input = pdfRef.current;
        if (input) {  // Ensure the element is not null
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
                pdf.save('phieucls.pdf');
            });
        } else {
            console.error("The PDF container is not yet available.");
        }
    }


    return (
        <>
            <div className="container" ref={pdfRef}>
                <div>
                    <p>Phòng Khám Clinic</p>
                    <p>Địa chỉ: 1022/3 Mỹ Hòa, Long Xuyên, An Giang</p>
                    <p>Điện thoại: +84 762 919 001</p>
                </div>
                <div>
                    <h4 className="text-center">Kết Quả Chỉ Định Cận Lâm Sàng</h4>
                    <div>
                        <p>Họ Tên: {data?.benhnhan?.hoten}</p>
                        <div className="d-flex justify-content-between">
                            <p>Ngày sinh: {moment(data?.benhnhan?.ngaysinh).format('DD-MM-YYYY')}</p>
                            <p>Giới tính: {data?.benhnhan?.gioitinh ? "Nam" : "Nữ"}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Số Điện Thoại: {data?.benhnhan?.sodienthoai}</p>
                            <p>Địa Chỉ: {data?.benhnhan?.diachi}</p>
                        </div>
                        <br />
                        <p>Kết Quả</p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Loại Cận Lâm Sàng</th>
                                    <th>Tên Xét Nghiệp</th>
                                    <th>Kết Quả</th>
                                    <th>Thiết Bị</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.ketquacanlamsangs && data?.ketquacanlamsangs.map((ketqua: any, index: number) => (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{ketqua?.loaicanlamsang?.loaicanlamsang}</td>
                                                <td>{ketqua?.loaicanlamsang?.tenxetnghiem}</td>
                                                <td>{ketqua?.ketluan}</td>
                                                <td>{ketqua?.thietbi}</td>
                                            </tr>
                                            {ketqua.hinhanh.length > 0 && (
                                                <tr>
                                                    <td colSpan={5}>
                                                        <p className="text-center">Hình Ảnh</p>
                                                        <div className="d-flex justify-content-around">
                                                            {ketqua?.hinhanh?.length > 0 && ketqua?.hinhanh?.map((image: any, index: number) => (
                                                                <div key={index}>
                                                                    {image.url !== "xyz" && (
                                                                        <Image
                                                                            src={getUrlImage(image)}
                                                                            style={{
                                                                                width: "240px",
                                                                                height: "240px",
                                                                                objectFit: "fill",
                                                                            }}
                                                                            rounded
                                                                        />
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <div className="mt-5 w-100 d-flex justify-content-end">
                            <div className="text-center">
                                <p>...., Ngày ... Tháng ... Năm ... </p>
                                <p>Bác sĩ/Y sĩ khám bệnh</p>
                                {data?.bacsi?.hoten}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={downloadPdf}>Download</button>
            </div>
        </>
    );
}

export default PhieuCanLamSang;