import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaBook,
    FaClipboardList,
    FaCalendarCheck
} from "react-icons/fa";

function DashboardCard({ title, count, color }) {

    const icons = {
        Students: <FaUserGraduate size={40} />,
        Teachers: <FaChalkboardTeacher size={40} />,
        Subjects: <FaBook size={40} />,
        Marks: <FaClipboardList size={40} />,
        Attendance: <FaCalendarCheck size={40} />
    };

    const gradients = {
        primary: "linear-gradient(135deg,#2563eb,#3b82f6)",
        success: "linear-gradient(135deg,#059669,#10b981)",
        warning: "linear-gradient(135deg,#d97706,#f59e0b)",
        info: "linear-gradient(135deg,#0891b2,#06b6d4)",
        danger: "linear-gradient(135deg,#dc2626,#ef4444)"
    };

    return (

        <div className="col-xl-3 col-lg-4 col-md-6">

            <div
                className="shadow-lg rounded-4 p-4 h-100"
                style={{
                    background: gradients[color],
                    color: "white",
                    transition: ".3s",
                    cursor: "pointer"
                }}
                onMouseEnter={(e)=>{
                    e.currentTarget.style.transform="translateY(-8px)";
                }}
                onMouseLeave={(e)=>{
                    e.currentTarget.style.transform="translateY(0px)";
                }}
            >

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <small
                            style={{
                                opacity:.8,
                                fontSize:"15px"
                            }}
                        >
                            {title}
                        </small>

                        <h1
                            className="fw-bold mt-3"
                            style={{
                                fontSize:"48px"
                            }}
                        >
                            {count}
                        </h1>

                    </div>

                    <div
                        style={{
                            opacity:.9
                        }}
                    >
                        {icons[title]}
                    </div>

                </div>

                <hr
                    style={{
                        borderColor:"rgba(255,255,255,.2)"
                    }}
                />

                <small>

                    ✔ Updated Successfully

                </small>

            </div>

        </div>

    );

}

export default DashboardCard;