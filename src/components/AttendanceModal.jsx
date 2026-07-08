import { useEffect, useState } from "react";
import api from "../services/api";

function AttendanceModal({

    form,
    setForm,
    saveAttendance,
    editingId

}) {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        loadStudents();

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

    return (

        <div
            className="modal fade"
            id="attendanceModal"
            tabIndex="-1"
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title">

                            {editingId == null
                                ? "Add Attendance"
                                : "Edit Attendance"}

                        </h5>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            id="closeAttendanceModal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <select
                            className="form-select mb-3"
                            value={form.studentId}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    studentId: e.target.value
                                })
                            }
                        >

                            <option value="">
                                Select Student
                            </option>

                            {students.map(student => (

                                <option
                                    key={student.id}
                                    value={student.id}
                                >

                                    {student.firstName} {student.lastName}

                                </option>

                            ))}

                        </select>

                        <input
                            type="date"
                            className="form-control mb-3"
                            value={form.attendanceDate}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    attendanceDate: e.target.value
                                })
                            }
                        />

                        <select
                            className="form-select"
                            value={form.status}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    status: e.target.value
                                })
                            }
                        >

                            <option value="">
                                Select Status
                            </option>

                            <option value="Present">
                                Present
                            </option>

                            <option value="Absent">
                                Absent
                            </option>

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
                            onClick={saveAttendance}
                        >

                            {editingId == null
                                ? "Add Attendance"
                                : "Update Attendance"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AttendanceModal;