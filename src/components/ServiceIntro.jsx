import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Responsive and interactive interfaces built with React, JavaScript, HTML and CSS.',
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    description:
      'Complete web applications connecting modern frontend experiences with reliable backend systems.',
  },
  {
    number: '03',
    title: 'Business Applications',
    description:
      'Practical internal applications designed around real business workflows and requirements.',
  },
  {
    number: '04',
    title: 'Dashboards & Systems',
    description:
      'Role-based dashboards and management systems for organizing data, tasks and operations.',
  },
];

function ServicesIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = sectionRef.current.querySelectorAll('.service-item');

    items.forEach((item) => {
      const line = item.querySelector('.service-line');
      const number = item.querySelector('.service-number');

      gsap.fromTo(
        item,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        line,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'power3.out',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );

      item.addEventListener('mouseenter', () => {
        gsap.to(number, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(number, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-light text-dark py-5"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">

        <div className="row py-5">

          <div className="col-12 col-lg-5 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-4">
              What I Do
            </p>

            <h2 className="display-3 fw-semibold lh-1 mb-4">
              Digital products
              <br />
              that solve real
              <br />
              problems.
            </h2>

            <p
              className="fs-5 text-secondary lh-lg"
              style={{ maxWidth: '520px' }}
            >
              From responsive interfaces to business applications, I build
              practical digital experiences around real requirements.
            </p>
          </div>

          <div className="col-12 col-lg-6 offset-lg-1">

            {services.map((service) => (
              <article
                key={service.number}
                className="service-item position-relative py-4"
              >
                <div
                  className="service-line position-absolute top-0 start-0 w-100 border-top border-dark border-opacity-25"
                />

                <div className="row g-4 align-items-start">

                  <div className="col-2">
                    <span className="service-number small text-secondary d-inline-block">
                      {service.number}
                    </span>
                  </div>

                  <div className="col-10 col-md-5">
                    <h3 className="h2 mb-0">
                      {service.title}
                    </h3>
                  </div>

                  <div className="col-12 col-md-5">
                    <p className="text-secondary lh-lg mb-0">
                      {service.description}
                    </p>
                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesIntro;