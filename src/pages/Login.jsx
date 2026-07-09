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
});            console.log(error);

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-5">

                    <div className="card shadow-lg">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4">
                                Student Grade Management
                            </h2>

                            <h5 className="text-center text-secondary mb-4">
                                Admin Login
                            </h5>

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

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;