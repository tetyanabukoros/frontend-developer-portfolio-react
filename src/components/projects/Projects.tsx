import Project from '../project/Project.tsx';
import { projects } from '../../helpers/projectsList.ts';
import './projects.scss';

const Projects = () => {
  const sortedProjects = projects.sort((a, b) => a.id - b.id);

  return (
    <main className="section">
      <div className="container">
        <h1>Projects</h1>

        <ul className="projects">
          {sortedProjects.map(({ id, title, img }) => {
            return <Project
              key={id}
              title={title}
              img={img}
              id={id} />
          })}

        </ul>
      </div>
    </main>
  );
}

export default Projects;