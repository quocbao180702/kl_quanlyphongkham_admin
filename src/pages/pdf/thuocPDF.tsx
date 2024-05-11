import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

function ThuocPDF() {
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
        return (
            <>
                    
            </>
        );
    }
}

export default ThuocPDF;