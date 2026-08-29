import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Common Components
import Header from './common/Header';
import Footer from './common/Footer';
import ScrollToTop from './common/ScrollToTop';

// Page Components
import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ContactPage from './pages/Contact/ContactPage';
import NotFound from './pages/NotFound/NotFound';

// Global Stylesheet
import './App.css';

/**
 * Main App Component
 * Sets up React Router routing, AOS scroll animations, and page layout structure.
 */
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        {/* Reusable Header Navbar */}
        <Header />

        {/* Dynamic Route View */}
        <main className="main-content flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Reusable Footer */}
        <Footer />

        {/* Scroll to top helper */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
