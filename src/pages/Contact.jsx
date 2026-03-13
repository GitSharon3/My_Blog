import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Github, Linkedin, Twitter, Send, MapPin, ExternalLink,
  CheckCircle
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername', color: 'hover:bg-gray-800 hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername', color: 'hover:bg-[#0A66C2] hover:text-white' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername', color: 'hover:bg-[#1DA1F2] hover:text-white' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question, collaboration idea, or just want to say hello? 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 
                             border border-gray-200 dark:border-gray-700 hover:border-indigo-300 
                             dark:hover:border-indigo-700 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-gray-800 
                                  flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium text-gray-900 dark:text-white">your.email@example.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 
                                border border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-gray-800 
                                  flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Connect with me
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 
                                  border border-gray-200 dark:border-gray-700 transition-all ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-50" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium text-gray-900 dark:text-white">Available for opportunities</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I'm currently open to freelance projects, collaborations, and full-time opportunities. 
                    Let's create something amazing together!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 
                                  flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                                   bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                                   bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                                 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                                 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30 resize-none"
                        placeholder="Tell me about your project or question..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                               font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900
                               hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors
                               disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
