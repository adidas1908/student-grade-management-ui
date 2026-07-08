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

    return (

        <div
            className="modal fade"
            id="subjectModal"
            tabIndex="-1"
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title">

                            {editingId == null
                                ? "Add Subject"
                                : "Edit Subject"}

                        </h5>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            id="closeSubjectModal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <input
                            className="form-control mb-3"
                            placeholder="Subject Code"
                            value={form.subjectCode}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    subjectCode: e.target.value
                                })
                            }
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Subject Name"
                            value={form.subjectName}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    subjectName: e.target.value
                                })
                            }
                        />

                        <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Credits"
                            value={form.credits}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    credits: e.target.value
                                })
                            }
                        />

                        <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Semester"
                            value={form.semester}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    semester: e.target.value
                                })
                            }
                        />

                        <select
                            className="form-select"
                            value={form.teacherId}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    teacherId: e.target.value
                                })
                            }
                        >

                            <option value="">
                                Select Teacher
                            </option>

                            {teachers.map((teacher) => (

                                <option
                                    key={teacher.id}
                                    value={teacher.id}
                                >

                                    {teacher.name}

                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={saveSubject}
                        >

                            {editingId == null
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