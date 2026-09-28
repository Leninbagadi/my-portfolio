
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const projects = [
  {
    number: '01',
    title: 'Attendance Management System',
    category: 'Business Application',
    description:
      'A role-based internal web application designed to simplify attendance, shift, overtime and workforce management.',
    technologies: 'React · Spring Boot · MSSQL · IIS',
  },
  {
    number: '02',
    title: 'Task Management System',
    category: 'Business Application',
    description:
      'A department-based task management platform with role-based access, dashboards and secure authentication.',
    technologies: 'React · Spring Boot · JWT · MSSQL',
  },
  {
    number: '03',
    title: 'AIVariant',
    category: 'Team Project',
    description:
      'A collaborative project management platform with scheduling, standups, Kanban workflows and progress tracking.',
    technologies: 'React · Java · Spring Boot',
  },
];

function Projects() {
    const sectionRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const items = sectionRef.current.querySelectorAll('.project-item');

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
  id="work"
  className="bg-black text-white py-5"
>
      <div className="container-fluid px-4 px-lg-5 py-5">

        {/* Section heading */}
        <div className="row py-lg-5 mb-5">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              Selected Work
            </p>

            <span className="display-6 fw-semibold">02 —</span>
          </div>

          <div className="col-12 col-lg-8">
            <h2
              className="display-3 fw-semibold lh-1 mb-4"
              style={{ maxWidth: '900px' }}
            >
              Real projects.
              <br />
              Real problems.
            </h2>

            <p
              className="fs-5 text-secondary"
              style={{ maxWidth: '700px' }}
            >
              A selection of web applications and digital products
              I've worked on across business systems and collaborative
              development projects.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="border-top border-secondary border-opacity-25">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-item py-5 border-bottom border-secondary border-opacity-25"
            >
              <div className="row align-items-start">

                <div className="col-12 col-md-1 mb-3 mb-md-0">
                  <span className="small text-secondary">
                    {project.number}
                  </span>
                </div>

                <div className="col-12 col-md-5 mb-4 mb-md-0">
                  <p className="small text-secondary mb-2">
                    {project.category}
                  </p>

                  <h3 className="display-6 fw-semibold mb-0">
                    {project.title}
                  </h3>
                </div>

                <div className="col-12 col-md-5">
                  <p className="text-secondary mb-4">
                    {project.description}
                  </p>

                  <p className="small mb-0">
                    {project.technologies}
                  </p>
                </div>

                <div className="col-12 col-md-1 text-md-end mt-4 mt-md-0">
                  <span className="fs-4">↗</span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;