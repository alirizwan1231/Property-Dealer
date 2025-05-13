import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Phone } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/properties', label: 'Properties' },
    { to: '/about', label: 'About Us' },
    { to: '/agents', label: 'Agents' },
    { to: '/blog', label: 'Blog' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <Home className="text-accent-500" size={28} />
            <div>
              <h1 className={`text-xl font-bold font-montserrat ${
                isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'
              }`}>
                UrbanNest
              </h1>
              <p className={`text-xs ${
                isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Realty
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-accent-500'
                    : isScrolled || !isHomePage
                    ? 'text-primary-600 hover:text-accent-500'
                    : 'text-white hover:text-accent-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className={`p-2 rounded-full transition-colors ${
              isScrolled || !isHomePage
                ? 'text-primary-600 hover:bg-gray-100'
                : 'text-white hover:bg-primary-600/20'
            }`}
          >
            <Search size={20} />
          </button>
          <Link 
            to="/contact" 
            className="btn btn-accent btn-sm flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X 
              size={24} 
              className={isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'} 
            />
          ) : (
            <Menu 
              size={24} 
              className={isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <nav className="container-custom py-4 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-3 border-b border-gray-100 ${
                    isActive ? 'text-accent-500 font-medium' : 'text-primary-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button 
              onClick={toggleSearch}
              className="py-3 flex items-center gap-2 text-primary-600"
            >
              <Search size={20} />
              <span>Search Properties</span>
            </button>
            <Link 
              to="/contact" 
              className="mt-4 btn btn-accent w-full"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {showSearch && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 animate-slide-up">
          <div className="container-custom">
            <SearchBar onClose={toggleSearch} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;