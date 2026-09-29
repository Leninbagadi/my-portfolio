function ProjectVisual({ type }) {
  if (type === 'attendance') {
    return (
      <div className="bg-black rounded-4 p-3 shadow-lg">
        <div className="bg-dark rounded-3 p-3 p-md-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="small text-secondary mb-1">
                DASHBOARD
              </p>
              <h4 className="text-white mb-0">
                Attendance Overview
              </h4>
            </div>

            <span className="badge text-bg-secondary">
              This Month
            </span>
          </div>

          <div className="row g-2 g-md-3 mb-3">

            <div className="col-6 col-md-3">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Present
                </small>

                <h3 className="text-white mb-0 mt-2">
                  128
                </h3>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Absent
                </small>

                <h3 className="text-white mb-0 mt-2">
                  12
                </h3>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Late
                </small>

                <h3 className="text-white mb-0 mt-2">
                  08
                </h3>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  OT
                </small>

                <h3 className="text-white mb-0 mt-2">
                  24
                </h3>
              </div>
            </div>

          </div>

          <div className="bg-secondary bg-opacity-25 rounded-3 p-3 p-md-4">

            <div className="d-flex justify-content-between mb-4">
              <span className="text-white">
                Weekly Activity
              </span>

              <span className="small text-secondary">
                Overview
              </span>
            </div>

            <div
              className="d-flex align-items-end gap-2"
              style={{ height: '150px' }}
            >
              {[45, 65, 52, 82, 60, 75, 90, 68, 78].map(
                (height, index) => (
                  <div
                    key={index}
                    className="bg-light rounded-top flex-grow-1"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

          </div>

        </div>
      </div>
    );
  }
    if (type === 'tasks') {
    const tasks = [
      {
        title: 'Website redesign',
        status: 'In Progress',
      },
      {
        title: 'API integration',
        status: 'Completed',
      },
      {
        title: 'Dashboard updates',
        status: 'Pending',
      },
    ];

    return (
      <div className="bg-black rounded-4 p-3 shadow-lg">
        <div className="bg-dark rounded-3 p-3 p-md-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="small text-secondary mb-1">
                TASK MANAGEMENT
              </p>

              <h4 className="text-white mb-0">
                My Tasks
              </h4>
            </div>

            <span className="badge text-bg-secondary">
              08 Tasks
            </span>
          </div>

          <div className="d-flex flex-column gap-2">

            {tasks.map((task) => (
              <div
                key={task.title}
                className="bg-secondary bg-opacity-25 rounded-3 p-3"
              >
                <div className="d-flex justify-content-between align-items-center gap-3">

                  <span className="text-white small">
                    {task.title}
                  </span>

                  <span className="text-secondary small text-nowrap">
                    {task.status}
                  </span>

                </div>
              </div>
            ))}

          </div>

          <div className="row g-2 mt-2">

            <div className="col-4">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Pending
                </small>

                <h4 className="text-white mb-0 mt-2">
                  03
                </h4>
              </div>
            </div>

            <div className="col-4">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Active
                </small>

                <h4 className="text-white mb-0 mt-2">
                  02
                </h4>
              </div>
            </div>

            <div className="col-4">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Done
                </small>

                <h4 className="text-white mb-0 mt-2">
                  03
                </h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
    if (type === 'aivariant') {
    const tasks = [
      {
        title: 'Landing Page',
        status: 'In Progress',
      },
      {
        title: 'API Integration',
        status: 'Completed',
      },
      {
        title: 'Client Meeting',
        status: 'Scheduled',
      },
    ];

    return (
      <div className="bg-black rounded-4 p-3 shadow-lg">
        <div className="bg-dark rounded-3 p-3 p-md-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="small text-secondary mb-1">
                PROJECT WORKSPACE
              </p>

              <h4 className="text-white mb-0">
                Team Overview
              </h4>
            </div>

            <span className="badge text-bg-secondary">
              Active
            </span>
          </div>

          <div className="row g-2 mb-3">

            <div className="col-4">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Projects
                </small>

                <h4 className="text-white mb-0 mt-2">
                  06
                </h4>
              </div>
            </div>

            <div className="col-4">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Members
                </small>

                <h4 className="text-white mb-0 mt-2">
                  12
                </h4>
              </div>
            </div>

            <div className="col-4">
              <div className="bg-secondary bg-opacity-25 rounded-3 p-3">
                <small className="text-secondary">
                  Progress
                </small>

                <h4 className="text-white mb-0 mt-2">
                  78%
                </h4>
              </div>
            </div>

          </div>

          <div className="bg-secondary bg-opacity-25 rounded-3 p-3">

            <div className="d-flex justify-content-between mb-3">
              <span className="text-white small">
                Recent Activity
              </span>

              <span className="text-secondary small">
                Today
              </span>
            </div>

            <div className="d-flex flex-column gap-2">

              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="d-flex justify-content-between align-items-center border-bottom border-light border-opacity-10 pb-2"
                >
                  <span className="text-white small">
                    {task.title}
                  </span>

                  <span className="text-secondary small">
                    {task.status}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    );
  }

  return null;
}

export default ProjectVisual;