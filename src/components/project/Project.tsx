import { NavLink } from 'react-router-dom';
import './project.scss';

type ProjectProps = {
  id: number;
  title: string;
  img: string;
};

const Project = ({ title, img, id }: ProjectProps) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img className="project__img" src={img} alt={title} />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  )
}

export default Project;