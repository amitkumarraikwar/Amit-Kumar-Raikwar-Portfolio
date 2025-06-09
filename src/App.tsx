import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Blog from './components/Blog';
// import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div 
      initial= {{ opacity: 0 }
}
animate = {{ opacity: 1 }}
transition = {{ duration: 0.5 }}
className = "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
  >
  <Header />
  < main >
  <Hero />
  < About />
  <Projects />
  {/* <Blog /> */}
  {/* <Certificates /> */}
  < Contact />
  </main>
  < Footer />
  </motion.div>
  );
}

export default App;