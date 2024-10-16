import kickstarter1 from './../img/projects/kickstarter/kickstarter-1.jpg';
import kickstarter2 from './../img/projects/kickstarter/kickstarter-2.png';
import kickstarter3 from './../img/projects/kickstarter/kickstarter-3.png';
import kickstarter4 from './../img/projects/kickstarter/kickstarter-4.png';
import website150min1 from './../img/projects/150minuten/150minuten-1.png';
import website150min2 from './../img/projects/150minuten/150minuten-2.png';
import website150min3 from './../img/projects/150minuten/150minuten-3.png';
import website150min4 from './../img/projects/150minuten/150minuten-4.png';
import website150min5 from './../img/projects/150minuten/150minuten-5.png';
import website150min6 from './../img/projects/150minuten/150minuten-6.png';
import website150min7 from './../img/projects/150minuten/150minuten-7.png';
import bose1 from './../img/projects/bose/bose-1.png';
import bose2 from './../img/projects/bose/bose-2.png';
import bose3 from './../img/projects/bose/bose-3.png';
import bose5 from './../img/projects/bose/bose-5.png';
import bose6 from './../img/projects/bose/bose-6.png';
import adminPannel from './../img/projects/admin/admin-pannel.jpg';
import adminPannel1 from './../img/projects/admin/admin-1.png';
import adminPannel2 from './../img/projects/admin/admin-2.png';
import adminPannel3 from './../img/projects/admin/admin-3.png';
import adminPannel4 from './../img/projects/admin/admin-4.png';
import userApp1 from './../img/projects/user-app/user-app-1.png';
import userApp2 from './../img/projects/user-app/user-app-2.png';
import userApp3 from './../img/projects/user-app/user-app-3.png';
import userApp4 from './../img/projects/user-app/user-app-4.png';
import car1 from './../img/projects/car/car-1.png';
import car2 from './../img/projects/car/car-2.png';
import car3 from './../img/projects/car/car-3.png';
import car4 from './../img/projects/car/car-4.png';
import car5 from './../img/projects/car/car-5.png';
import { ProjectType } from '../components/types/project';

const projects: ProjectType[] = [
  {
    id: 1,
    title: '150Minuten website',
    skills: ['React Gatsby', 'Contentful', 'GraphQL', 'TypeScript', 'Google workspace', 'Vimeo', 'AWS', 'Swiper', 'core-js', 'Hotjar'],
    img: website150min2,
    gitHubLink: null,
    demoLink: 'https://150minuten.de/',
    videoLink: 'https://www.youtube.com/watch?v=xPGM_hpEUBQ&feature=youtu.be',
    images: [website150min6, website150min7, website150min1, website150min2, website150min3, website150min4, website150min5],
    description: 'As a Frontend Developer, I built 150minuten.de from the ground up using React, Gatsby, and GraphQL, integrating Contentful as the content management system. I quickly mastered Gatsby and GraphQL queries to create reusable components, enhancing both development efficiency and site functionality. A key highlight of this project was enabling non-technical users to manage site content effortlessly without touching the code. This experience not only demonstrated my proficiency in pixel-perfect design but also showcased my adaptability in utilizing modern web technologies effectively.'
  },
  {
    id: 5,
    title: 'Kickstarter landing page',
    skills: ['HTML', 'SCSS', 'JS', 'Mobile first', 'Google Font API'],
    img: kickstarter1,
    gitHubLink: 'https://github.com/tetyanabukoros/Landing-KICKSTARTER',
    demoLink: 'https://tetyanabukoros.github.io/Landing-KICKSTARTER',
    videoLink: null,
    images: [kickstarter2, kickstarter1, kickstarter3, kickstarter4],
    description: 'This landing pages represent one of my early works as a web developer, showcasing my skills in creating adaptive, pixel-perfect layouts. Each project demonstrates my ability to design responsive websites that provide an optimal viewing experience across various devices. Through these projects, I have refined my proficiency in HTML, CSS, and JavaScript, focusing on clean code and user-friendly interfaces.'
  },
  {
    id: 3,
    title: 'React app users with API',
    skills: ['React', 'TypeScript', 'Material-UI (MUI)', 'Framer Motion', 'React Beautiful DnD', 'SASS'],
    img: userApp4,
    gitHubLink: 'https://github.com/tetyanabukoros/react-app-users-with-api',
    demoLink: 'https://tetyanabukoros.github.io/react-app-users-with-api',
    videoLink: null,
    images: [userApp1, userApp2, userApp3, userApp4],
    description: 'This React application allows users to display, filter, and manage a list of users retrieved from an open API. The app features customizable pagination with options for displaying 5, 10, 50, 100 users, or all at once. Users can sort data by name, date of birth, city, and also use a custom drag-and-drop sorting option. Filtering is available by gender, age, and name. The app supports editing personal information via an "Edit" button and updates upon confirmation. Additionally, users can be deleted from the list. The app is designed primarily for desktop use and is not optimized for mobile devices.'
  },
  {
    id: 4,
    title: 'Bose landing page',
    skills: ['HTML', 'SCSS', 'JS', 'Mobile first', 'Google Font API'],
    img: bose1,
    gitHubLink: 'https://github.com/tetyanabukoros/bose-lending',
    demoLink: 'https://tetyanabukoros.github.io/bose-lending/',
    videoLink: null,
    images: [bose6, bose2, bose5, bose1, bose3],
    description: 'This landing pages represent one of my early works as a web developer, showcasing my skills in creating adaptive, pixel-perfect layouts. Each project demonstrates my ability to design responsive websites that provide an optimal viewing experience across various devices. Through these projects, I have refined my proficiency in HTML, CSS, and JavaScript, focusing on clean code and user-friendly interfaces.'
  },
  {
    id: 6,
    title: 'Rent car landing page',
    skills: ['HTML', 'SCSS/Sass', 'JavaScript', 'Bootstrap', 'ESLint', 'Stylelint'],
    img: car1,
    gitHubLink: 'https://github.com/tetyanabukoros/rent-car-website-with-bootstrap',
    demoLink: 'https://tetyanabukoros.github.io/rent-car-website-with-bootstrap/',
    videoLink: null,
    images: [car1, car2, car3, car4, car5],
    description: 'This landing pages represent one of my early works as a web developer, showcasing my skills in creating adaptive, pixel-perfect layouts. Each project demonstrates my ability to design responsive websites that provide an optimal viewing experience across various devices. Through these projects, I have refined my proficiency in HTML, CSS, and JavaScript, focusing on clean code and user-friendly interfaces.'
  },
  {
    id: 2,
    title: 'Administration Pannel',
    skills: ['Angular CLI', 'TypeScript', 'SCSS', 'Bootstrap', 'HTTP Client', 'HAL', 'Webpack', 'Karma/Jasmine'],
    img: adminPannel,
    gitHubLink: null,
    demoLink: null,
    videoLink: 'https://youtu.be/46mOshdcFtk',
    images: [adminPannel1, adminPannel2, adminPannel3, adminPannel4],
    description: 'This is an admin panel that includes managing a list of videos, including uploading videos, uploading thumbnails, changing the order of videos in the list, editing descriptions, selecting a trainer from a dropdown menu, and choosing the category, level, and subscription tier. It also manages a list of managers, assigns roles to them, and allows editing of personal information. The panel is developed with a focus on technical functionality, built without a pre-existing design.The app is designed primarily for desktop use and is not optimized for mobile devices'
  },
];

export { projects };