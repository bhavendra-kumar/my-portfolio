import React from 'react';
import {FaLinkedinIn,FaGithub,FaEnvelope,FaDownload,FaInstagram} from "react-icons/fa";
import { SiExpress, SiMongodb,SiFigma, SiMysql, SiCplusplus} from "react-icons/si";
import { DiJavascript1, DiCss3, DiHtml5, DiReact, DiNodejs, DiPython} from "react-icons/di";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import "@fontsource/josefin-sans"; 
import profile1 from '../assets/Bhavi-pro.profile2.jpg';
import resume from '../assets/Bhavendra Kumar.pdf'; 

const Hero = () => {
  const skills = [
  { name: "HTML", icon: <DiHtml5 className="text-orange-500 text-5xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: <DiCss3 className="text-blue-500 text-5xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400 text-5xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React JS", icon: <DiReact className="text-blue-400 text-5xl" />, url: "https://react.dev/" },
  { name: "Node JS", icon: <DiNodejs className="text-green-500 text-5xl" />, url: "https://nodejs.org/" },
  { name: "Express JS", icon: <SiExpress className="text-gray-200 text-5xl" />, url: "https://expressjs.com/" },
  { name: "SQL", icon: <SiMysql className="text-indigo-400 text-5xl" />, url: "https://www.mysql.com/" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" />, url: "https://www.mongodb.com/" },
  { name: "Python", icon: <DiPython className="text-yellow-300 text-5xl" />, url: "https://www.python.org/" },
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-5xl" />, url: "https://isocpp.org/" },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" />, url: "https://www.figma.com/" },
];


  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/urstruly_bhavi_7/" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/bhavendra-kumar-y-700bb2306/" },
    { icon: FaGithub, url: "https://github.com/bhavendra-kumar" },
    { icon: FaEnvelope, url: "mailto:ybhavendra.kumar.s82@kalvium.community" },
  ];

  return (
    <div className="bg-[#0f1a38] text-white">
      
     <header className="w-full fixed top-0 left-0 z-50 bg-[#0f1a38] shadow-md">
  <div className="max-w-7xl mx-auto px-6 md:px-24 py-4 flex justify-between items-center">
    <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-white text-2xl md:text-3xl font-bold tracking-widest font-[Josefin Sans]">
  Portfolio
  </motion.h1>
    <nav className="space-x-5 hidden md:block">
  <Link to="about" smooth={true} duration={600} className="cursor-pointer text-white hover:text-blue-400 font-small">About</Link>
  <Link to="skills" smooth={true} duration={600} className="cursor-pointer text-white hover:text-blue-400 font-small">Skills</Link>
  <Link to="services" smooth={true} duration={600} className="cursor-pointer text-white hover:text-blue-400 font-small">Services</Link>
  <Link to="contact" smooth={true} duration={600} className="cursor-pointer text-white hover:text-blue-400 font-small">Contact</Link>
</nav>
  </div>
</header>


      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-10 md:px-24 py-20 relative overflow-hidden">
        <motion.div
          className="max-w-xl z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium">Hello, I am</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-3">Bhavendra Kumar</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">I'm a <span className="text-blue-400">Full Stack Developer</span></h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            "Bridging front-end creativity with back-end power to deliver seamless, high impact digital experiences"
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6 text-blue-400 text-2xl">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="border border-blue-400 p-3 rounded-full hover:bg-blue-400 hover:text-[#0f1a38] transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <motion.a
            href={resume}
            download="Bhavendra_Kumar_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-blue-500/40 transition duration-300"
          >
            Download Resume <FaDownload className="inline ml-2" />
          </motion.a>
        </motion.div>

        <motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="rounded-full border-8 border-yellow-400 p-1 w-72 h-72 overflow-hidden shadow-2xl shadow-yellow-300/30"
>
  <img
    src={profile1}
    alt="Bhavendra Kumar"
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>

      </section>


     {/*About*/}
       <section id="about" className="py-20 px-6 md:px-24">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            I'm a dedicated Full Stack Developer with a strong passion for building intuitive, 
            responsive, and high-performance web applications. I specialize in both frontend and
             backend technologies, ensuring seamless integration between design and functionality. 
             My work focuses on creating user-centric solutions that are not only efficient but also 
             visually engaging. I'm constantly exploring new tools and best practices to stay ahead in this 
             fast-evolving tech landscape, and I thrive in collaborative environments where innovation and 
             problem-solving are key.
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="bg-[#162240] p-6 rounded-xl shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl font-semibold mb-3">Experience</h3>
            <p className="text-gray-400">1 year of hands-on development in both frontend and backend technologies.</p>
          </div>
          <div className="bg-[#162240] p-6 rounded-xl shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl font-semibold mb-3">Education</h3>
            <p className="text-gray-400">B.Tech in Computer Science (KALVIUM) from Kalasalingam University.</p>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-24">
  <h2 className="text-center text-4xl font-bold mb-12">
    TECHNICAL <span className="text-blue-400">SKILLS</span>
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
    {skills.map((skill, idx) => (
      <motion.a
        key={idx}
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#162240] p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-blue-500/30 transition"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        viewport={{ once: true }}
      >
        {skill.icon}
        <h3 className="mt-4 font-semibold">{skill.name}</h3>
      </motion.a>
    ))}
  </div>
</section>


      {/* Services */}
      <section id="services" className="py-20 px-6 md:px-24">
        <h2 className="text-center text-4xl font-bold mb-12">MY <span className="text-blue-400">SERVICES</span></h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Web Development", desc: "I create dynamic websites using full-stack technologies." },
            { title: "UI Development", desc: "Transforming designs into responsive web interfaces." },
            { title: "UI Designing", desc: "Designing intuitive, visually compelling interfaces." },
          ].map((service, idx) => (
            <motion.div key={idx} className="bg-[#162240] p-8 rounded-2xl text-center shadow-lg hover:shadow-blue-400/30 transition"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.2 }} viewport={{ once: true }}>
              <div className="text-blue-400 text-5xl mb-4">{"</>"}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      

      {/* CONTACT */}
      <section id="contact" className="bg-[#0f1a38] text-white py-20 px-6 md:px-24">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">CONTACT ME</h2>
          <p className="text-gray-400 mt-2">Let's connect and build something amazing</p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-6 text-blue-400 text-2xl">
          {socialLinks.map(({ icon: Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="border border-blue-400 p-3 rounded-full hover:bg-blue-400 hover:text-[#0f1a38] transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Hero;
