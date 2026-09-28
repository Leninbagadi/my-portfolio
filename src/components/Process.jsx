import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'I start by understanding the requirement, users, goals and the problem the product needs to solve.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'I break the project into clear features, define the technical approach and plan the development flow.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I develop the interface, backend logic and integrations while keeping the product practical and maintainable.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'I test the product, improve the experience and make sure the final result is ready for real-world use.',
  },
];

function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = sectionRef.current.querySelectorAll('.process-item');

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

  return (
    <section
      ref={sectionRef}
      className="bg-light text-dark py-5"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row py-5">

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              Process
            </p>

            <h2 className="display-4 fw-semibold lh-1">
              From idea
              <br />
              to product.
            </h2>
          </div>

          <div className="col-12 col-lg-7 offset-lg-1">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-item py-4 border-top border-dark border-opacity-25"
              >
                <div className="row g-4">

                  <div className="col-3 col-md-2">
                    <span className="small text-secondary">
                      {step.number}
                    </span>
                  </div>

                  <div className="col-9 col-md-4">
                    <h3 className="h2 mb-0">
                      {step.title}
                    </h3>
                  </div>

                  <div className="col-12 col-md-6">
                    <p className="text-secondary mb-0 lh-lg">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

            <div className="process-item py-4 border-top border-dark border-opacity-25">
              <div className="row">
                <div className="col-3 col-md-2">
                  <span className="small text-secondary">
                    →
                  </span>
                </div>

                <div className="col-9 col-md-10">
                  <p className="fs-4 mb-0">
                    A clear process. A useful product. A better experience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;