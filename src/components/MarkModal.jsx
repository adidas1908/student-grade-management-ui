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

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    return (

        <div
            className="modal fade"
            id="markModal"
            tabIndex="-1"
        >

            <div className="modal-dialog modal-lg modal-dialog-centered">

                <div
                    className="modal-content border-0 shadow-lg"
                    style={{
                        background: "#1e293b",
                        color: "white",
                        borderRadius: "20px"
                    }}
                >

                    <div
                        className="modal-header border-0"
                        style={{
                            background:
                                "linear-gradient(90deg,#0ea5e9,#2563eb)"
                        }}
                    >

                        <h4 className="modal-title fw-bold">

                            {editingId === null
                                ? "📝 Add Marks"
                                : "✏ Edit Marks"}

                        </h4>

                        <button
                            id="closeMarkModal"
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                        />

                    </div>

                    <div className="modal-body p-4">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Student
                                </label>

                                <select
                                    name="studentId"
                                    className="form-select"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.studentId}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Student
                                    </option>

                                    {students.map(student => (

                                        <option
                                            key={student.id}
                                            value={student.id}
                                            style={{
                                                background: "#334155",
                                                color: "white"
                                            }}
                                        >

                                            {student.firstName} {student.lastName}

                                        </option>

                                    ))}

                                </select>

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Subject
                                </label>

                                <select
                                    name="subjectId"
                                    className="form-select"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.subjectId}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Subject
                                    </option>

                                    {subjects.map(subject => (

                                        <option
                                            key={subject.id}
                                            value={subject.id}
                                            style={{
                                                background: "#334155",
                                                color: "white"
                                            }}
                                        >

                                            {subject.subjectName}

                                        </option>

                                    ))}

                                </select>

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Internal Marks
                                </label>

                                <input
                                    type="number"
                                    name="internalMarks"
                                    className="form-control"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.internalMarks}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    External Marks
                                </label>

                                <input
                                    type="number"
                                    name="externalMarks"
                                    className="form-control"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.externalMarks}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="modal-footer border-0">

                        <button
                            className="btn btn-secondary rounded-pill px-4"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary rounded-pill px-4"
                            onClick={saveMarks}
                        >

                            {editingId === null
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