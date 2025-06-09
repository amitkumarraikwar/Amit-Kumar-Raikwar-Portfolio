import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of React Hooks and how they can simplify your component logic. From useState to useEffect, discover the power of functional components.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'React',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      author: 'Amit Kumar Raikwar'
    },
    {
      id: 2,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to creating robust and scalable REST APIs using Node.js and Express.js. Learn best practices for routing, middleware, and error handling.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Backend',
      date: '2024-01-10',
      readTime: '12 min read',
      featured: true,
      author: 'Amit Kumar Raikwar'
    },
    {
      id: 3,
      title: 'Modern CSS Grid Layout: Creating Responsive Designs',
      excerpt: 'Master CSS Grid to create complex and responsive layouts with ease. Learn the difference between Grid and Flexbox and when to use each.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'CSS',
      date: '2024-01-05',
      readTime: '6 min read',
      featured: false,
      author: 'Amit Kumar Raikwar'
    },
    {
      id: 4,
      title: 'JavaScript ES6+ Features Every Developer Should Know',
      excerpt: 'Explore the latest JavaScript features that can improve your code quality and development experience. From arrow functions to async/await.',
      image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'JavaScript',
      date: '2023-12-28',
      readTime: '10 min read',
      featured: false,
      author: 'Amit Kumar Raikwar'
    },
    {
      id: 5,
      title: 'Database Design Best Practices for Web Applications',
      excerpt: 'Learn how to design efficient and scalable databases for your web applications. Cover normalization, indexing, and performance optimization.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Database',
      date: '2023-12-20',
      readTime: '15 min read',
      featured: false,
      author: 'Amit Kumar Raikwar'
    },
    {
      id: 6,
      title: 'Version Control with Git: Essential Commands and Workflows',
      excerpt: 'Master Git version control system with essential commands and workflows. Learn branching strategies and collaboration best practices.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tools',
      date: '2023-12-15',
      readTime: '9 min read',
      featured: false,
      author: 'Amit Kumar Raikwar'
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      React: 'from-cyan-500 to-blue-500',
      Backend: 'from-green-500 to-emerald-500',
      CSS: 'from-purple-500 to-pink-500',
      JavaScript: 'from-yellow-500 to-orange-500',
      Database: 'from-indigo-500 to-purple-500',
      Tools: 'from-gray-500 to-slate-500'
    };
    return colors[category] || 'from-blue-500 to-indigo-500';
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tech <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing my learning journey, technical insights, and development experiences.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Featured Articles
            </motion.h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white rounded-full text-sm font-medium`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <button className="group/btn flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                      Read More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Recent Articles
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white rounded-full text-sm font-medium`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="group/btn flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;