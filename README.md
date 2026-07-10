# 🎓 Student Grade Management System - Frontend

A modern and responsive frontend application built with **React.js** for the Student Grade Management System.

The application provides an intuitive interface for managing students, subjects, marks, attendance, and user authentication by communicating with the Spring Boot REST API.

---


# ✨ Features

- 🔐 Secure Login & Registration
- 🏠 Interactive Dashboard
- 👨‍🎓 Student Management
- 📚 Subject Management
- 📝 Marks Management
- 📅 Attendance Management
- ✏️ Add, Edit & Delete Records
- 📱 Responsive User Interface
- 🎨 Modern Dark Theme UI
- 🔔 Success & Error Notifications
- 🔒 JWT Token Authentication
- ☁️ Vercel Deployment

---

# 🛠 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- Axios
- Bootstrap 5
- CSS3
- HTML5

### Backend

- Spring Boot REST API

### Authentication

- JWT (JSON Web Token)

### Deployment

- Vercel

---

# 📂 Project Structure

```
src
│
├── assets
├── components
│   ├── Navbar
│   ├── StudentModal
│   ├── SubjectModal
│   ├── MarkModal
│   ├── AttendanceModal
│   └── ProtectedRoute
│
├── pages
│   ├── Dashboard
│   ├── Login
│   ├── Register
│   ├── Students
│   ├── Subjects
│   ├── Marks
│   └── Attendance
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🔑 Authentication

The application uses JWT Authentication.

After successful login, the JWT token is stored in Local Storage and automatically included in all protected API requests.

Example Header

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📌 Application Modules

### 🔐 Authentication

- User Registration
- User Login
- Logout
- Protected Routes

---

### 👨‍🎓 Students

- View Students
- Add Student
- Update Student
- Delete Student

---

### 📚 Subjects

- View Subjects
- Add Subject
- Update Subject
- Delete Subject

---

### 📝 Marks

- View Marks
- Add Marks
- Update Marks
- Delete Marks

---

### 📅 Attendance

- View Attendance
- Add Attendance
- Update Attendance
- Delete Attendance

---

### 📊 Dashboard

Displays

- Total Students
- Total Subjects
- Total Marks
- Total Attendance
- Total Teachers

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/student-grade-management-ui.git
```

Move into the project

```bash
cd student-grade-management-ui
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

# 🌐 API Configuration

Update the backend URL inside

```
src/services/api.js
```

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "https://student-grade-management-backend-production.up.railway.app/api",
});

export default api;
```

---

# 📱 Responsive Design

The application is designed to work across

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 🎨 UI Highlights

- Modern Dashboard
- Dark Theme
- Bootstrap Modals
- Responsive Tables
- Form Validation
- Success Notifications
- Error Handling
- Clean Navigation

---

# 🔮 Future Enhancements

- User Profile
- Role-Based Dashboard
- Charts & Analytics
- Search & Filtering
- Pagination
- Export to PDF
- Export to Excel
- Light/Dark Theme Toggle
- Email Notifications

---

# 👨‍💻 Author

**Aditya Das**

B.Sc. Computer Science Graduate

Java Backend Developer | Spring Boot | React | MySQL

GitHub

https://github.com/YOUR_USERNAME

LinkedIn

https://www.linkedin.com/in/YOUR_LINKEDIN

---

# 🙏 Acknowledgements

This project was developed as a full-stack web application to strengthen skills in Java Backend Development, REST APIs, React.js, JWT Authentication, Database Management, and Cloud Deployment.

---

# ⭐ If you found this project useful, consider giving it a star.
