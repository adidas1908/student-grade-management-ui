import jsPDF from "jspdf";

function ExportButtons({ dashboard }) {

    const exportPDF = () => {

    const pdf = new jsPDF();

    // Header
    pdf.setFillColor(30,41,59);
    pdf.rect(0,0,210,35,"F");

    pdf.setTextColor(255,255,255);
    pdf.setFontSize(22);
    pdf.text("Student Grade Management System",20,18);

    pdf.setFontSize(14);
    pdf.text("Dashboard Report",20,28);

    // Report Info
    pdf.setTextColor(40,40,40);
    pdf.setFontSize(12);

    pdf.text(
        `Report ID : RPT-${Date.now()}`,
        20,
        50
    );

    pdf.text(
        `Generated : ${new Date().toLocaleString()}`,
        20,
        58
    );

    pdf.text(
        "Administrator : Admin",
        20,
        66
    );

    // Summary
    pdf.setFontSize(16);
    pdf.text("Dashboard Summary",20,85);

    pdf.setDrawColor(180);
    pdf.line(20,90,190,90);

    pdf.setFontSize(13);

    pdf.text(`Students : ${dashboard.totalStudents}`,25,105);
    pdf.text(`Teachers : ${dashboard.totalTeachers}`,25,117);
    pdf.text(`Subjects : ${dashboard.totalSubjects}`,25,129);
    pdf.text(`Marks : ${dashboard.totalMarks}`,25,141);
    pdf.text(`Attendance : ${dashboard.totalAttendance}`,25,153);

    // Footer
    pdf.setDrawColor(220);
    pdf.line(20,270,190,270);

    pdf.setFontSize(10);

    pdf.text(
        "Generated automatically by Student Grade Management System",
        20,
        278
    );

    pdf.text(
        "Page 1",
        180,
        278
    );

    pdf.save("Dashboard_Report.pdf");

};

    const printDashboard = () => {
        window.print();
    };

    return (

        <div className="d-flex gap-3 mb-4">

            <button
                className="btn btn-danger rounded-pill"
                onClick={exportPDF}
            >
                📄 Export PDF
            </button>

            <button
                className="btn btn-secondary rounded-pill"
                onClick={printDashboard}
            >
                🖨 Print
            </button>

        </div>

    );

}

export default ExportButtons;