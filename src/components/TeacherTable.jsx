function TeacherTable({ teachers, editTeacher, deleteTeacher }) {

    return (

        <table className="table table-bordered table-hover shadow">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {teachers.length === 0 ? (

                    <tr>

                        <td colSpan="8" className="text-center">

                            No Teachers Found

                        </td>

                    </tr>

                ) : (

                    teachers.map((teacher) => (

                        <tr key={teacher.id}>

                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phone}</td>
                            <td>{teacher.department}</td>
                            <td>{teacher.designation}</td>
                            <td>{teacher.salary}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editTeacher(teacher)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteTeacher(teacher.id)}
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

export default TeacherTable;