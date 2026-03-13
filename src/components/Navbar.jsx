import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Compass, Mail, ChevronDown } from 'lucide-react';
import { categories } from '../data/categories';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/blog', label: 'Stories', icon: Compass },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-200/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="container-max">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl lg:text-2xl font-bold text-gray-900"
                >
                  Sharon<span className="text-indigo-600">.</span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavLink key={item.path} item={item} isActive={location.pathname === item.path} />
                ))}
                
                {/* Categories Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Categories
                    <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isCategoriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setIsCategoriesOpen(false)}
                        className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="max-h-[70vh] overflow-y-auto py-2">
                          {categories.map((category) => (
                            <div key={category.id} className="px-4 py-2">
                              <Link
                                to={`/blog?category=${category.slug}`}
                                className="block font-semibold text-gray-900 hover:text-indigo-600 mb-1"
                              >
                                {category.name}
                              </Link>
                              <div className="pl-3 space-y-1">
                                {category.subtopics.map((subtopic) => (
                                  <Link
                                    key={subtopic.id}
                                    to={`/blog?category=${category.slug}&subtopic=${subtopic.slug}`}
                                    className="block text-sm text-gray-500 hover:text-indigo-500 py-0.5"
                                  >
                                    {subtopic.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right side: Mobile menu */}
              <div className="flex items-center space-x-2">
                {/* Mobile Menu Toggle */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg md:hidden"
          >
            <div className="section-padding py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-gray-100 text-gray-900'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// NavLink component with underline animation
const NavLink = ({ item, isActive }) => {
  return (
    <motion.div className="relative">
      <Link
        to={item.path}
        className={`px-4 py-2 rounded-lg font-medium transition-colors relative ${
          isActive
            ? 'text-indigo-600'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <motion.span
          className="relative z-10"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {item.label}
        </motion.span>
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default Navbar;
