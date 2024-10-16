import './footer.scss';
import gitHub from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import { gitHubLink, linkedInLink } from '../../helpers/constants.ts';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (<footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="footer__icons">
          <li className="footer__icon">
            <a href={linkedInLink} target='_blank' rel="noreferrer"><img src={linkedIn} alt="LinkedIn Icon" /></a>
          </li>

          <li className="footer__icon">
            <a href={gitHubLink} target='_blank' rel="noreferrer"><img src={gitHub} alt="GitHub Icon" /></a>
          </li>
        </ul>

        <div className="footer__copyright">
          <p>© {currentYear} tetyanabukoros.github.io</p>
        </div>
      </div>
    </div>
  </footer>);
}

export default Footer;