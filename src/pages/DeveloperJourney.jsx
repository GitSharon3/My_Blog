import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, Code, Award, Rocket, Heart,
  MapPin, Calendar, ChevronRight
} from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp, slideInLeft, slideInRight } from '../animations/variants';

const milestones = [
  {
    year: '2020',
    title: 'Started Programming Journey',
    description: 'Began learning programming with Python during the lockdown. Fell in love with coding and decided to pursue software development.',
    icon: Code,
    color: 'bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-200',
  },
  {
    year: '2021',
    title: 'First Web Development Project',
    description: 'Built my first full-stack web application using React and Node.js. Learned about responsive design, APIs, and database management.',
    icon: Rocket,
    color: 'bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-200',
  },
  {
    year: '2022',
    title: 'University & Open Source',
    description: 'Started Computer Science degree and began contributing to open source projects. Learned the value of community and collaboration.',
    icon: GraduationCap,
    color: 'bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-200',
  },
  {
    year: '2023',
    title: 'First Internship',
    description: 'Landed my first software engineering internship. Worked on production code, learned industry best practices, and grew as a developer.',
    icon: Briefcase,
    color: 'bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-200',
  },
  {
    year: '2024',
    title: 'Full-Stack Developer',
    description: 'Currently working as a full-stack developer, building scalable applications and mentoring junior developers while continuing to learn.',
    icon: Award,
    color: 'bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-200',
  },
];

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
  { category: 'Soft Skills', items: ['Communication', 'Problem Solving', 'Teamwork', 'Leadership', 'Mentoring'] },
];

const DeveloperJourney = () => {
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
              My <span className="text-gradient">Developer Journey</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From writing my first "Hello World" to building production applications. 
              Here's the story of how I became a software developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={milestone.year}
                    variants={staggerItem}
                    className={`relative flex items-center gap-8 mb-12 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-500 md:-translate-x-1/2 z-10" />

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:text-right md:pr-8' : 'md:pl-8'}`}
                    >
                      <div className={`p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}>
                        {/* Year Badge */}
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${milestone.color}`}>
                          <Calendar className="w-4 h-4" />
                          {milestone.year}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>

                        {/* Icon */}
                        <div className={`mt-4 inline-flex items-center justify-center w-10 h-10 rounded-xl ${milestone.color}`}>
                          <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-rose-500 fill-current" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                My Development Philosophy
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-6">
                I believe in writing clean, maintainable code that solves real problems. 
                Every line of code should have a purpose, and every feature should enhance 
                the user experience. I'm passionate about continuous learning and sharing 
                knowledge with the developer community.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['Clean Code', 'User First', 'Continuous Learning', 'Open Source'].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium">Currently building amazing things</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Based in Nepal • Open to opportunities • Always learning
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperJourney;
