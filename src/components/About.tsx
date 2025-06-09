import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Code,
  GraduationCap as Graduation,
  Award,
  Users,
  Coffee,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Graduation, label: "Fresh Graduate", value: "2025" },
    { icon: Code, label: "Projects Built", value: "15+" },
    { icon: Award, label: "Certifications", value: "8+" },
    { icon: Coffee, label: "Cups of Coffee", value: "2" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "VS Code", "Figma", "Linux"],
    },
  ];

  return (
    <section id= "about" className = "py-20 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <motion.div
          initial={ { opacity: 0, y: 50 } }
  whileInView = {{ opacity: 1, y: 0 }
}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
className = "text-center mb-16"
  >
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" >
    About{ " " }
<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" >
  { " "}
              Me{ " " }
</span>
  </h2>
  < p className = "text-xl text-gray-600 max-w-3xl mx-auto" >
    A passionate software developer ready to make an impact in the tech
industry.
          </p>
  </motion.div>

  < div className = "grid lg:grid-cols-2 gap-16 items-center mb-20" >
    {/* Personal Info */ }
    < motion.div
initial = {{ opacity: 0, x: -50 }}
whileInView = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
          >
  <h3 className="text-3xl font-bold text-gray-900 mb-6" >
    { " "}
              My Journey{ " " }
</h3>
  < p className = "text-gray-600 mb-6 leading-relaxed" >
    As a fresh graduate with a strong foundation in computer science,
      I'm passionate about leveraging technology to solve real - world
problems.My journey in software development began during my
              college years, where I discovered my love for creating digital
              solutions that make a difference.
            </p>
  < p className = "text-gray-600 mb-8 leading-relaxed" >
    I specialize in full - stack web development with expertise in
    modern JavaScript frameworks, backend technologies, and database
management.I'm always eager to learn new technologies and stay
              updated with the latest industry trends.My goal is to contribute
              to innovative projects while continuously growing as a developer.
            </p>

  < div className = "flex flex-wrap gap-4" >
    <button
                onClick={
  () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Amit_Kumar_Raikwar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
className = "px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
  >
  <Download size={ 20 } />
                Download Resume
  </button>
  < button
onClick = {() =>
document
  .getElementById("projects")
  ?.scrollIntoView({ behavior: "smooth" })
                }
className = "px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
  >
  View Projects
    </button>
    </div>
    </motion.div>

{/* Stats */ }
<motion.div
            initial={ { opacity: 0, x: 50 } }
whileInView = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
className = "grid grid-cols-2 gap-6"
  >
{
  stats.map((stat, index) => (
    <motion.div
                key= { stat.label }
                initial = {{ opacity: 0, y: 30 }}
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6, delay: index * 0.1 }}
viewport = {{ once: true }}
className = "bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
  >
  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4" >
    <stat.icon className="w-6 h-6 text-white" />
      </div>
      < div className = "text-3xl font-bold text-gray-900 mb-2" >
        { " "}
{ stat.value } { " " }
</div>
  < div className = "text-sm text-gray-600" > { stat.label } </div>
    </motion.div>
            ))}
</motion.div>
  </div>

{/* Skills */ }
<motion.div
          initial={ { opacity: 0, y: 50 } }
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
        >
  <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center" >
    { " "}
Skills & Technologies{ " " }
</h3>
  < div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-8" >
  {
    skills.map((skillGroup, index) => (
      <motion.div
                key= { skillGroup.category }
                initial = {{ opacity: 0, y: 30 }}
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6, delay: index * 0.1 }}
viewport = {{ once: true }}
className = "bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
  >
  <h4 className="text-xl font-semibold text-gray-900 mb-4" >
    { " "}
{ skillGroup.category } { " " }
</h4>
  < div className = "flex flex-wrap gap-2" >
  {
    skillGroup.items.map((skill) => (
      <span
                      key= { skill }
                      className = "px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium"
      >
      { skill }
      </span>
    ))
  }
    </div>
    </motion.div>
            ))}
</div>
  </motion.div>
  </div>
  </section>
  );
};

export default About;
