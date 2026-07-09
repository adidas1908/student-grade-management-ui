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

    const inputStyle = {
        background: "#1e293b",
        color: "white",
        border: "1px solid #475569"
    };

    return (

        <div
            className="modal fade"
            id="attendanceModal"
            tabIndex="-1"
        >

            <div className="modal-dialog modal-lg modal-dialog-centered">

                <div
                    className="modal-content border-0 shadow-lg"
                    style={{
                        background: "#273449",
                        color: "white",
                        borderRadius: "20px"
                    }}
                >

                    <div
                        className="modal-header border-0"
                        style={{
                            background: "linear-gradient(90deg,#059669,#2563eb)"
                        }}
                    >

                        <h4 className="modal-title fw-bold">

                            {editingId === null
                                ? "📅 Add Attendance"
                                : "✏ Edit Attendance"}

                        </h4>

                        <button
                            id="closeAttendanceModal"
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                        />

                    </div>

                    <div className="modal-body p-4">

                        <div className="mb-3">

                            <label className="form-label text-white">
                                Student
                            </label>

                            <select
                                className="form-select"
                                style={inputStyle}
                                value={form.studentId}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        studentId: e.target.value
                                    })
                                }
                            >

                                <option
                                    value=""
                                    style={{
                                        background: "#1e293b",
                                        color: "white"
                                    }}
                                >
                                    Select Student
                                </option>

                                {students.map(student => (

                                    <option
                                        key={student.id}
                                        value={student.id}
                                        style={{
                                            background: "#1e293b",
                                            color: "white"
                                        }}
                                    >

                                        {student.firstName} {student.lastName}

                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="mb-3">

                            <label className="form-label text-white">
                                Attendance Date
                            </label>

                            <input
                                type="date"
                                className="form-control"
                                style={inputStyle}
                                value={form.attendanceDate}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        attendanceDate: e.target.value
                                    })
                                }
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label text-white">
                                Status
                            </label>

                            <select
                                className="form-select"
                                style={inputStyle}
                                value={form.status}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        status: e.target.value
                                    })
                                }
                            >

                                <option
                                    value=""
                                    style={{
                                        background: "#1e293b",
                                        color: "white"
                                    }}
                                >
                                    Select Status
                                </option>

                                <option
                                    value="Present"
                                    style={{
                                        background: "#1e293b",
                                        color: "white"
                                    }}
                                >
                                    Present
                                </option>

                                <option
                                    value="Absent"
                                    style={{
                                        background: "#1e293b",
                                        color: "white"
                                    }}
                                >
                                    Absent
                                </option>

                            </select>

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
                            className="btn btn-success rounded-pill px-4"
                            onClick={saveAttendance}
                        >

                            {editingId === null
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