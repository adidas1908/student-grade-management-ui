import {
    FaBell,
    FaUserGraduate,
    FaBook,
    FaClipboardCheck,
    FaExclamationTriangle
} from "react-icons/fa";

function Notifications() {

    const notifications = [

        {
            icon: <FaUserGraduate />,
            title: "5 New Students Registered",
            color: "#2563eb"
        },

        {
            icon: <FaBook />,
            title: "2 Subjects Added",
            color: "#f59e0b"
        },

        {
            icon: <FaClipboardCheck />,
            title: "Marks Updated Successfully",
            color: "#10b981"
        },

        {
            icon: <FaExclamationTriangle />,
            title: "Attendance Pending",
            color: "#ef4444"
        }

    ];

    return (

        <div
            className="shadow rounded-4 p-4 mt-5"
            style={{
                background:"rgba(255,255,255,.08)",
                backdropFilter:"blur(18px)",
                border:"1px solid rgba(255,255,255,.1)"
            }}
        >

            <h3
                className="fw-bold mb-4"
                style={{color:"white"}}
            >
                <FaBell className="me-2"/>
                Notifications
            </h3>

            {notifications.map((item,index)=>(

                <div
                    key={index}
                    className="d-flex align-items-center mb-3"
                >

                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center me-3"
                        style={{
                            width:"45px",
                            height:"45px",
                            background:item.color,
                            color:"white"
                        }}
                    >
                        {item.icon}
                    </div>

                    <div
                        style={{
                            color:"white",
                            fontSize:"16px"
                        }}
                    >
                        {item.title}
                    </div>

                </div>

            ))}

        </div>

    );

}

export default Notifications;