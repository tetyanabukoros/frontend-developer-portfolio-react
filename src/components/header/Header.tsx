import './header.scss';
import resume from './../../assets/CV_FE_Tetiana_Bukoros.pdf';

const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1>
          <strong>Hi, my name is <em>Tetiana</em></strong>
        </h1>

        <h2>a frontend developer</h2>

        <div className="header__text">
          <p>with passion for learning and creating</p>
        </div>

        <a href={resume} download='Tetiana Bukoros CV Frontend' target="_blank" className="header__btn skeleton-button" rel="noreferrer">Download CV</a>
      </div>
    </header>
  );
}

export default Header;