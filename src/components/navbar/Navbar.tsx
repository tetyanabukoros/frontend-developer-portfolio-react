
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import ModeSwitcher from '../modeSwitcher/ModeSwitcher';

const Navbar = () => {

  const activeLink = "nav__link nav__link--active";
  const normalLink = "nav__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__row">
          <NavLink to="/" className="nav__logo">
            <strong>Tetiana Bukoros</strong> portfolio
          </NavLink>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}> Home</NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink>
            </li>
          </ul>

          <ModeSwitcher />
        </div>
      </div>
    </nav >
  );
}

export default Navbar;