import { useEffect } from 'react';
import sun from './sun.svg';
import moon from './moon.svg';
import detectDarkMode from '../../utils/detectDarkMode';
import './modeSwitcher.scss'
import useLocalStorage from '../../utils/useLocalStorage';

const ModeSwitcher = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode])

  useEffect(() => {
    window
      .matchMedia && window.matchMedia('(prefers-colos-scheme: dark)')
        .addEventListener('change', (event) => {
          const newColorDcheme = event.matches ? 'dark' : 'light';
          setDarkMode(newColorDcheme);
        })
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    })
  }

  const btnNormal = 'mode-switcher';
  const btnActive = 'mode-switcher mode-switcher--active';

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} className="mode-switcher__icon" alt="Light mode" />
      <img src={moon} className="mode-switcher__icon" alt="Dark mode" />
    </button>
  );
}

export default ModeSwitcher;