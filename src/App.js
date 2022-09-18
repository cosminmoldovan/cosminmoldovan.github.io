import React, { useState, useEffect } from 'react'
import LoadingScreen from './modules/LoadingScreen';
import Navbar from './modules/Navbar';
import Hero from './modules/Hero';
import About from './modules/About';
import ProjectsData from './ProjectsData';
import Card from './modules/Card';
import './css/main.css';
import { ReactComponent as FolderIcon } from './images/folder.svg'



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [])

  const projects = ProjectsData.map(project => (
    <Card {...project} />
  ))
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar />
          <Hero />
          
          <section className='projects' id='projects'>
            {/* <div className='projects__title'><FolderIcon /> Selected Projects</div> */}
            {projects}
          </section>

          <section className='secondary-projects'>

          </section>

          <About />
          
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
