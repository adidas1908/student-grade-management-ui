function StudentModal({

    form,
    setForm,
    saveStudent,
    editingId

}) {

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    return (

    <div
        className="modal fade"
        id="studentModal"
        tabIndex="-1"
    >

        <div className="modal-dialog modal-lg modal-dialog-centered">

            <div
                className="modal-content border-0 shadow-lg"
                style={{
                    background: "#1e293b",
                    color: "white",
                    borderRadius: "20px"
                }}
            >

                <div
                    className="modal-header border-0"
                    style={{
                        background:
                            "linear-gradient(90deg,#7c3aed,#2563eb)"
                    }}
                >

                    <h4 className="modal-title fw-bold">

                        {editingId
                            ? "✏ Edit Student"
                            : "🎓 Add Student"}

                    </h4>

                    <button
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        id="closeModal"
                    ></button>

                </div>

                <div className="modal-body p-4">

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label text-white">
                                First Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                style={{
                                    background: "#334155",
                                    color: "white",
                                    border: "1px solid #475569"
                                }}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label text-white">
                                Last Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                style={{
                                    background: "#334155",
                                    color: "white",
                                    border: "1px solid #475569"
                                }}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label text-white">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                style={{
                                    background: "#334155",
                                    color: "white",
                                    border: "1px solid #475569"
                                }}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label text-white">
                                Phone
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                style={{
                                    background: "#334155",
                                    color: "white",
                                    border: "1px solid #475569"
                                }}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label text-white">
                                Course
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="course"
                                value={form.course}
                                onChange={handleChange}
                                style={{
                                    background: "#334155",
                                    color: "white",
                                    border: "1px solid #475569"
                                }}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label text-white">
                                Semester
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="semester"
                                value={form.semester}
                                onChange={handleChange}
                                style={{
                                    background: "#334155",
                                    color: "white",
                                    border: "1px solid #475569"
                                }}
                            />

                        </div>

                    </div>

                </div>

                <div className="modal-footer border-0">

                    <button
                        className="btn btn-secondary rounded-pill px-4"
                        data-bs-dismiss="modal"
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary rounded-pill px-4"
                        onClick={saveStudent}
                    >

                        {editingId
                            ? "Update Student"
                            : "Add Student"}

                    </button>

                </div>

            </div>

        </div>

    </div>

);
}
export default StudentModal
