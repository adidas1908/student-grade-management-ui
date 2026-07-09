import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        Swal.fire({

            title: "Logout?",

            text: "Do you really want to logout?",

            icon: "question",

            showCancelButton: true,

            confirmButtonText: "Logout",

            cancelButtonText: "Cancel",

            background: "#1e293b",

            color: "#fff"

        }).then((result) => {

            if (result.isConfirmed) {

                localStorage.removeItem("token");

                navigate("/");

            }

        });

    };

    return (

        <nav
            className="shadow"
            style={{
                height: "75px",
                background: "rgba(15,23,42,.85)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,.1)"
            }}
        >

            <div className="container-fluid h-100 d-flex align-items-center justify-content-between">

                <h3
                    className="fw-bold m-0"
                    style={{ color: "white" }}
                >
                    🎓 Student Grade Management
                </h3>

                <div className="d-flex align-items-center gap-4">

                    <div
                        className="text-end"
                        style={{ color: "#cbd5e1" }}
                    >

                        <div
                            style={{
                                fontWeight: "600",
                                fontSize: "17px"
                            }}
                        >
                            👋 Welcome Admin
                        </div>

                        <small>
                            {new Date().toLocaleDateString()}
                        </small>

                    </div>

                    <button
                        className="btn btn-danger rounded-pill px-4"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;