import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import api from "../services/api";
import DashboardHero from "../components/DashboardHero";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import QuickActions from "../components/QuickActions";
import KPISection from "../components/KPISection";
import ExportButtons from "../components/ExportButtons";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

function Dashboard() {

    const [dashboard, setDashboard] = useState({
        totalStudents: 0,
        totalTeachers: 0,
        totalSubjects: 0,
        totalMarks: 0,
        totalAttendance: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/dashboard", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setDashboard(response.data.data);

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <div
            className="d-flex"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#0f172a,#111827,#1e3a8a)"
            }}
        >

            <Sidebar />

            <div className="flex-grow-1">

            <Navbar />

<div
    className="container-fluid p-4 page-animation"
>
    <DashboardHero />
<ExportButtons dashboard={dashboard} />

    <div className="row g-4">

        <DashboardCard
            title="Students"
            count={dashboard.totalStudents}
            color="primary"
        />

        <DashboardCard
            title="Teachers"
            count={dashboard.totalTeachers}
            color="success"
            
        />

        <DashboardCard
            title="Subjects"
            count={dashboard.totalSubjects}
            color="warning"
        />

        <DashboardCard
            title="Marks"
            count={dashboard.totalMarks}
            color="info"
        />

        <DashboardCard
            title="Attendance"
            count={dashboard.totalAttendance}
            color="danger"
        />

    </div>

                    <div className="row mt-5">

    {/* Bar Chart */}

    <div className="col-lg-8">

        <div
            className="shadow rounded-4 p-4 h-100"
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
                📊 Student Statistics
            </h3>

            <BarChart dashboard={dashboard} />

        </div>

    </div>

    {/* Pie Chart */}

    <div className="col-lg-4">

        <div
            className="shadow rounded-4 p-4 h-100"
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
                🥧 Records Distribution
            </h3>

            <PieChart dashboard={dashboard} />

        </div>

    </div>

</div>
<QuickActions />
<KPISection dashboard={dashboard} />
<Notifications />
<Footer />

                </div>

            </div>

        </div>

    );

}

export default Dashboard;