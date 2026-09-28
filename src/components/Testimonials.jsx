import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  {
    quote:
      'A clean and practical approach to turning requirements into a working product.',
    name: 'Client / Project Partner',
    role: 'Project Collaboration',
  },
  {
    quote:
      'The development process was clear, focused and easy to work with.',
    name: 'Client / Project Partner',
    role: 'Web Development',
  },
  {
    quote:
      'Strong attention to both the technical implementation and user experience.',
    name: 'Client / Project Partner',
    role: 'Application Development',
  },
];

function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = sectionRef.current.querySelectorAll(
      '.testimonial-item'
    );

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
      className="bg-black text-white py-5"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row py-5">

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              Testimonials
            </p>

            <h2 className="display-4 fw-semibold lh-1">
              What people
              <br />
              say.
            </h2>
          </div>

          <div className="col-12 col-lg-7 offset-lg-1">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="testimonial-item py-5 border-top border-secondary border-opacity-25"
              >
                <p className="display-6 fw-normal lh-sm mb-5">
                  “{testimonial.quote}”
                </p>

                <div>
                  <p className="mb-1 fw-semibold">
                    {testimonial.name}
                  </p>

                  <p className="small text-secondary mb-0">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;