function AttendanceTable({

    attendance,
    editAttendance,
    deleteAttendance

}) {

    return (

        <table className="table table-bordered table-hover shadow">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Student</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {attendance.length === 0 ? (

                    <tr>

                        <td
                            colSpan="5"
                            className="text-center"
                        >

                            No Attendance Found

                        </td>

                    </tr>

                ) : (

                    attendance.map((record) => (

                        <tr key={record.id}>

                            <td>{record.id}</td>

                            <td>

                                {record.student?.firstName}{" "}
                                {record.student?.lastName}

                            </td>

                            <td>{record.attendanceDate}</td>

                            <td>

                                <span
                                    className={
                                        record.status === "Present"
                                            ? "badge bg-success"
                                            : "badge bg-danger"
                                    }
                                >

                                    {record.status}

                                </span>

                            </td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editAttendance(record)}
                                >

                                    Edit

                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteAttendance(record.id)}
                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

    );

}

export default AttendanceTable;