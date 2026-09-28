function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-fluid px-4 px-lg-5 py-5">

        <div className="row py-5">

          <div className="col-12 col-lg-7 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              Let's create something
            </p>

            <h2 className="display-3 fw-semibold lh-1 mb-4">
              Build something
              <br />
              meaningful.
            </h2>

            <a
              href="#contact"
              className="btn btn-light rounded-pill px-4 py-3"
            >
              Start a Project ↗
            </a>
          </div>

          <div className="col-12 col-lg-5">
            <div className="row g-4">

              <div className="col-6">
                <p className="small text-secondary mb-3">
                  NAVIGATION
                </p>

                <div className="d-flex flex-column gap-2">
                  <a
                    href="#work"
                    className="text-white text-decoration-none"
                  >
                    Work
                  </a>

                  <a
                    href="#services"
                    className="text-white text-decoration-none"
                  >
                    Services
                  </a>

                  <a
                    href="#about"
                    className="text-white text-decoration-none"
                  >
                    About
                  </a>

                  <a
                    href="#contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="col-6">
                <p className="small text-secondary mb-3">
                  CONNECT
                </p>

                <div className="d-flex flex-column gap-2">
                  <a
                    href="mailto:leninsivamani@gmail.com"
                    className="text-white text-decoration-none"
                  >
                    Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/leninsivamani"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-none"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/leninsivamani"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-none"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="border-top border-secondary border-opacity-25 pt-4">
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2 small text-secondary">
            <span>© 2026 Lenin Sivamani</span>
            <span>Full Stack Developer · Hyderabad, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;