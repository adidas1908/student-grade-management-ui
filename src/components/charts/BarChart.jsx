import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

function BarChart({ dashboard }) {

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

                label: "Records",

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

                borderRadius: 10

            }

        ]

    };

    const options = {

        responsive: true,

        plugins: {

            legend: {

                display: false

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "white"

                },

                grid: {

                    color: "rgba(255,255,255,.1)"

                }

            },

            y: {

                beginAtZero: true,

                ticks: {

                    color: "white"

                },

                grid: {

                    color: "rgba(255,255,255,.1)"

                }

            }

        }

    };

    return <Bar data={data} options={options} />;

}

export default BarChart;