import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // In a real app, you might want to disable certain features if cookies are declined
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 animate-slide-up">
      <div className="container-custom py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 text-sm md:text-base">
            <p>
              We use cookies to enhance your experience on our website. By continuing to browse, you agree to our{' '}
              <Link to="/privacy-policy" className="text-primary-600 underline hover:text-primary-700">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleDecline}
              className="btn btn-sm btn-outline py-1.5 px-4"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="btn btn-sm btn-primary py-1.5 px-4"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;