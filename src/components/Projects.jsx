import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectVisual from './ProjectVisual';

const projects = [
  {
    number: '01',
    title: 'Attendance Management System',
    category: 'Business Application',
    description:
      'A role-based business application designed to simplify attendance, shift, overtime and workforce management.',
    technologies: 'React · Spring Boot · MSSQL · IIS',
    visual: 'attendance',
  },
  {
    number: '02',
    title: 'Task Management System',
    category: 'Business Application',
    description:
      'A department-based task management platform with role-based access, dashboards and secure authentication.',
    technologies: 'React · Spring Boot · JWT · MSSQL',
    visual: 'tasks',
  },
  {
    number: '03',
    title: 'AIVariant',
    category: 'Team Project',
    description:
      'A collaborative project management platform with scheduling, standups, Kanban workflows and progress tracking.',
    technologies: 'React · Java · Spring Boot',
    visual: 'aivariant',
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = sectionRef.current.querySelectorAll('.project-item');

    items.forEach((item) => {
      const number = item.querySelector('.project-number');
      const title = item.querySelector('.project-title');
      const arrow = item.querySelector('.project-arrow');

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

      const handleMouseEnter = () => {
        gsap.to(number, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(title, {
          x: 12,
          duration: 0.4,
          ease: 'power3.out',
        });

        gsap.to(arrow, {
          x: 8,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(number, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(title, {
          x: 0,
          duration: 0.4,
          ease: 'power3.out',
        });

        gsap.to(arrow, {
          x: 0,
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  useEffect(() => {
    if (!previewRef.current) {
      return;
    }

    const movePreview = (event) => {
      gsap.to(previewRef.current, {
        x: event.clientX + 30,
        y: event.clientY + 30,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', movePreview);

    return () => {
      window.removeEventListener('mousemove', movePreview);
    };
  }, []);

  const handleProjectEnter = (project) => {
    setActiveProject(project);

    if (previewRef.current) {
      gsap.fromTo(
        previewRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        }
      );
    }
  };

  const handleProjectLeave = () => {
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
      });
    }

    setActiveProject(null);
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="bg-black text-white py-5"
    >
      <div className="container-fluid px-4 px-lg-5 py-5">

        <div className="row py-5">

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p className="text-uppercase small text-secondary mb-3">
              Selected Work
            </p>

            <h2 className="display-4 fw-semibold lh-1">
              Things I've
              <br />
              built.
            </h2>
          </div>

          <div className="col-12 col-lg-7 offset-lg-1">

            {projects.map((project) => (
              <article
                key={project.number}
                className="project-item py-5 border-top border-secondary border-opacity-25"
                onMouseEnter={() => handleProjectEnter(project)}
                onMouseLeave={handleProjectLeave}
              >
                <div className="row g-4">

                  <div className="col-2 col-md-1">
                    <span className="project-number small text-secondary d-inline-block">
                      {project.number}
                    </span>
                  </div>

                  <div className="col-10 col-md-7">
                    <div className="d-flex align-items-center gap-3">
                      <h3 className="project-title display-6 fw-semibold mb-0">
                        {project.title}
                      </h3>

                      <span
                        className="project-arrow text-secondary"
                        style={{ opacity: 0.5 }}
                      >
                        ↗
                      </span>
                    </div>

                    <p className="small text-secondary mt-3 mb-0">
                      {project.category}
                    </p>
                  </div>

                  <div className="col-12 col-md-4">
                    <p className="text-secondary mb-3 lh-lg">
                      {project.description}
                    </p>

                    <p className="small mb-0">
                      {project.technologies}
                    </p>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </div>

      {activeProject && (
  <div
    ref={previewRef}
    className="d-none d-lg-block position-fixed top-0 start-0 shadow-lg"
    style={{
      width: '360px',
      zIndex: 20,
      pointerEvents: 'none',
    }}
  >
    <ProjectVisual type={activeProject.visual} />
  </div>
)}
    </section>
  );
}

export default Projects;