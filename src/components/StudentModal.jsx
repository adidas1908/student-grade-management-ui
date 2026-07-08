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

            <div className="modal-dialog modal-lg">

                <div className="modal-content">

                    <div className="modal-header">

                        <h4>

                            {editingId
                                ? "Edit Student"
                                : "Add Student"}

                        </h4>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            id="closeModal">
                        </button>

                    </div>

                    <div className="modal-body">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    First Name

                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Last Name

                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Email

                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
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
                                    className="form-control"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Course

                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={form.course}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">

                                    Semester

                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="semester"
                                    value={form.semester}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">

                            Cancel

                        </button>

                        <button
                            className="btn btn-success"
                            onClick={saveStudent}
                        >

                            {editingId
                                ? "Update Student"
                                : "Save Student"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StudentModal;