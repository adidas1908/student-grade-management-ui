import { useEffect, useState } from "react";
import api from "../services/api";

function SubjectModal({ form, setForm, saveSubject, editingId }) {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        loadTeachers();
    }, []);

    const loadTeachers = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/teachers", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setTeachers(response.data.data);

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
            id="subjectModal"
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
                                "linear-gradient(90deg,#7c3aed,#2563eb)"
                        }}
                    >

                        <h4 className="modal-title fw-bold">

                            {editingId === null
                                ? "📚 Add Subject"
                                : "✏ Edit Subject"}

                        </h4>

                        <button
                            id="closeSubjectModal"
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                        />

                    </div>

                    <div className="modal-body p-4">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Subject Code
                                </label>

                                <input
                                    type="text"
                                    name="subjectCode"
                                    className="form-control"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.subjectCode}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Subject Name
                                </label>

                                <input
                                    type="text"
                                    name="subjectName"
                                    className="form-control"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.subjectName}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Credits
                                </label>

                                <input
                                    type="number"
                                    name="credits"
                                    className="form-control"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.credits}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label text-white">
                                    Semester
                                </label>

                                <input
                                    type="number"
                                    name="semester"
                                    className="form-control"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.semester}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-12 mb-3">

                                <label className="form-label text-white">
                                    Teacher
                                </label>

                                <select
                                    name="teacherId"
                                    className="form-select"
                                    style={{
                                        background: "#334155",
                                        color: "white",
                                        border: "1px solid #475569"
                                    }}
                                    value={form.teacherId}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Teacher
                                    </option>

                                    {teachers.map((teacher) => (

                                        <option
                                            key={teacher.id}
                                            value={teacher.id}
                                            style={{
                                                background: "#334155",
                                                color: "white"
                                            }}
                                        >

                                            {teacher.name}

                                        </option>

                                    ))}

                                </select>

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
                            onClick={saveSubject}
                        >

                            {editingId === null
                                ? "Add Subject"
                                : "Update Subject"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default SubjectModal;