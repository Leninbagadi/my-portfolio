import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = sectionRef.current.querySelectorAll('.about-animate');

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
      id="about"
      className="bg-black text-white py-5"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row py-5">

          <div className="about-animate col-12 col-lg-4 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              About Me
            </p>

            <h2 className="display-4 fw-semibold lh-1">
              Building with
              <br />
              purpose.
            </h2>
          </div>

          <div className="col-12 col-lg-7 offset-lg-1">

            <p className="about-animate fs-3 lh-sm mb-5">
              I’m a Full Stack Developer focused on building practical,
              responsive and user-friendly digital products.
            </p>

            <p
              className="about-animate text-secondary fs-5 lh-lg mb-5"
              style={{ maxWidth: '700px' }}
            >
              My experience spans frontend development, backend systems,
              business applications and database-driven solutions. I enjoy
              turning real-world requirements into clean and useful web
              experiences.
            </p>

            <div className="about-animate row g-4 border-top border-secondary border-opacity-25 pt-4">

              <div className="col-6 col-md-4">
                <p className="small text-secondary mb-2">FOCUS</p>
                <p className="mb-0">Web Development</p>
              </div>

              <div className="col-6 col-md-4">
                <p className="small text-secondary mb-2">EXPERIENCE</p>
                <p className="mb-0">Business Applications</p>
              </div>

              <div className="col-6 col-md-4">
                <p className="small text-secondary mb-2">BASED IN</p>
                <p className="mb-0">Hyderabad, India</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;