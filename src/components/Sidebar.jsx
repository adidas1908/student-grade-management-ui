import { Link, useLocation } from "react-router-dom";

function Sidebar(){

    const location=useLocation();


    const menu=[
        {
            name:"Dashboard",
            path:"/dashboard",
            icon:"📊"
        },
        {
            name:"Students",
            path:"/students",
            icon:"🎓"
        },
        {
            name:"Teachers",
            path:"/teachers",
            icon:"👨‍🏫"
        },
        {
            name:"Subjects",
            path:"/subjects",
            icon:"📚"
        },
        {
            name:"Marks",
            path:"/marks",
            icon:"📝"
        },
        {
            name:"Attendance",
            path:"/attendance",
            icon:"📅"
        }
    ];


    return(

        <div
            className="d-flex flex-column shadow-lg"
            style={{
                width:"270px",
                minHeight:"100vh",
                position:"sticky",
                top:0,
                background:
                "linear-gradient(180deg,#0f172a,#111827,#1e3a8a)",
                borderRight:
                "1px solid rgba(255,255,255,.15)",
                backdropFilter:"blur(20px)"
            }}
        >


            <div
                className="text-center py-4"
                style={{
                    borderBottom:
                    "1px solid rgba(255,255,255,.15)"
                }}
            >

                <h3
                    className="fw-bold"
                    style={{
                        color:"#38bdf8"
                    }}
                >
                    🎓 SGMS
                </h3>


                <small
                    style={{
                        color:"#cbd5e1"
                    }}
                >
                    Student Management
                </small>


            </div>





            <div className="p-3">


            {
                menu.map(item=>(


                    <Link
                        key={item.path}
                        to={item.path}
                        className="nav-link rounded px-3 py-3 mb-2"
                        style={{
                            fontSize:"17px",
                            color:
                            location.pathname===item.path
                            ?
                            "white"
                            :
                            "#cbd5e1",

                            background:
                            location.pathname===item.path
                            ?
                            "rgba(59,130,246,.8)"
                            :
                            "transparent",

                            transition:"0.3s"
                        }}
                    >

                        <span className="me-3">
                            {item.icon}
                        </span>


                        {item.name}


                    </Link>


                ))
            }


            </div>






            <div
                className="mt-auto text-center p-3"
                style={{
                    borderTop:
                    "1px solid rgba(255,255,255,.15)"
                }}
            >

                <small
                    style={{
                        color:"#94a3b8"
                    }}
                >
                    Student Grade Management
                </small>


            </div>



        </div>


    );

}


export default Sidebar;