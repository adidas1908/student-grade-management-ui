import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subjects from "./pages/Subjects";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Marks from "./pages/Marks";
import Attendance from "./pages/Attendance";
function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route
    path="/marks"
    element={<Marks />}
/>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
    path="/attendance"
    element={<Attendance />}
/>
                <Route path="/students" element={<Students />} />
                <Route
    path="/teachers"
    element={<Teachers />}
/>
                <Route
    path="/subjects"
    element={<Subjects />}
/>
            </Routes>

        </BrowserRouter>

    );

}

export default App;