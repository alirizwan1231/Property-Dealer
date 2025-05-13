import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import AgentsPage from './pages/AgentsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFoundPage from './pages/NotFoundPage';
import CookieConsent from './components/common/CookieConsent';
import Newsletter from './components/common/Newsletter';

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenNewsletter = localStorage.getItem('hasSeenNewsletter');
      if (!hasSeenNewsletter) {
        setShowNewsletter(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNewsletter = () => {
    setShowNewsletter(false);
    localStorage.setItem('hasSeenNewsletter', 'true');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="properties/:id" element={<PropertyDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
      <CookieConsent />
      {showNewsletter && <Newsletter onClose={handleCloseNewsletter} />}
    </>
  );
}

export default App;