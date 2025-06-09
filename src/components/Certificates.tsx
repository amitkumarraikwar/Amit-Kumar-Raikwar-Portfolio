import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'JavaScript Algorithms and Data Structures',
      organization: 'freeCodeCamp',
      issueDate: '2024-01-15',
      verificationUrl: 'https://freecodecamp.org/certification/amitkumarraikwar/javascript-algorithms-and-data-structures',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      featured: true
    },
    {
      id: 2,
      name: 'Responsive Web Design',
      organization: 'freeCodeCamp',
      issueDate: '2023-12-20',
      verificationUrl: 'https://freecodecamp.org/certification/amitkumarraikwar/responsive-web-design',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      featured: true
    },
    {
      id: 3,
      name: 'React - The Complete Guide',
      organization: 'Udemy',
      issueDate: '2023-11-10',
      verificationUrl: '#',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Redux', 'Hooks'],
      featured: false
    },
    {
      id: 4,
      name: 'Node.js, Express, MongoDB & More',
      organization: 'Udemy',
      issueDate: '2023-10-15',
      verificationUrl: '#',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Node.js', 'Express', 'MongoDB'],
      featured: false
    },
    {
      id: 5,
      name: 'Git & GitHub Complete Course',
      organization: 'Coursera',
      issueDate: '2023-09-20',
      verificationUrl: '#',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Git', 'GitHub', 'Version Control'],
      featured: false
    },
    {
      id: 6,
      name: 'Python for Everybody',
      organization: 'Coursera',
      issueDate: '2023-08-25',
      verificationUrl: '#',
      image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Python', 'Data Analysis', 'Web Scraping'],
      featured: false
    },
    {
      id: 7,
      name: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      issueDate: '2023-07-30',
      verificationUrl: '#',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['AWS', 'Cloud Computing', 'DevOps'],
      featured: true
    },
    {
      id: 8,
      name: 'Database Design and Management',
      organization: 'edX',
      issueDate: '2023-06-15',
      verificationUrl: '#',
      image: 'https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['SQL', 'Database Design', 'MySQL'],
      featured: false
    }
  ];

  const featuredCertificates = certificates.filter(cert => cert.featured);
  const regularCertificates = certificates.filter(cert => !cert.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getOrganizationColor = (organization: string) => {
    const colors: { [key: string]: string } = {
      'freeCodeCamp': 'from-green-500 to-emerald-500',
      'Udemy': 'from-purple-500 to-indigo-500',
      'Coursera': 'from-blue-500 to-cyan-500',
      'Amazon Web Services': 'from-orange-500 to-yellow-500',
      'edX': 'from-red-500 to-pink-500'
    };
    return colors[organization] || 'from-gray-500 to-slate-500';
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through various online platforms and institutions.
          </p>
        </motion.div>

        {/* Featured Certificates */}
        {featuredCertificates.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Featured Certifications
            </motion.h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getOrganizationColor(cert.organization)} text-white rounded-full text-sm font-medium`}>
                        {cert.organization}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium flex items-center gap-1">
                      <Award size={14} />
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar size={16} />
                      <span>Issued on {formatDate(cert.issueDate)}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      <CheckCircle size={16} />
                      Verify Certificate
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Certificates */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Other Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getOrganizationColor(cert.organization)} text-white rounded-full text-xs font-medium`}>
                      {cert.organization}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {cert.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(cert.issueDate)}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-300"
                  >
                    <CheckCircle size={14} />
                    Verify
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{certificates.length}</div>
              <div className="text-gray-600">Total Certificates</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {new Set(certificates.flatMap(cert => cert.skills)).size}
              </div>
              <div className="text-gray-600">Skills Certified</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(certificates.map(cert => cert.organization)).size}
              </div>
              <div className="text-gray-600">Learning Platforms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;