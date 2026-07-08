import { ProgressBar } from "react-bootstrap";

function KPISection({ dashboard }) {

    const kpis = [

        {
            title: "Students",
            value: dashboard.totalStudents,
            progress: 85,
            color: "primary"
        },

        {
            title: "Teachers",
            value: dashboard.totalTeachers,
            progress: 70,
            color: "success"
        },

        {
            title: "Subjects",
            value: dashboard.totalSubjects,
            progress: 60,
            color: "warning"
        },

        {
            title: "Marks",
            value: dashboard.totalMarks,
            progress: 92,
            color: "info"
        },

        {
            title: "Attendance",
            value: dashboard.totalAttendance,
            progress: 96,
            color: "danger"
        }

    ];

    return (

        <div
            className="shadow rounded-4 p-4 mt-5"
            style={{
                background: "rgba(255,255,255,.08)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,.1)"
            }}
        >

            <h3
                className="fw-bold mb-4"
                style={{ color: "white" }}
            >
                📈 Performance Overview
            </h3>

            <div className="row">

                {kpis.map((item, index) => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={index}
                    >

                        <div
                            className="p-3 rounded-4"
                            style={{
                                background: "rgba(255,255,255,.05)"
                            }}
                        >

                            <div className="d-flex justify-content-between">

                                <h6 style={{ color: "#cbd5e1" }}>
                                    {item.title}
                                </h6>

                                <h5
                                    className="fw-bold"
                                    style={{ color: "white" }}
                                >
                                    {item.value}
                                </h5>

                            </div>

                            <ProgressBar
                                now={item.progress}
                                variant={item.color}
                                className="mt-3"
                                style={{ height: "10px" }}
                            />

                            <small
                                style={{
                                    color: "#94a3b8"
                                }}
                            >
                                {item.progress}% Performance
                            </small>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default KPISection;