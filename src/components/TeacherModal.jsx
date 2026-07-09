function TeacherModal({

    form,
    setForm,
    saveTeacher,
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
            id="teacherModal"
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
                                "linear-gradient(90deg,#059669,#2563eb)"
                        }}
                    >

                        <h4 className="modal-title fw-bold">

                            {editingId === null
                                ? "👨‍🏫 Add Teacher"
                                : "✏ Edit Teacher"}

                        </h4>

                        <button
                            id="closeTeacherModal"
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                        />

                    </div>

                    <div className="modal-body p-4">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Teacher Name

                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Email

                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Phone

                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    value={form.phone}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Department

                                </label>

                                <input
                                    type="text"
                                    name="department"
                                    className="form-control"
                                    value={form.department}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Designation

                                </label>

                                <input
                                    type="text"
                                    name="designation"
                                    className="form-control"
                                    value={form.designation}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Salary

                                </label>

                                <input
                                    type="number"
                                    name="salary"
                                    className="form-control"
                                    value={form.salary}
                                    onChange={handleChange}
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
                            className="btn btn-success rounded-pill px-4"
                            onClick={saveTeacher}
                        >

                            {editingId === null
                                ? "Add Teacher"
                                : "Update Teacher"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default TeacherModal;