import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function PieChart({ dashboard }) {

    const data = {

        labels: [
            "Students",
            "Teachers",
            "Subjects",
            "Marks",
            "Attendance"
        ],

        datasets: [

            {

                data: [

                    dashboard.totalStudents,
                    dashboard.totalTeachers,
                    dashboard.totalSubjects,
                    dashboard.totalMarks,
                    dashboard.totalAttendance

                ],

                backgroundColor: [

                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#06b6d4",
                    "#ef4444"

                ],

                borderWidth: 0

            }

        ]

    };

    const options = {

        responsive: true,

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    color: "white"

                }

            }

        }

    };

    return <Pie data={data} options={options} />;

}

export default PieChart;