
export default function Projects(){
    return(

    <>
      <h1>My Projects</h1>

 <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio built with React and React Router to showcase
            my skills and projects.
          </p>
        </div>

        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>
            A simple task tracking app using React state, props, and components.
          </p>
        </div>

        <div className="project-card">
          <h3>Blog Application</h3>
          <p>
            A multi-page blog app with routing and reusable components.
          </p>
        </div>
      </div>
    </div>
     
    </>

    )
    
}
