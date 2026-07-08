import { FaGraduationCap } from "react-icons/fa";

function DashboardHero() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (

        <div
            className="mb-4 p-5 rounded-4 shadow-lg"
            style={{
                background:
                    "linear-gradient(135deg,#2563eb,#7c3aed,#0ea5e9)",
                color: "white"
            }}
        >

            <div className="d-flex justify-content-between align-items-center flex-wrap">

                <div>

                    <h1 className="fw-bold">

                        {greeting} 👋

                    </h1>

                    <h3 className="mt-3">

                        Student Grade Management System

                    </h3>

                    <p className="mt-3 opacity-75">

                        Manage Students, Teachers, Subjects,
                        Attendance and Marks from one place.

                    </p>

                </div>

                <div>

                    <FaGraduationCap size={100} />

                </div>

            </div>

            <hr />

            <div className="d-flex justify-content-between">

                <div>

                    <small>Today's Date</small>

                    <h5>{today}</h5>

                </div>

                <div>

                    <small>Status</small>

                    <h5 className="text-warning">

                        ● System Online

                    </h5>

                </div>

            </div>

        </div>

    );

}

export default DashboardHero;