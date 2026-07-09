function StudentTable({

    students,
    editStudent,
    deleteStudent

}) {

    return (

        <table className="table table-bordered table-hover shadow">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {students.length === 0 ? (

                    <tr>

                        <td
                            colSpan="8"
                            className="text-center">

                            No Students Found

                        </td>

                    </tr>

                ) : (

                    students.map(student => (

                        <tr key={student.id}>

                            <td>{student.id}</td>

                            <td>{student.firstName}</td>

                            <td>{student.lastName}</td>

                            <td>{student.email}</td>

                            <td>{student.phone}</td>

                            <td>{student.course}</td>

                            <td>{student.semester}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editStudent(student)}
                                >

                                    Edit

                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteStudent(student.id)}
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

export default StudentTable;