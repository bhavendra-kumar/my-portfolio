import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaDownload, FaInstagram } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFigma, SiMysql, SiCplusplus, SiNextdotjs, SiTypescript, SiTailwindcss, SiLeetcode } from "react-icons/si";
import { DiJavascript1, DiCss3, DiHtml5, DiReact, DiNodejs, DiPython } from "react-icons/di";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import "@fontsource/josefin-sans";
import profile1 from '../assets/Bhavi-pro.profile2.jpg';
import resume from "../assets/Bhavendra_Kumar_Y.pdf";
import BShop from '../assets/BshopLogo.png';
import GoRyde from '../assets/GorydeLogo.png';
import RockPaperScissor from '../assets/RockPaperScissorGame.png';
import TickTaskLogo from '../assets/TickTaskLogo.png';
import javaLogo from '../assets/java-logo.png';
import Desigin from '../assets/UiDesign.png';
import YouTube_Logo from '../assets/youtube_logo.png';
import MediSense from "../assets/medisense_logo.png";
import Full_Stack_Certificate from "../assets/web_development_certificate.png";

const FloatingShape = ({ className, delay = 0, duration = 20 }) => (
  <motion.div
    className={`absolute rounded-full opacity-10 blur-3xl pointer-events-none ${className}`}
    animate={{
      y: [0, -40, 0, 40, 0],
      x: [0, 30, -30, 10, 0],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {

  const skills = [
    { name: "Python", icon: <DiPython className="text-yellow-300 text-5xl" />, url: "https://www.python.org/" },
    { name: "Java", icon: <img src={javaLogo} alt="Java" className="w-12 h-12" />, url: "https://www.java.com/" },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-5xl" />, url: "https://isocpp.org/" },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400 text-5xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" />, url: "https://www.typescriptlang.org/" },
    { name: "HTML", icon: <DiHtml5 className="text-orange-500 text-5xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <DiCss3 className="text-blue-500 text-5xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, url: "https://tailwindcss.com/" },
    { name: "React JS", icon: <DiReact className="text-blue-400 text-5xl" />, url: "https://react.dev/" },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-5xl" />, url: "https://nextjs.org/" },
    { name: "Node JS", icon: <DiNodejs className="text-green-500 text-5xl" />, url: "https://nodejs.org/" },
    { name: "Express JS", icon: <SiExpress className="text-gray-200 text-5xl" />, url: "https://expressjs.com/" },
    { name: "SQL", icon: <SiMysql className="text-indigo-400 text-5xl" />, url: "https://www.mysql.com/" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" />, url: "https://www.mongodb.com/" },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" />, url: "https://www.figma.com/" },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/urstruly_bhavi_7/" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/bhavendra-kumar-y-700bb2306/" },
    { icon: FaGithub, url: "https://github.com/bhavendra-kumar" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/bhavendra-kumar/" },
    { icon: FaEnvelope, url: "mailto:bhavendrakumar007@gmail.com" },
  ];

  const projects = [

    {
      title: "MediSense AI - AI-Powered Medical Assistant",
      desc: "An AI-powered medical assistant that provides diagnostic support and treatment recommendations.",
      githubUrl: "https://github.com/bhavendra-kumar/MediSense",
      liveUrl: "https://medisense-ai-app.netlify.app/login",
      img: MediSense
    },
    {
      title: "YouTube - Video Sharing Platform",
      desc: "A video sharing platform where users can upload, watch, and interact with videos.",
      githubUrl: "https://github.com/bhavendra-kumar/YouTube-MyApp",
      liveUrl: "https://youtube-myapp.vercel.app/",
      img: YouTube_Logo
    },
    {
      title: "B Shop - E commerce App",
      desc: "A lightweight online user-friendly ecommerce platform that lets users browse products, add items to their cart, and place orders seamlessly.",
      githubUrl: "https://github.com/bhavendra-kumar/B-Shop",
      liveUrl: "https://b-shopy.netlify.app/",
      img: BShop
    },
    {
      title: "GoRyde - Ride Booking App",
      desc: "A full-stack MERN project that allows users to book rides, track drivers in real-time, and manage ride statuses from start to finish.",
      githubUrl: "https://github.com/bhavendra-kumar/GoRyde-Capstone",
      liveUrl: "https://goryde.netlify.app/",
      img: GoRyde
    },
    {
      title: "Rock Paper Scissor Game",
      desc: "A simple interactive game where players choose rock, paper, or scissors to compete against the computer.",
      githubUrl: "https://github.com/bhavendra-kumar/RPS_Game",
      liveUrl: "https://rpseasygame.netlify.app/",
      img: RockPaperScissor
    },
    {
      title: "TickTask - Task Management App",
      desc: "TickTask is a smart task management app that helps users stay organized with real-time countdowns and persistent desktop reminders.",
      githubUrl: "https://github.com/bhavendra-kumar/TickTask_app",
      liveUrl: "https://ticktaskerapp.netlify.app/",
      img: TickTaskLogo
    },
  ];

  const certificates = [
    {
      title: "Full Stack Web Development",
      desc: "Built end-to-end web apps (frontend + backend) with modern tooling and best practices.",
      img: Full_Stack_Certificate,
    },
    {
      title: "UI/UX Designing",
      desc: "Designed user flows, wireframes, and polished UI layouts with usability-first thinking.",
      img: Desigin,
    },
  ];

  return (
    <div className="bg-[#0f1a38] text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 z-50 bg-[#0f1a38]/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-4 flex justify-between items-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-white text-2xl md:text-3xl font-bold tracking-widest font-[Josefin Sans]">
            PORTFOLIO
          </motion.h1>
          <nav className="space-x-5 hidden md:block">
            {["about", "skills", "projects", "certificates", "services", "contact"].map((item, idx) => (
              <motion.span key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.1 }}>
                <Link to={item} smooth duration={600} className="cursor-pointer text-white hover:text-blue-400 font-small transition-colors duration-300">{item.toUpperCase()}</Link>
              </motion.span>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-10 md:px-24 py-20 relative overflow-hidden">
        <FloatingShape className="w-72 h-72 bg-blue-500 top-10 -left-20" delay={0} duration={18} />
        <FloatingShape className="w-96 h-96 bg-purple-500 bottom-10 right-0" delay={3} duration={22} />
        <FloatingShape className="w-48 h-48 bg-yellow-400 top-1/2 left-1/3" delay={5} duration={16} />

        <motion.div
          className="max-w-xl z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-medium">Hello, I am</motion.h2>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Bhavendra Kumar</motion.h1>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mt-3">I'm a <span className="text-blue-400">Full Stack Developer</span></motion.h2>
          <motion.p variants={fadeUp} className="text-gray-300 mt-4 leading-relaxed">
            "Bridging Frontend creativity with Backend power to deliver seamless, high impact digital experiences"
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start gap-4 mt-6 text-blue-400 text-2xl">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 p-3 rounded-full hover:bg-blue-400 hover:text-[#0f1a38] transition hover:shadow-lg hover:shadow-blue-400/40"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
          <motion.a
            variants={fadeUp}
            href={resume}
            download="Bhavendra_Kumar_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(96, 165, 250, 0.6)" }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-block bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-blue-500/40 transition duration-300"
          >
            Download Resume <FaDownload className="inline ml-2" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative mt-10 md:mt-0"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-400/20"
          />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border-8 border-yellow-400 p-1 w-72 h-72 overflow-hidden shadow-2xl shadow-yellow-300/30"
          >
            <img src={profile1} alt="Bhavendra Kumar" className="w-full h-full object-cover rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-24">
        <motion.div className="text-center mb-12" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold">ABOUT</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-3 max-w-3xl mx-auto text-center">
            I am a passionate Full-Stack Developer experienced in building scalable, responsive and high-performance web applications. I specialize in modern web technologies including JavaScript, TypeScript, React.js, Tailwind CSS, Next.js, Node.js, Express.js and MongoDB, focusing on developing user-centric solutions that combine strong backend architecture with intuitive frontend design.
            <br />
            <br />
            I have hands-on experience developing full-stack applications and integrating modern technologies such as AI services, REST APIs and cloud-based tools to build efficient and reliable systems. With around two years of experience in full-stack development, I have strengthened my skills in backend development, API design and system architecture.
            <br />
            <br />
            I continuously work on real-world projects while expanding my expertise in modern software development and scalable systems.
          </motion.p>
        </motion.div>

        {/* Experience & Education */}
        <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(96, 165, 250, 0.15)" }} className="bg-[#162240] p-6 rounded-xl shadow-lg shadow-blue-500/10 flex items-center gap-4 transition-all duration-300 border border-transparent hover:border-blue-400/20">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <p className="text-gray-400 text-center">
                Work-Integrated Learning Intern at Kalvium with hands-on experience building full-stack applications using MERN stack, Next.js and cloud services. Developed scalable APIs, responsive interfaces and AI-integrated systems through real-world projects.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(96, 165, 250, 0.15)" }} className="bg-[#162240] p-6 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-300 border border-transparent hover:border-blue-400/20">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-gray-400 text-center">
              B.Tech in Computer Science through the Kalvium Work-Integrated Learning Program at Kalasalingam University (2024-28), focusing on software product engineering and real-world application development.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 md:px-24 relative">
        <FloatingShape className="w-64 h-64 bg-blue-400 top-0 right-10" delay={2} duration={20} />
        <h2 className="text-center text-4xl font-bold mb-12">
          TECHNICAL <span className="text-blue-400">SKILLS</span>
        </h2>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {skills.map((skill, idx) => (
            <motion.a
              key={idx}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#162240] p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-blue-500/30 border border-transparent hover:border-blue-400/20 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                {skill.icon}
              </motion.div>
              <h3 className="mt-4 font-semibold">{skill.name}</h3>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 md:px-24 relative">
        <FloatingShape className="w-80 h-80 bg-purple-500 -bottom-20 -left-20" delay={1} duration={24} />
        <h2 className="text-center text-4xl font-bold mb-12">
          MY <span className="text-blue-400">PROJECTS</span>
        </h2>
        <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-[#162240] p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 border border-transparent hover:border-blue-400/20 transition-all duration-300 flex flex-col items-start"
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >
              {project.img && (
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.desc}</p>
              <div className="flex gap-3 mt-5">
                {project.githubUrl ? (
                  <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0f1a38] transition px-4 py-2 rounded-full text-sm font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    GitHub Repo
                  </motion.a>
                ) : (
                  <span className="border border-blue-400/40 text-blue-400/40 px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed select-none" aria-disabled="true">
                    GitHub Repo
                  </span>
                )}

                {project.liveUrl ? (
                  <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 text-white transition px-4 py-2 rounded-full text-sm font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Live
                  </motion.a>
                ) : (
                  <span className="bg-blue-400/40 text-white/60 px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed select-none" aria-disabled="true">
                    Live
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 px-6 md:px-24">
        <h2 className="text-center text-4xl font-bold mb-12">
          MY <span className="text-blue-400">CERTIFICATES</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div key={idx} className="bg-[#162240] p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition flex flex-col items-start" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.2 }} viewport={{ once: true }}>
              {cert.img && <img src={cert.img} alt={cert.title} className="w-full h-40 object-cover rounded-lg mb-4" />}
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.desc}</p>
              {cert.img && (
                <a
                  href={cert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block bg-blue-400 hover:bg-blue-500 text-white transition px-4 py-2 rounded-full text-sm font-semibold"
                >
                  View
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 md:px-24">
        <h2 className="text-center text-4xl font-bold mb-12">MY <span className="text-blue-400">SERVICES</span></h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              title: "Web Development",
              desc: "Build responsive, fast websites and full-stack applications with clean UI and solid backend APIs.",
            },

            {
              title: "UI/UX Designing",
              desc: "Design intuitive user flows, wireframes, and modern layouts focused on usability and clarity.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative w-full max-w-sm bg-[#162240] p-8 rounded-2xl text-center shadow-lg border border-blue-400/10 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-400/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative mx-auto mb-5 w-16 h-16 rounded-full border border-blue-400/30 flex items-center justify-center bg-[#0f1a38]/40 shadow-md shadow-blue-500/10 transition duration-300 group-hover:scale-105 group-hover:border-blue-400/50">
                <span className="text-blue-400 text-3xl font-bold">{"</>"}</span>
              </div>
              <h3 className="relative text-xl font-bold mb-2 tracking-wide">{service.title}</h3>
              <p className="relative text-gray-300 text-sm leading-relaxed">{service.desc}</p>

              <div className="relative flex gap-3 mt-6 justify-center">
                <Link
                  to="projects"
                  smooth
                  duration={600}
                  className="cursor-pointer border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0f1a38] transition px-4 py-2 rounded-full text-sm font-semibold"
                >
                  View Projects
                </Link>
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white transition px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="bg-[#0f1a38] text-white py-20 px-6 md:px-24">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold">CONTACT ME</h2>
          <p className="text-gray-400 mt-2">Let's connect and build something amazing</p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-6 text-blue-400 text-2xl">
          {socialLinks.map(({ icon: Icon, url }, idx) => (
            <motion.a key={idx} href={url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="border border-blue-400 p-3 rounded-full hover:bg-blue-400 hover:text-[#0f1a38] transition">
              <Icon />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-xl bg-[#162240] p-8 rounded-2xl shadow-lg border border-blue-400/10 text-center">
            <h3 className="text-2xl font-bold mb-2">Message Me</h3>
            <p className="text-gray-300 text-sm">Email: <a href="mailto:bhavendrakumar007@gmail.com" className="text-blue-400 hover:text-blue-300">bhavendrakumar007@gmail.com</a></p>
            <a
              href="mailto:bhavendrakumar007@gmail.com"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white transition px-6 py-3 rounded-full text-sm font-semibold"
            >
              <FaEnvelope /> Send Email
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Hero;
