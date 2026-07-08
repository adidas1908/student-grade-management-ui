import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentModal from "../components/StudentModal";
import api from "../services/api";

function Students(){

    const [students,setStudents]=useState([]);
    const [search,setSearch]=useState("");

    const [editingId,setEditingId]=useState(null);

    const [form,setForm]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        course:"",
        semester:""
    });


    useEffect(()=>{
        loadStudents();
    },[]);


    const loadStudents=async()=>{

        try{

            const token=localStorage.getItem("token");

            const response=await api.get("/students",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            setStudents(response.data.data);

        }catch(error){

            console.log(error);
            alert("Failed to load students");

        }

    };


    const openAddModal=()=>{

        setEditingId(null);

        setForm({
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            course:"",
            semester:""
        });


        const modal=new bootstrap.Modal(
            document.getElementById("studentModal")
        );

        modal.show();

    };


    const editStudent=(student)=>{

        setEditingId(student.id);

        setForm({
            firstName:student.firstName,
            lastName:student.lastName,
            email:student.email,
            phone:student.phone,
            course:student.course,
            semester:student.semester
        });


        const modal=new bootstrap.Modal(
            document.getElementById("studentModal")
        );

        modal.show();

    };


    const saveStudent=async()=>{

        try{

            const token=localStorage.getItem("token");


            if(editingId===null){

                await api.post("/students",form,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

            }else{

                await api.put(`/students/${editingId}`,form,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

            }


            loadStudents();

document.getElementById("closeModal").click();

Swal.fire({
    icon: "success",
    title: editingId === null ? "Student Added!" : "Student Updated!",
    text: editingId === null
        ? "Student has been added successfully."
        : "Student has been updated successfully.",
    timer: 1800,
    showConfirmButton: false,
    background: "#1e293b",
    color: "#fff"
});

        }catch(error){

            console.log(error);
Swal.fire({
    icon: "error",
    title: "Operation Failed",
    text: "Please try again.",
    background: "#1e293b",
    color: "#fff"
});
        }

    };


    const deleteStudent = async (id) => {

    const result = await Swal.fire({

        title: "Delete Student?",

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

        await api.delete(`/students/${id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        loadStudents();

        Swal.fire({

            icon: "success",

            title: "Deleted!",

            text: "Student deleted successfully.",

            timer: 1800,

            showConfirmButton: false,

            background: "#1e293b",

            color: "#fff"

        });

    } catch (error) {

        console.log(error);

        Swal.fire({

            icon: "error",

            title: "Oops...",

            text: "Delete failed!",

            background: "#1e293b",

            color: "#fff"

        });

    }

};


    const filteredStudents=students.filter(student=>
        `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );


    return(

        <div
            className="d-flex"
            style={{
                minHeight:"100vh",
                background:"linear-gradient(135deg,#0f172a,#111827,#1e3a8a)"
            }}
        >

            <Sidebar/>

            <div className="flex-grow-1">

                <Navbar/>

<div
    className="container-fluid p-4 page-animation"
>
                    <div
                        className="shadow rounded-4 p-4"
                        style={{
                            background:"rgba(255,255,255,.08)",
                            backdropFilter:"blur(18px)",
                            border:"1px solid rgba(255,255,255,.1)"
                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center flex-wrap">

                            <div>

                                <h2 className="fw-bold text-white">
                                    🎓 Students
                                </h2>

                                <p style={{color:"#cbd5e1"}}>
                                    Manage all students
                                </p>

                            </div>


                            <button
                                className="btn btn-primary rounded-pill px-4"
                                onClick={openAddModal}
                            >
                                + Add Student
                            </button>


                        </div>


                        <div className="mt-4 mb-4">

                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="🔍 Search Student..."
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                            />

                        </div>



                        <div className="table-responsive">

                            <table
                                className="table table-hover align-middle"
                                style={{color:"white"}}
                            >

                                <thead>

                                    <tr style={{background:"#1e293b"}}>

                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Course</th>
                                        <th>Semester</th>
                                        <th className="text-center">
                                            Actions
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                {
                                    filteredStudents.length===0 ?

                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-5"
                                        >
                                            No Students Found
                                        </td>
                                    </tr>

                                    :

                                    filteredStudents.map(student=>(

                                        <tr key={student.id}>

                                            <td>{student.id}</td>

                                            <td>
                                                {student.firstName} {student.lastName}
                                            </td>

                                            <td>{student.email}</td>

                                            <td>{student.phone}</td>

                                            <td>{student.course}</td>

                                            <td>{student.semester}</td>


                                            <td className="text-center">

                                                <button
                                                    className="btn btn-warning btn-sm rounded-pill me-2"
                                                    onClick={()=>editStudent(student)}
                                                >
                                                    Edit
                                                </button>


                                                <button
                                                    className="btn btn-danger btn-sm rounded-pill"
                                                    onClick={()=>deleteStudent(student.id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                }

                                </tbody>

                            </table>

                        </div>


                    </div>

                </div>

            </div>


            <StudentModal
                form={form}
                setForm={setForm}
                saveStudent={saveStudent}
                editingId={editingId}
            />


        </div>

    );

}

export default Students;