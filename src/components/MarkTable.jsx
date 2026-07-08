function MarkTable({ marks, editMarks, deleteMarks }) {

    return (

        <table className="table table-bordered table-hover shadow">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Student</th>
                    <th>Subject</th>
                    <th>Internal</th>
                    <th>External</th>
                    <th>Total</th>
                    <th>Grade</th>
                    <th>Result</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {marks.length === 0 ? (

                    <tr>

                        <td colSpan="9" className="text-center">

                            No Marks Found

                        </td>

                    </tr>

                ) : (

                    marks.map((mark) => (

                        <tr key={mark.id}>

                            <td>{mark.id}</td>

                            <td>
                                {mark.student?.firstName} {mark.student?.lastName}
                            </td>

                            <td>
                                {mark.subject?.subjectName}
                            </td>

                            <td>{mark.internalMarks}</td>

                            <td>{mark.externalMarks}</td>

                            <td>{mark.totalMarks}</td>

                            <td>{mark.grade}</td>

                            <td>{mark.result}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editMarks(mark)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteMarks(mark.id)}
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

export default MarkTable;