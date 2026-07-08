import { useEffect, useState } from "react";
import api from "../services/api";

function MarkModal({ form, setForm, saveMarks, editingId }) {

    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        loadStudents();
        loadSubjects();
    }, []);

    const loadStudents = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get("/students", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setStudents(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    const loadSubjects = async () => {
        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/subjects", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setSubjects(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    const inputStyle = {
        background: "#1e293b",
        color: "white",
        border: "1px solid #475569"
    };

    return (

        <div className="modal fade" id="markModal" tabIndex="-1">

            <div className="modal-dialog">

                <div
                    className="modal-content"
                    style={{
                        background: "#273449",
                        color: "white"
                    }}
                >

                    <div
                        className="modal-header"
                        style={{ borderBottom: "1px solid #475569" }}
                    >

                        <h5 className="modal-title">

                            {editingId == null
                                ? "Add Marks"
                                : "Edit Marks"}

                        </h5>

                        <button
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                            id="closeMarkModal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <select
                            className="form-select mb-3"
                            style={inputStyle}
                            value={form.studentId}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    studentId: e.target.value
                                })
                            }
                        >

                            <option value="">Select Student</option>

                            {students.map(student => (

                                <option
                                    key={student.id}
                                    value={student.id}
                                >
                                    {student.firstName} {student.lastName}
                                </option>

                            ))}

                        </select>

                        <select
                            className="form-select mb-3"
                            style={inputStyle}
                            value={form.subjectId}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    subjectId: e.target.value
                                })
                            }
                        >

                            <option value="">Select Subject</option>

                            {subjects.map(subject => (

                                <option
                                    key={subject.id}
                                    value={subject.id}
                                >
                                    {subject.subjectName}
                                </option>

                            ))}

                        </select>

                        <input
                            type="number"
                            className="form-control mb-3"
                            style={inputStyle}
                            placeholder="Internal Marks"
                            value={form.internalMarks}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    internalMarks: e.target.value
                                })
                            }
                        />

                        <input
                            type="number"
                            className="form-control"
                            style={inputStyle}
                            placeholder="External Marks"
                            value={form.externalMarks}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    externalMarks: e.target.value
                                })
                            }
                        />

                    </div>

                    <div
                        className="modal-footer"
                        style={{ borderTop: "1px solid #475569" }}
                    >

                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={saveMarks}
                        >

                            {editingId == null
                                ? "Add Marks"
                                : "Update Marks"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MarkModal;