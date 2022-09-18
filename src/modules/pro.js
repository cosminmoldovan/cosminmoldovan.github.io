import React from 'react'

function pro(props) {
const projects = props.projects.map(project => (
    <div className='project-details' {...project} />
    ));
  return (
    <details>
        <summary>{props.summary}</summary>
        {projects}
    </details>
  )
}

export default pro