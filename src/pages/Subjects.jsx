import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SubjectModal from "../components/SubjectModal";
import api from "../services/api";

function Subjects(){

    const [subjects,setSubjects]=useState([]);
    const [search,setSearch]=useState("");
    const [editingId,setEditingId]=useState(null);

    const [form,setForm]=useState({
        subjectCode:"",
        subjectName:"",
        credits:"",
        semester:"",
        teacherId:""
    });


    useEffect(()=>{
        loadSubjects();
    },[]);


    const loadSubjects=async()=>{

        try{

            const token=localStorage.getItem("token");

            const response=await api.get("/subjects",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            setSubjects(response.data.data);

        }catch(error){

            console.log(error);
            alert("Failed to load subjects");

        }

    };


    const openAddModal=()=>{

        setEditingId(null);

        setForm({
            subjectCode:"",
            subjectName:"",
            credits:"",
            semester:"",
            teacherId:""
        });

        const modal=new bootstrap.Modal(
            document.getElementById("subjectModal")
        );

        modal.show();

    };


  const saveSubject = async () => {

    try {

        const token = localStorage.getItem("token");

        if (editingId === null) {

            await api.post("/subjects", form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        } else {

            await api.put(`/subjects/${editingId}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        }

        // Reload table
        await loadSubjects();

        // Reset form
        setEditingId(null);

        setForm({
            subjectCode: "",
            subjectName: "",
            credits: "",
            semester: "",
            teacherId: ""
        });

        // Close Bootstrap modal
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("subjectModal")
        );

        if (modal) {
            modal.hide();
        }

        Swal.fire({
            icon: "success",
            title: editingId === null ? "Subject Added!" : "Subject Updated!",
            text: editingId === null
                ? "Subject has been added successfully."
                : "Subject has been updated successfully.",
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
            text: error.response?.data?.message || error.message,
            background: "#1e293b",
            color: "#fff"
        });

    }

};


    const editSubject=(subject)=>{

        setEditingId(subject.id);

        setForm({
            subjectCode:subject.subjectCode,
            subjectName:subject.subjectName,
            credits:subject.credits,
            semester:subject.semester,
            teacherId:subject.teacher?.id || ""
        });


        const modal=new bootstrap.Modal(
            document.getElementById("subjectModal")
        );

        modal.show();

    };


    const deleteSubject = async (id) => {

    const result = await Swal.fire({

        title: "Delete Subject?",
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

        await api.delete(`/subjects/${id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        loadSubjects();

        Swal.fire({

            icon: "success",

            title: "Deleted!",

            text: "Subject deleted successfully.",

            timer: 1800,

            showConfirmButton: false,

            background: "#1e293b",
            color: "#fff"

        });

    }

    catch (error) {

        Swal.fire({

            icon: "error",

            title: "Delete Failed",

            text: "Unable to delete subject.",

            background: "#1e293b",
            color: "#fff"

        });

    }

};


    const filteredSubjects=subjects.filter(subject=>
        subject.subjectName.toLowerCase().includes(search.toLowerCase()) ||
        subject.subjectCode.toLowerCase().includes(search.toLowerCase())
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

                                <h2
                                    className="fw-bold"
                                    style={{color:"white"}}
                                >
                                    📚 Subjects
                                </h2>

                                <p style={{color:"#cbd5e1"}}>
                                    Manage all subjects
                                </p>

                            </div>


                            <button
                                className="btn btn-success rounded-pill px-4"
                                onClick={openAddModal}
                            >
                                + Add Subject
                            </button>


                        </div>


                        <div className="mt-4 mb-4">

                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="🔍 Search Subject..."
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
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Credits</th>
                                        <th>Semester</th>
                                        <th>Teacher</th>
                                        <th className="text-center">
                                            Actions
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                {
                                    filteredSubjects.length===0 ? (

                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center py-5"
                                            >
                                                No Subjects Found
                                            </td>
                                        </tr>

                                    ) : (

                                        filteredSubjects.map(subject=>(

                                            <tr key={subject.id}>

                                                <td>{subject.id}</td>

                                                <td>{subject.subjectCode}</td>

                                                <td>{subject.subjectName}</td>

                                                <td>{subject.credits}</td>

                                                <td>{subject.semester}</td>

                                                <td>
                                                    {
                                                        subject.teacher
                                                        ?
                                                        subject.teacher.name
                                                        :
                                                        "Not Assigned"
                                                    }
                                                </td>


                                                <td className="text-center">

                                                    <button
                                                        className="btn btn-warning btn-sm rounded-pill me-2"
                                                        onClick={()=>editSubject(subject)}
                                                    >
                                                        Edit
                                                    </button>


                                                    <button
                                                        className="btn btn-danger btn-sm rounded-pill"
                                                        onClick={()=>deleteSubject(subject.id)}
                                                    >
                                                        Delete
                                                    </button>

                                                </td>

                                            </tr>

                                        ))

                                    )
                                }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>


            <SubjectModal
                form={form}
                setForm={setForm}
                saveSubject={saveSubject}
                editingId={editingId}
            />


        </div>

    );

}

export default Subjects;