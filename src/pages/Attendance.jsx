import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AttendanceTable from "../components/AttendanceTable";
import AttendanceModal from "../components/AttendanceModal";
import api from "../services/api";

function Attendance(){

    const [attendance,setAttendance]=useState([]);
    const [search,setSearch]=useState("");
    const [editingId,setEditingId]=useState(null);


    const [form,setForm]=useState({
        studentId:"",
        attendanceDate:"",
        status:""
    });


    useEffect(()=>{
        loadAttendance();
    },[]);



    const loadAttendance=async()=>{

        try{

            const token=localStorage.getItem("token");

            const response=await api.get("/attendance",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            setAttendance(response.data.data);

        }catch(error){

            console.log(error);
            alert("Failed to load attendance");

        }

    };



    const openAddModal=()=>{

        setEditingId(null);

        setForm({
            studentId:"",
            attendanceDate:"",
            status:""
        });


        const modal=new bootstrap.Modal(
            document.getElementById("attendanceModal")
        );

        modal.show();

    };



    const saveAttendance=async()=>{

        try{

            const token=localStorage.getItem("token");


            if(editingId==null){

                await api.post("/attendance",form,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

            }else{

                await api.put(`/attendance/${editingId}`,form,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

            }


            loadAttendance();


document.getElementById("closeModal").click();

Swal.fire({
    icon: "success",
    title: editingId === null ? "Attendance Added!" : "Attendance Updated!",
    text:
        editingId === null
            ? "Attendance has been added successfully."
            : "Attendance has been updated successfully.",
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



    const editAttendance=(record)=>{

        setEditingId(record.id);


        setForm({
            studentId:record.student?.id || "",
            attendanceDate:record.attendanceDate,
            status:record.status
        });


        const modal=new bootstrap.Modal(
            document.getElementById("attendanceModal")
        );

        modal.show();

    };



    const deleteAttendance = async (id) => {

    const result = await Swal.fire({

        title: "Delete Attendance?",

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

        await api.delete(`/attendance/${id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        loadAttendance();

        Swal.fire({

            icon: "success",

            title: "Deleted!",

            text: "Attendance deleted successfully.",

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

            text: "Unable to delete attendance.",

            background: "#1e293b",
            color: "#fff"

        });

    }

};


    const filteredAttendance=attendance.filter(record=>

        record.student?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

        ||

        record.status
        ?.toLowerCase()
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

                                <h2
                                    className="fw-bold"
                                    style={{color:"white"}}
                                >
                                    📅 Attendance
                                </h2>


                                <p style={{color:"#cbd5e1"}}>
                                    Manage student attendance
                                </p>

                            </div>



                            <button
                                className="btn btn-success rounded-pill px-4"
                                onClick={openAddModal}
                            >
                                + Add Attendance
                            </button>


                        </div>




                        <div className="mt-4 mb-4">

                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="🔍 Search Student or Status..."
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                            />

                        </div>




                        <AttendanceTable
                            attendance={filteredAttendance}
                            editAttendance={editAttendance}
                            deleteAttendance={deleteAttendance}
                        />



                    </div>


                </div>


            </div>



            <AttendanceModal
                form={form}
                setForm={setForm}
                saveAttendance={saveAttendance}
                editingId={editingId}
            />


        </div>

    );

}


export default Attendance;