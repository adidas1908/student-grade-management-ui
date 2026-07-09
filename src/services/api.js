import axios from "axios";

const api = axios.create({
    baseURL: "https://student-grade-management-backend-production.up.railway.app/api",
});

export default api;