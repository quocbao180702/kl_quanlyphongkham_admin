import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { Row, Table } from 'react-bootstrap';

function ToaThuocPDF({ data }: { data: any }, ref: any) {
  const pdfRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    downloadPdf
  }));

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

  return (
    <>
      <div className="container" ref={pdfRef}>
        <div>
          <p>Phòng Khám Clinic</p>
          <p>Địa chỉ: 1022/3 Mỹ Hòa, Long Xuyên, An Giang</p>
          <p>Điện thoại: 0123456789</p>
        </div>
        <div>
          <h4 className="text-center">Đơn Thuốc</h4>
          <div>
            <p>Họ tên: Đặng Quốc Bảo</p>
            <div className="d-flex justify-content-between">
              <p>Ngày sinh: 20-02-2002</p>
              <p>Cân nặng: 50 kg</p>
              <p>Giới tính: Nam</p>
            </div>
            <p>Sổ bảo hiểm y tế (nếu có): </p>
            <p>Địa chỉ liên hệ: Long Xuyên - An Giang</p>
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
                <tr>
                  <td>Pagadol</td>
                  <td>10</td>
                  <td>1 viên</td>
                </tr>
              </tbody>
            </Table>
            <p>Lời dặn: </p>
            <p>Ngày tái khám: 29-02-2024</p>
            <div className="w-100 d-flex justify-content-end">
              <div className="text-center">
                <p>...., Ngày ... Tháng ... Năm ... </p>
                <p>Bác sĩ/Y sĩ khám bệnh</p>
                Đặng Quốc Bảo
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
    </>
  );
}

export default forwardRef(ToaThuocPDF);
