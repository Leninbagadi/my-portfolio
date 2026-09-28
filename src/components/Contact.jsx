import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = sectionRef.current.querySelectorAll('.contact-animate');

    gsap.fromTo(
      elements,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-light text-dark py-5"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row min-vh-100 align-items-center py-5">

          <div className="col-12 col-lg-8">

            <p className="contact-animate text-uppercase small text-secondary mb-4">
              Start a Project
            </p>

            <h2 className="contact-animate display-1 fw-semibold lh-1 mb-5">
              Have an idea?
              <br />
              Let’s build it.
            </h2>

            <p
              className="contact-animate fs-5 text-secondary mb-5"
              style={{ maxWidth: '650px' }}
            >
              Whether you need a website, business application, dashboard or
              help developing an existing project, let’s talk about what you
              are building.
            </p>

            <div className="contact-animate d-flex flex-column flex-sm-row gap-3">
              <a
                href="mailto:leninsivamani@gmail.com"
                className="btn btn-dark rounded-pill px-4 py-3"
              >
                Send an Email ↗
              </a>

              <a
                href="#work"
                className="btn btn-outline-dark rounded-pill px-4 py-3"
              >
                View My Work
              </a>
            </div>

          </div>

          <div className="col-12 col-lg-4 mt-5 mt-lg-0">

            <div className="contact-animate border-top border-dark border-opacity-25 pt-4">

              <p className="small text-secondary mb-3">
                AVAILABLE FOR
              </p>

              <p className="fs-5 mb-4">
                Freelance projects
                <br />
                Full-stack development
                <br />
                Frontend development
                <br />
                White-label work
              </p>

              <p className="small text-secondary mb-3">
                BASED IN
              </p>

              <p className="fs-5 mb-0">
                Hyderabad, India
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;