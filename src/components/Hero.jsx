function Hero() {
  return (
    <section className="min-vh-100 bg-black text-white position-relative overflow-hidden d-flex align-items-center">
      {/* Background glow */}
      <div
        className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-25"
        style={{
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Main content */}
      <div className="container-fluid px-4 px-lg-5 position-relative z-1">
        <div className="row">
          <div className="col-12 col-lg-10">
            <p className="text-uppercase small text-secondary mb-4 tracking-wide">
              Full Stack Developer · React · Java
            </p>

            <h1
              className="display-1 fw-semibold lh-1 mb-4"
              style={{ maxWidth: '1100px' }}
            >
              I BUILD DIGITAL
              <br />
              <span className="text-secondary">PRODUCTS & EXPERIENCES.</span>
            </h1>

            <div className="d-flex flex-column flex-md-row gap-3 align-items-md-center">
              <a
                href="#work"
                className="btn btn-light rounded-pill px-4 py-3"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="text-white text-decoration-none px-3 py-2"
              >
                Start a Project <span className="ms-2">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="position-absolute bottom-0 start-0 w-100 pb-4">
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2 small text-secondary">
            <span>Based in Hyderabad, India</span>
            <span>Available for selected projects</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;