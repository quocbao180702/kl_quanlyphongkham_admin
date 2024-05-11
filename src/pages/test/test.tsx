import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import ToaThuocPDF from "../pdf/taothuoc";
import HoadonPDF from '../pdf/hoadon';

function Test() {
  const data = {
    hoten: "Đặng Quốc Bảo",
    ngaysinh: "20-02-2002",
    sodienthoai: "0123456789"
  };

  const pdfComponentRef = useRef<{ downloadPdf: () => void } | null>(null);

  const handleDownloadPdf = () => {
    if (pdfComponentRef.current) {
      pdfComponentRef.current.downloadPdf();
    }
  };

  return (
    <>
      {/*  <ToaThuocPDF ref={pdfComponentRef} data={data} /> */}
      <Button className="btn btn-outline-primary" onClick={handleDownloadPdf}>
        Xuất PDF
      </Button>
      {/* <HoadonPDF /> */}
      {/*  <HoaDonCLSPDF /> */}
    </>
  );
}

export default Test;
