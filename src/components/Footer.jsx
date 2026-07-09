function Footer() {

    return (

        <footer
            className="text-center mt-5 py-4"
            style={{
                color: "#94a3b8"
            }}
        >

            <hr
                style={{
                    borderColor: "rgba(255,255,255,.15)"
                }}
            />

            <h6 className="mb-3 text-white">
                Student Grade Management System
            </h6>

            <div>
                <strong>Developer:</strong> Aditya Das
            </div>

            <div>
                <strong>Frontend:</strong> React.js
            </div>

            <div>
                <strong>Backend:</strong> Spring Boot
            </div>

            <div>
                <strong>Database:</strong> MySQL
            </div>

            <div>
                <strong>Version:</strong> 1.0.0
            </div>

            <div className="mt-3">
                © 2026 Student Grade Management System
            </div>

        </footer>

    );

}

export default Footer;