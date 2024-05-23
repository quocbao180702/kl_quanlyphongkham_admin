import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { Row, Table } from 'react-bootstrap';

function ToaThuocPDF({ data }: { data: any }, ref: any) {
  const pdfRef = useRef<HTMLDivElement>(null);

  /*  useImperativeHandle(ref, () => ({
     downloadPdf
   })); */

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
        pdf.save('toathuoc.pdf');
      });
    } else {
      console.error("The PDF container is not yet available.");
    }
  }

  const ketQua = (data?.thuocs || []).reduce((acc: any, curr: any, index: number) => {
    acc.push({ thuoc: curr?.tenthuoc, soLuong: (data?.soluongs || [])[index] });
    return acc;
  }, []);

  return (
    <>
      <div className="container" ref={pdfRef}>
        <div>
          <p>Phòng Khám Clinic</p>
          <p>Địa chỉ: 1022/3 Mỹ Hòa, Long Xuyên, An Giang</p>
          <p>Điện thoại: +84 762 919 001</p>
        </div>
        <div>
          <h4 className="text-center">Đơn Thuốc</h4>
          <div>
            <p>Họ tên: {data?.benhnhan?.hoten}</p>
            <div className="d-flex justify-content-between">
              <p>Ngày sinh: {moment(data?.benhnhan?.ngaysinh).format('DD-MM-YYYY')}</p>
              <p>Cân nặng: {data?.benhnhan?.sinhhieu?.cannang} kg</p>
              <p>Giới tính: {data?.benhnhan?.gioitinh ? "Nam" : "Nữ"}</p>
            </div>
            <p>Sổ bảo hiểm y tế (nếu có): {data?.benhnhan?.bhyt}</p>
            <p>Địa chỉ liên hệ: {data?.benhnhan?.diachi}</p>
            <p>Chuẩn đoán: Viêm tiết nệu nhẹ</p>
            <br />
            <p>Thuốc điền trị: </p>
            <Table>
              <thead>
                <tr>
                  <th>Tên Thuốc</th>
                  <th>Số lượng</th>
                  <th>Liều dùng</th>
                </tr>
              </thead>
              <tbody>
                {ketQua && ketQua.map((thuoc: any, index: number) => (
                  <tr key={index}>
                    <td>{thuoc.thuoc}</td>
                    <td>{thuoc.soLuong}</td>
                    <td>1 viên 1 lần</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p>Lời dặn: </p>
            <p>Ngày tái khám: {moment(data?.ngaytaikham).format("DD-MM-YYYY")}</p>
            <div className="w-100 d-flex justify-content-end">
              <div className="text-center">
                <p>...., Ngày ... Tháng ... Năm ... </p>
                <p>Bác sĩ/Y sĩ khám bệnh</p>
                {data?.bacsi?.hoten}
              </div>
            </div>
            <ul className="row-list">
              <li>Khám lại xin mang theo đơn này</li>
              <li>Số điện thoại liên hệ ....</li>
              <li>Tên bố hoặc mẹ của trẻ hoặc người đưa trẻ đến khám bệnh, chữa bệnh: ...</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-outline-danger" onClick={downloadPdf}>Download</button>
      </div>
    </>
  );
}

export default forwardRef(ToaThuocPDF);
