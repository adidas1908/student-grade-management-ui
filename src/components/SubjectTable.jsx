function SubjectTable({ subjects, editSubject, deleteSubject }) {

    return (

        <table className="table table-bordered table-hover shadow">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Code</th>
                    <th>Subject Name</th>
                    <th>Credits</th>
                    <th>Semester</th>
                    <th>Teacher</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {subjects.length === 0 ? (

                    <tr>

                        <td colSpan="7" className="text-center">

                            No Subjects Found

                        </td>

                    </tr>

                ) : (

                    subjects.map((subject) => (

                        <tr key={subject.id}>

                            <td>{subject.id}</td>

                            <td>{subject.subjectCode}</td>

                            <td>{subject.subjectName}</td>

                            <td>{subject.credits}</td>

                            <td>{subject.semester}</td>

                            <td>{subject.teacher?.name}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editSubject(subject)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteSubject(subject.id)}
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

export default SubjectTable;