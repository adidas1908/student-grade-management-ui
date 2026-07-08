import { Link } from "react-router-dom";

function QuickActions() {
    const actions = [
        { title: "Add Student", path: "/students", icon: "🎓", color: "primary" },
        { title: "Add Teacher", path: "/teachers", icon: "👨‍🏫", color: "success" },
        { title: "Add Subject", path: "/subjects", icon: "📚", color: "warning" },
        { title: "Add Marks", path: "/marks", icon: "📝", color: "info" },
        { title: "Attendance", path: "/attendance", icon: "📅", color: "danger" }
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
                ⚡ Quick Actions
            </h3>

            <div className="row g-3">

                {actions.map((action, index) => (

                    <div className="col-md-4 col-lg-2" key={index}>

                        <Link
                            to={action.path}
                            className={`btn btn-${action.color} w-100 py-3 rounded-4`}
                        >
                            <div style={{ fontSize: "28px" }}>
                                {action.icon}
                            </div>

                            <div className="mt-2">
                                {action.title}
                            </div>
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default QuickActions;