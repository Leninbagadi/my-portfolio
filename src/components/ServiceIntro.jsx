import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function ServicesIntro() {
    const sectionRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const items = sectionRef.current.querySelectorAll('.service-item');

  gsap.fromTo(
    items,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    }
  );
}, []);
  const services = [
    {
      number: '01',
      title: 'Frontend Development',
      text: 'Modern, responsive interfaces built with React and focused on clear user experiences.',
    },
    {
      number: '02',
      title: 'Full-Stack Development',
      text: 'Complete web applications connecting React frontends with Java and Spring Boot backends.',
    },
    {
      number: '03',
      title: 'Business Applications',
      text: 'Internal systems and workflow applications designed around real business requirements.',
    },
    {
      number: '04',
      title: 'Dashboards & Systems',
      text: 'Role-based dashboards, management systems and data-driven interfaces.',
    },
  ];

  return (
    <section
  ref={sectionRef}
  id="services"
  className="bg-light text-dark py-5"
>
      <div className="container-fluid px-4 px-lg-5 py-5">
        {/* Introduction */}
        <div className="row py-lg-5 mb-5">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              What I Build
            </p>

            <span className="display-6 fw-semibold">01 —</span>
          </div>

          <div className="col-12 col-lg-8">
            <h2
              className="display-3 fw-semibold lh-1 mb-4"
              style={{ maxWidth: '900px' }}
            >
              Digital products that solve real problems.
            </h2>

            <p
              className="fs-5 text-secondary"
              style={{ maxWidth: '700px' }}
            >
              I build modern web applications, business systems and
              interactive frontend experiences using React, Java and
              Spring Boot.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="row border-top border-dark-subtle">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-item col-12 col-md-6 border-bottom border-dark-subtle p-4 p-lg-5"
            >
              <div className="d-flex justify-content-between mb-5">
                <span className="small text-secondary">
                  {service.number}
                </span>

                <span className="fs-4">↗</span>
              </div>

              <h3 className="h2 fw-semibold mb-3">
                {service.title}
              </h3>

              <p
                className="text-secondary mb-0"
                style={{ maxWidth: '500px' }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesIntro;