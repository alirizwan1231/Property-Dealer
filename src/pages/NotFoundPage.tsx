import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 text-primary-600">
            <svg className="w-24 h-24 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn btn-primary flex items-center justify-center gap-2">
              <Home size={18} />
              <span>Return Home</span>
            </Link>
            <Link to="/properties" className="btn btn-outline flex items-center justify-center gap-2">
              <Search size={18} />
              <span>Browse Properties</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;