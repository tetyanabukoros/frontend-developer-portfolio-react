import './styles/main.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home.tsx';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';
import ProjectDetails from './components/projectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/project/:id' element={<ProjectDetails />} />

          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
