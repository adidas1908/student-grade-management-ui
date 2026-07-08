import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MarkTable from "../components/MarkTable";
import MarkModal from "../components/MarkModal";
import api from "../services/api";

function Marks(){

    const [marks,setMarks]=useState([]);
    const [search,setSearch]=useState("");
    const [editingId,setEditingId]=useState(null);


    const [form,setForm]=useState({
        studentId:"",
        subjectId:"",
        internalMarks:"",
        externalMarks:""
    });


    useEffect(()=>{
        loadMarks();
    },[]);



    const loadMarks=async()=>{

        try{

            const token=localStorage.getItem("token");

            const response=await api.get("/marks",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            setMarks(response.data.data);

        }catch(error){

            console.log(error);
            alert("Failed to load marks");

        }

    };



    const openAddModal=()=>{

        setEditingId(null);

        setForm({
            studentId:"",
            subjectId:"",
            internalMarks:"",
            externalMarks:""
        });


        const modal=new bootstrap.Modal(
            document.getElementById("markModal")
        );

        modal.show();

    };



    const saveMarks=async()=>{

        try{

            const token=localStorage.getItem("token");


            if(editingId==null){

                await api.post("/marks",form,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

            }else{

                await api.put(`/marks/${editingId}`,form,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

            }


            loadMarks();


            document.getElementById("closeMarkModal").click();


        }catch(error){

            console.log(error);
            alert("Operation Failed");

        }

    };



    const editMarks=(mark)=>{

        setEditingId(mark.id);


        setForm({

            studentId:mark.student?.id || "",
            subjectId:mark.subject?.id || "",
            internalMarks:mark.internalMarks,
            externalMarks:mark.externalMarks

        });



        const modal=new bootstrap.Modal(
            document.getElementById("markModal")
        );

        modal.show();

    };



    const deleteMarks = async (id) => {

    const result = await Swal.fire({

        title: "Delete Marks?",

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

        await api.delete(`/marks/${id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        loadMarks();

        Swal.fire({

            icon: "success",

            title: "Deleted!",

            text: "Marks deleted successfully.",

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

            text: "Unable to delete marks.",

            background: "#1e293b",
            color: "#fff"

        });

    }

};



    const filteredMarks=marks.filter(mark=>

        mark.student?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

        ||

        mark.subject?.subjectName
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
                                    📊 Marks
                                </h2>


                                <p style={{color:"#cbd5e1"}}>
                                    Manage student marks
                                </p>

                            </div>



                            <button
                                className="btn btn-success rounded-pill px-4"
                                onClick={openAddModal}
                            >
                                + Add Marks
                            </button>


                        </div>



                        <div className="mt-4 mb-4">

                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="🔍 Search Student or Subject..."
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                            />

                        </div>



                        <MarkTable
                            marks={filteredMarks}
                            editMarks={editMarks}
                            deleteMarks={deleteMarks}
                        />


                    </div>


                </div>


            </div>



            <MarkModal
                form={form}
                setForm={setForm}
                saveMarks={saveMarks}
                editingId={editingId}
            />


        </div>

    );

}


export default Marks;