import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ExternalLink } from 'lucide-react';
import { staggerContainer, staggerItem } from '../animations/variants';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: Mail, url: 'mailto:your.email@example.com' },
];

const footerLinks = [
  {
    title: 'Blog',
    links: [
      { label: 'All Posts', path: '/blog' },
      { label: 'Categories', path: '/categories' },
      { label: 'Featured', path: '/blog?featured=true' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'My Journey', path: '/journey' },
      { label: 'Portfolio', url: 'https://yourportfolio.com' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Topics',
    links: [
      { label: 'Technology', path: '/blog?category=technology' },
      { label: 'Travel', path: '/blog?category=travel' },
      { label: 'Food', path: '/blog?category=food' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-padding py-12 lg:py-16">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <span className="text-2xl font-bold text-gray-900">Sharon.</span>
              </Link>
              <p className="text-gray-600 mb-6 max-w-sm">
                A personal space where I share my journey as a software developer, 
                tech insights, travel stories, and food adventures.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-full bg-gray-100 text-gray-600 
                               hover:bg-indigo-50 
                               hover:text-indigo-700 
                               transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Sections */}
            {footerLinks.map((section) => (
              <motion.div key={section.title} variants={staggerItem}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-indigo-600 
                                     transition-colors 
                                     inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-gray-600 hover:text-indigo-600 
                                     transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-rose-500 fill-current" /> using React & Tailwind
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
