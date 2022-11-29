import Navbar from './modules/Navbar';
import Hero from './modules/Hero';
import ProjectsData from './ProjectsData';
import Card from './modules/Card';
import './css/main.css';
function App() {
  const projects = ProjectsData.map(project => (
    <Card key={project.id} {...project} />
  ))
  return (
        <div className="App">
          <Navbar />
          <Hero />
          <section className='projects' id='projects'>
            {projects}
          </section>
        </div>
  );
}

export default App;
