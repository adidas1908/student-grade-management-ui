import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TeacherModal from "../components/TeacherModal";
import api from "../services/api";

function Teachers() {

    const [teachers, setTeachers] = useState([]);
    const [search, setSearch] = useState("");

    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        salary: ""
    });

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
            alert("Failed to load teachers");

        }

    };

    const openAddModal = () => {

        setEditingId(null);

        setForm({
            name: "",
            email: "",
            phone: "",
            department: "",
            designation: "",
            salary: ""
        });

        const modal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById("teacherModal")
        );

        modal.show();

    };

    const editTeacher = (teacher) => {

        setEditingId(teacher.id);

        setForm({
            name: teacher.name,
            email: teacher.email,
            phone: teacher.phone,
            department: teacher.department,
            designation: teacher.designation,
            salary: teacher.salary
        });

        const modal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById("teacherModal")
        );

        modal.show();

    };

    const saveTeacher = async () => {

    try {

        const token = localStorage.getItem("token");

        if (editingId === null) {

            await api.post(
                "/teachers",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

        } else {

            await api.put(
                `/teachers/${editingId}`,
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

        }

        // Reload teachers
        await loadTeachers();

        // Reset form
        setEditingId(null);

        setForm({
            name: "",
            email: "",
            phone: "",
            department: "",
            designation: "",
            salary: ""
        });

        // Close Bootstrap modal
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("teacherModal")
        );

        if (modal) {
            modal.hide();
        }

        // Success message
        Swal.fire({
            icon: "success",
            title:
                editingId === null
                    ? "Teacher Added!"
                    : "Teacher Updated!",
            text:
                editingId === null
                    ? "Teacher has been added successfully."
                    : "Teacher has been updated successfully.",
            timer: 1800,
            showConfirmButton: false,
            background: "#1e293b",
            color: "#fff"
        });

    } catch (error) {

        console.error(error);

        Swal.fire({
            icon: "error",
            title: "Operation Failed",
            text:
                error.response?.data?.message ||
                error.message ||
                "Something went wrong.",
            background: "#1e293b",
            color: "#fff"
        });

    }

};

    const deleteTeacher = async (id) => {

    const result = await Swal.fire({

        title: "Delete Teacher?",
        text: "This action cannot be undone.",
        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",

        confirmButtonText: "🗑 Yes, Delete",
        cancelButtonText: "Cancel",

        background: "#1e293b",
        color: "#fff"

    });

    if (!result.isConfirmed) return;

    try {

        const token = localStorage.getItem("token");

        await api.delete(`/teachers/${id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        loadTeachers();

        Swal.fire({

            icon: "success",

            title: "Deleted!",

            text: "Teacher deleted successfully.",

            timer: 1800,

            showConfirmButton: false,

            background: "#1e293b",
            color: "#fff"

        });

    }

    catch (error) {

        console.log(error);

        Swal.fire({

            icon: "error",

            title: "Delete Failed",

            text: "Unable to delete teacher.",

            background: "#1e293b",
            color: "#fff"

        });

    }

};

    const filteredTeachers = teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(search.toLowerCase())
    );

        return (

        <div
            className="d-flex"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#0f172a,#111827,#1e3a8a)"
            }}
        >

            <Sidebar />

            <div className="flex-grow-1">

                <Navbar />

<div
    className="container-fluid p-4 page-animation"
>
                    <div
                        className="shadow rounded-4 p-4"
                        style={{
                            background: "rgba(255,255,255,.08)",
                            backdropFilter: "blur(18px)",
                            border: "1px solid rgba(255,255,255,.1)"
                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center flex-wrap">

                            <div>

                                <h2
                                    className="fw-bold"
                                    style={{ color: "white" }}
                                >
                                    👨‍🏫 Teachers
                                </h2>

                                <p style={{ color: "#cbd5e1" }}>
                                    Manage all teachers
                                </p>

                            </div>

                            <button
                                className="btn btn-success rounded-pill px-4"
                                onClick={openAddModal}
                            >
                                + Add Teacher
                            </button>

                        </div>

                        <div className="mt-4 mb-4">

                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="🔍 Search Teacher..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>

                        <div className="table-responsive">

                            <table
                                className="table table-hover align-middle"
                                style={{ color: "white" }}
                            >

                                <thead>

                                    <tr style={{ background: "#1e293b" }}>

                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Department</th>
                                        <th>Designation</th>
                                        <th>Salary</th>
                                        <th className="text-center">Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredTeachers.length === 0 ? (

                                        <tr>

                                            <td
                                                colSpan="8"
                                                className="text-center py-5"
                                            >
                                                No Teachers Found
                                            </td>

                                        </tr>

                                    ) : (

                                        filteredTeachers.map((teacher) => (

                                            <tr key={teacher.id}>

                                                <td>{teacher.id}</td>
                                                <td>{teacher.name}</td>
                                                <td>{teacher.email}</td>
                                                <td>{teacher.phone}</td>
                                                <td>{teacher.department}</td>
                                                <td>{teacher.designation}</td>
                                                <td>₹ {teacher.salary}</td>

                                                <td className="text-center">

                                                    <button
                                                        className="btn btn-warning btn-sm rounded-pill me-2"
                                                        onClick={() => editTeacher(teacher)}
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm rounded-pill"
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

                        </div>

                    </div>

                </div>

            </div>

            <TeacherModal
                form={form}
                setForm={setForm}
                saveTeacher={saveTeacher}
                editingId={editingId}
            />

        </div>

    );

}

export default Teachers;