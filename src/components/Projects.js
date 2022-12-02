import React from 'react'
import ProjectsData from '../ProjectsData';
import Card from './Card';

const projects = ProjectsData.map(project => (
    <Card key={project.id} {...project} />
));
function Projects() {
    return (
        <section className='projects' id='projects'>
            {projects}
        </section>
    )
}

export default Projects