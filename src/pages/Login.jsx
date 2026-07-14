import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Swal from "sweetalert2";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.data.token);

            await Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: "Welcome back 👋",
                timer: 1800,
                showConfirmButton: false,
                background: "#1e293b",
                color: "#fff"
            });

            navigate("/dashboard");

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Invalid Email or Password",
                background: "#1e293b",
                color: "#fff"
            });

            console.log(error);

        }

    };

    const handleDemoLogin = async () => {

        try {

            const response = await api.post("/auth/demo-login");

            localStorage.setItem("token", response.data.data.token);

            await Swal.fire({
                icon: "success",
                title: "Demo Login Successful!",
                text: "Exploring Student Grade Management 🚀",
                timer: 1800,
                showConfirmButton: false,
                background: "#1e293b",
                color: "#fff"
            });

            navigate("/dashboard");

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: "Demo Login Failed",
                text: "Demo account is unavailable.",
                background: "#1e293b",
                color: "#fff"
            });

            console.log(error);

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div
                            className="card-header text-white text-center py-4"
                            style={{
                                background:
                                    "linear-gradient(90deg,#7c3aed,#2563eb)"
                            }}
                        >

                            <h2 className="fw-bold mb-2">

                                Student Grade Management

                            </h2>

                            <p className="mb-0">

                                Secure Admin Portal

                            </p>

                        </div>

                        <div className="card-body p-5">

                            <form onSubmit={handleLogin}>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>

                                <div className="mb-4">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    type="submit">

                                    Login

                                </button>

                            </form>

                            <div className="text-center my-4">

                                <span className="text-muted">

                                    OR

                                </span>

                            </div>

                            <button
                                className="btn btn-success w-100"
                                onClick={handleDemoLogin}
                            >

                                🚀 Explore Live Demo

                            </button>

                            <div className="text-center mt-4">

                                <small className="text-muted">

                                    Recruiters can explore the complete
                                    application instantly without credentials.

                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;
