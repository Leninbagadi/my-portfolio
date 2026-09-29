import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectVisual from './ProjectVisual';

function ProjectShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const content = sectionRef.current.querySelector('.showcase-content');
    const visual = sectionRef.current.querySelector('.showcase-visual');

    gsap.fromTo(
      content,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );

    gsap.fromTo(
      visual,
      {
        y: 80,
        scale: 0.95,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-light text-dark overflow-hidden"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row align-items-center min-vh-100 py-5">

          {/* Project information */}
          <div className="showcase-content col-12 col-lg-5 py-5">
            <p className="text-uppercase small text-secondary mb-4">
              Featured Project · 01
            </p>

            <h2 className="display-3 fw-semibold lh-1 mb-4">
              Attendance
              <br />
              Management
              <br />
              System
            </h2>

            <p
              className="fs-5 text-secondary mb-5"
              style={{ maxWidth: '520px' }}
            >
              A role-based business application designed to simplify
              attendance, shift, overtime and workforce management.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-5">
              {['React', 'Java', 'Spring Boot', 'MSSQL', 'IIS'].map(
                (technology) => (
                  <span
                    key={technology}
                    className="border border-dark rounded-pill px-3 py-2 small"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>

            <div className="row g-4">
              <div className="col-6">
                <p className="small text-secondary mb-1">
                  TYPE
                </p>
                <p className="mb-0 fw-semibold">
                  Business Application
                </p>
              </div>

              <div className="col-6">
                <p className="small text-secondary mb-1">
                  ROLE
                </p>
                <p className="mb-0 fw-semibold">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          <div className="showcase-visual col-12 col-lg-7">
  <ProjectVisual type="attendance" />
</div>

        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;