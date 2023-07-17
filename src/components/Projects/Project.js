import React from 'react';
import './Styles.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    subTitle: 'Description 1',
    tech: 'MERN Stack',
    imageUrl: 'https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80',
  },
  {
    id: 2,
    title: 'Project 2',
    subTitle: 'Description 2',
    tech: 'FullStack',
    imageUrl: 'https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80',
  },
  {
    id: 1,
    title: 'Project 1',
    subTitle: 'Description 1',
    tech: 'MERN Stack',
    imageUrl: 'https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80',
  },
  {
    id: 2,
    title: 'Project 2',
    subTitle: 'Description 2',
    tech: 'FullStack',
    imageUrl: 'https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80',
  },
  
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section className="project-section" id='Projects'>
      <div className='project-section-title'>PROJECTS<span className='project-title-hl'>Awesome</span></div>
      <div className='project-section-subtitle'>A showcase for the different project developed.</div>   
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
          <div className='img-container'><img className="project-image" src={project.imageUrl} alt={project.title}/></div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-tech">{project.tech}</span>
              <p className="project-subtitle">{project.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
