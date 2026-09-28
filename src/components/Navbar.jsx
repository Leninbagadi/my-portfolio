function Navbar() {
  return (
    <nav className="fixed top-0 start-0 w-100 z-3">
      <div className="container-fluid px-4 px-lg-5 py-4">
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="#"
            className="text-white text-decoration-none fw-semibold fs-5"
          >
            LS.
          </a>

          <div className="d-none d-md-flex align-items-center gap-4">
            <a href="#work" className="text-white text-decoration-none small">
              Work
            </a>

            <a href="#services" className="text-white text-decoration-none small">
              Services
            </a>

            <a href="#about" className="text-white text-decoration-none small">
              About
            </a>

            <a
              href="#contact"
              className="btn btn-light rounded-pill px-4 py-2 small"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;