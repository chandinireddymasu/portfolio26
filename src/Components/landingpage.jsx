import emailjs from "emailjs-com";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaJava, FaExternalLinkAlt, FaPhone } from "react-icons/fa";
import profileImg from "/chandini.jpg";
import suvarnakuteerImg from "/Suvarnakuteer.png";
import renthubImg from "/renthub.jpeg";
export default function HeroSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // EmailJS config (replace with your own IDs from emailjs.com)
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: "chandinireddymasu02@gmail.com",
      }, userID);

      // Placeholder for SMS sending (requires backend or Twilio)
      // await sendSMS(form); // Implement this if you have a backend

      setShowPopup(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  const [loading, setLoading] = useState(false);

  const handleDownloadCV = () => {
    setLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/ChandiniReddymasu.pdf";
      link.download = "ChandiniReddymasu.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-screen flex items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => {
            const randomDuration = (Math.random() * 10 + 8).toFixed(2);
            const randomSize = Math.floor(Math.random() * 40) + 20;
            return (
              <div key={`circle-${i}`} className="absolute rounded-full blur-lg" style={{width: `${randomSize}px`,height: `${randomSize}px`,background: `gray`,top: `${Math.random() * 100}%`,left: `${Math.random() * 100}%`,animation: `curveMove_${i} ${randomDuration}s ease-in-out infinite, rotateShape_${i} ${randomDuration}s linear infinite`}}></div>
            );
          })}
        </div>

        <div className="w-full max-w-4xl flex flex-col items-center justify-center relative z-10">
          <div className="flex justify-center items-center w-20 h-20 rounded-full border-2 border-white mb-6 animate-bounce">
            <span className="text-yellow-400 text-xl font-semibold">CR</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-1">Hello, I'm</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-3">Chandini Reddymasu</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4">Web Designer / Java Developer</p>
          <p className="max-w-2xl text-gray-400 mb-6 text-sm md:text-base">I am a passionate web designer and Java developer with a keen eye for detail and a love for creating beautiful, functional websites.</p>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-300 hover:text-white text-2xl transition-transform transform hover:scale-125"><FaGithub /></a>
            <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl transition-transform transform hover:scale-125"><FaLinkedin /></a>
            <a href="mailto:example@email.com" className="text-gray-300 hover:text-red-400 text-2xl transition-transform transform hover:scale-125"><FaEnvelope /></a>
          </div>
          <div className="flex flex-col items-center space-y-4 w-full">
            <div className="flex space-x-4 flex-wrap justify-center">
              <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})} className="px-6 py-2 rounded-lg bg-blue-500 text-white transform transition-all duration-300 hover:scale-110 hover:bg-blue-600 shadow-lg">Explore My Work</button>
              <button onClick={handleDownloadCV} disabled={loading} className={`px-6 py-2 rounded-lg transform transition-all duration-300 hover:scale-110 shadow-lg border ${loading ? "bg-gray-600 border-gray-500 cursor-not-allowed" : "bg-gray-800 border-gray-600 hover:bg-green-500 text-white"}`}>{loading ? "Preparing Download..." : "Download CV"}</button>
            </div>
            <hr className="border-gray-600 border-2 w-4/5 mt-4 animate-fadeIn" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (<div key={i} className="absolute w-20 h-20 bg-gray-700 opacity-20 rounded-full animate-pulse" style={{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`}}></div>))}
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 animate-fadeInUp">
          <div className="flex justify-center relative">
            <div className="absolute w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <img src={profileImg} alt="Chandini Reddymasu" className="rounded-lg shadow-lg w-96 transform transition-transform duration-700 hover:scale-105 hover:rotate-1 animate-floating relative z-10" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">Hi there! I'm Chandini Reddymasu, a versatile developer blending Java, web design, and modern web technologies to create solutions that are both intelligent and visually compelling.</p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 transform transition hover:scale-105 border border-blue-400 animate-borderGlow">
              <div className="flex items-center mb-4"><FaCode className="text-blue-400 text-4xl mr-4 animate-iconPulse" /><h3 className="text-3xl font-bold text-blue-300 animate-typewriter">Frontend Developer</h3></div>
              <p className="text-gray-300 text-lg leading-relaxed">I specialize in creating interactive, user-friendly, and responsive web interfaces using React.js, Tailwind CSS, and modern JavaScript frameworks.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105 border border-orange-400 animate-borderGlow">
              <div className="flex items-center mb-4"><FaJava className="text-orange-400 text-4xl mr-4 animate-iconPulse" /><h3 className="text-3xl font-bold text-orange-300 animate-typewriter">Java Developer</h3></div>
              <p className="text-gray-300 text-lg leading-relaxed">Proficient in building robust backend systems and APIs using Java and Spring Boot, ensuring scalability, security, and maintainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative bg-gray-950 text-white py-16 px-6 md:px-20 lg:px-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (<div key={i} className="absolute w-24 h-24 bg-blue-600 opacity-10 rounded-full animate-ping" style={{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`}}></div>))}
        </div>
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400 relative z-10">Projects</h2>
        <div className="flex justify-centerrelative z-10">
          {[{title:'Suvarnakuteer', img:suvarnakuteerImg, desc:'A modern real estate website built using React and Tailwind CSS, offering property listings, contact forms, and responsive layouts.', skills:['React','Tailwind','Responsive Design'], demo:'https://suvarnakuteer.co.in/', github:'#'}].map((project,index)=>(
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition  animate-fadeInUp w-full md:w-3/4 lg:w-2/5">
              <img src={project.img} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-blue-300 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i)=>(<span key={i} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">{skill}</span>))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.demo} target="_blank" className="flex items-center px-5 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transform hover:scale-110 transition"><FaExternalLinkAlt className="mr-2"/>Live Demo</a>
                  <a href={project.github} target="_blank" className="flex items-center px-5 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transform hover:scale-110 transition"><FaGithub className="mr-2"/>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {0% {opacity: 0; transform: translateY(50px);}100% {opacity: 1; transform: translateY(0);}}
        .animate-fadeInUp {animation: fadeInUp 1.5s ease forwards;}
        @keyframes floating {0% {transform: translateY(0px);}50% {transform: translateY(-10px);}100% {transform: translateY(0px);}}
        .animate-floating {animation: floating 4s ease-in-out infinite;}
        @keyframes borderGlow {0% {box-shadow: 0 0 5px currentColor;}50% {box-shadow: 0 0 15px currentColor;}100% {box-shadow: 0 0 5px currentColor;}}
        .animate-borderGlow {animation: borderGlow 2s infinite ease-in-out;}
        @keyframes typewriter {from {width: 0;}to {width: 100%;}}
        .animate-typewriter {overflow: hidden;white-space: nowrap;animation: typewriter 3s steps(20) 1s forwards;}
        @keyframes iconPulse {0% {transform: scale(1) rotate(0);}50% {transform: scale(1.2) rotate(10deg);}100% {transform: scale(1) rotate(0);}}
        .animate-iconPulse {animation: iconPulse 2s infinite ease-in-out;}
      `}</style>

      {/* Skills Section */}
      <section id="skills" className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 px-6 md:px-20 lg:px-40 overflow-hidden">
        {/* Modern, unique font from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap" rel="stylesheet" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-700 opacity-10 animate-skillPulse"
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 40}px`,
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.7}s`
              }}
            ></div>
          ))}
        </div>
        <h2 
          className="text-6xl font-bold text-center mb-14 relative z-10 animate-fadeInUp"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            color: "#38bdf8", // sky-400
            letterSpacing: "3px"
          }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative z-10">
          {/* HTML */}
          <div
            className="bg-gray-800 rounded-xl shadow-2xl p-10 flex flex-col items-center transform hover:scale-105 transition animate-fadeInUp border-t-4 border-orange-400"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-7xl mb-5 animate-bounce"><i className="fab fa-html5" style={{ color: "#fb923c" }}></i></span>
            <h3 className="text-4xl font-bold mb-3" style={{ color: "#fdba74" }}>HTML5</h3>
            <p className="text-orange-100 text-center text-xl font-medium">Semantic, accessible markup for robust and SEO-friendly web pages.</p>
          </div>
          {/* CSS */}
          <div
            className="bg-gray-800 rounded-xl shadow-2xl p-10 flex flex-col items-center transform hover:scale-105 transition animate-fadeInUp border-t-4 border-blue-400"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-7xl mb-5 animate-spin-slow"><i className="fab fa-css3-alt" style={{ color: "#60a5fa" }}></i></span>
            <h3 className="text-4xl font-bold mb-3" style={{ color: "#93c5fd" }}>CSS3</h3>
            <p className="text-blue-100 text-center text-xl font-medium">Modern layouts, animations, and responsive design using CSS and Tailwind CSS.</p>
          </div>
          {/* JavaScript */}
          <div
            className="bg-gray-800 rounded-xl shadow-2xl p-10 flex flex-col items-center transform hover:scale-105 transition animate-fadeInUp border-t-4 border-yellow-400"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-7xl mb-5 animate-wiggle"><i className="fab fa-js-square" style={{ color: "#fde047" }}></i></span>
            <h3 className="text-4xl font-bold mb-3" style={{ color: "#fef9c3" }}>JavaScript</h3>
            <p className="text-yellow-100 text-center text-xl font-medium">Dynamic, interactive web experiences with ES6+ and modern JavaScript frameworks.</p>
          </div>
          {/* React */}
          <div
            className="bg-gray-800 rounded-xl shadow-2xl p-10 flex flex-col items-center transform hover:scale-105 transition animate-fadeInUp border-t-4 border-cyan-400"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-7xl mb-5 animate-spin"><i className="fab fa-react" style={{ color: "#22d3ee" }}></i></span>
            <h3 className="text-4xl font-bold mb-3" style={{ color: "#67e8f9" }}>React</h3>
            <p className="text-cyan-100 text-center text-xl font-medium">Building fast, scalable, and maintainable UIs with React and hooks.</p>
          </div>
          {/* Java */}
          <div
            className="bg-gray-800 rounded-xl shadow-2xl p-10 flex flex-col items-center transform hover:scale-105 transition animate-fadeInUp border-t-4 border-red-400"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-7xl mb-5 animate-pulse"><FaJava style={{ color: "#f87171" }} /></span>
            <h3 className="text-4xl font-bold mb-3" style={{ color: "#fca5a5" }}>Java</h3>
            <p className="text-red-100 text-center text-xl font-medium">Robust backend development, APIs, and enterprise solutions using Java and Spring Boot.</p>
          </div>
          {/* SQL */}
          <div
            className="bg-gray-800 rounded-xl shadow-2xl p-10 flex flex-col items-center transform hover:scale-105 transition animate-fadeInUp border-t-4 border-green-400"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <span className="text-7xl mb-5 animate-bounce">
              <i className="fas fa-database" style={{ color: "#4ade80" }}></i>
            </span>
            <h3 className="text-4xl font-bold mb-3" style={{ color: "#86efac" }}>SQL</h3>
            <p className="text-green-100 text-center text-xl font-medium">Efficient data modeling, querying, and management using SQL for relational databases.</p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes skillPulse {0% {opacity: 0.1;} 50% {opacity: 0.3;} 100% {opacity: 0.1;}}
        .animate-skillPulse {animation: skillPulse 6s infinite;}
        @keyframes spin-slow {100% {transform: rotate(360deg);}}
        .animate-spin-slow {animation: spin-slow 8s linear infinite;}
        @keyframes wiggle {0%,100%{transform:rotate(-8deg);}50%{transform:rotate(8deg);}}
        .animate-wiggle {animation: wiggle 2s infinite;}
      `}</style>

      {/* Contact / Get In Touch Section */}
      <section id="contact" className="relative bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 md:px-20 lg:px-40 overflow-hidden">
        {/* Google Fonts for Quicksand */}
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&display=swap" rel="stylesheet" />
        {/* Animated background shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full blur-2xl animate-contactFloat`}
              style={{
                width: `${80 + Math.random() * 80}px`,
                height: `${80 + Math.random() * 80}px`,
                background: `linear-gradient(135deg, #38bdf8 60%, #6366f1 100%)`,
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                opacity: 0.10 + Math.random() * 0.15,
                animationDelay: `${i * 0.7}s`
              }}
            ></div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className="text-6xl font-extrabold text-center mb-4"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              color: "#38bdf8",
              letterSpacing: "2px"
            }}
          >
            Get In Touch
          </h2>
          <p
            className="text-center mb-12 text-2xl"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              color: "#c7d2fe"
            }}
          >
            Ready to create something amazing together? Let's bring your vision to life
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Let's Connect */}
            <div
              className="bg-gray-900 rounded-2xl shadow-xl p-10 flex flex-col justify-between animate-fadeInUp"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: "#f1f5f9"
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#60a5fa",
                  fontFamily: "'Quicksand', sans-serif"
                }}
              >
                Let's Connect
              </h3>
              <p
                className="mb-8 text-xl"
                style={{
                  color: "#a5b4fc",
                  fontFamily: "'Quicksand', sans-serif"
                }}
              >
                I'm passionate about creating immersive digital experiences and would love to discuss your next project. Whether it's web development, interactive design, or cutting-edge animation, let's make it happen.
              </p>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-400 text-3xl mr-4 animate-contactIcon" />
                <span className="text-lg" style={{ color: "#f1f5f9" }}>chandinireddymasu02@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-400 text-3xl mr-4 animate-contactIcon" />
                <span className="text-lg" style={{ color: "#f1f5f9" }}>+91 7396282904</span>
              </div>
            </div>
            {/* Right: Send a Message */}
            <form
              onSubmit={handleContactSubmit}
              className="bg-gray-900 rounded-2xl shadow-xl p-10 flex flex-col space-y-6 animate-fadeInUp"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: "#f1f5f9"
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#60a5fa",
                  fontFamily: "'Quicksand', sans-serif"
                }}
              >
                Send a Message
              </h3>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-1/2 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 animate-contactInput text-lg"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#f1f5f9"
                  }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-1/2 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 animate-contactInput text-lg"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#f1f5f9"
                  }}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 animate-contactInput text-lg"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: "#f1f5f9"
                }}
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 animate-contactInput text-lg"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: "#f1f5f9"
                }}
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition animate-contactButton text-xl"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  letterSpacing: "1px"
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-60 absolute inset-0"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center animate-popupSuccess">
              <svg className="w-20 h-20 text-green-500 mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2l4-4"/>
              </svg>
              <h4 className="text-3xl font-bold mb-2 text-green-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>Message Sent!</h4>
              <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>Thank you for reaching out. I will get back to you soon.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <style>{`
        @keyframes popupSuccess {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popupSuccess { animation: popupSuccess 0.7s cubic-bezier(.68,-0.55,.27,1.55) both; }
      `}</style>

      {/* Footer Section */}
      <footer className="relative bg-[#101827] text-gray-300 pt-14 pb-6 px-6 md:px-20 lg:px-40 mt-10 overflow-hidden">
        {/* Google Fonts for footer */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Urbanist:wght@700&display=swap" rel="stylesheet" />
        {/* Animated background shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-2xl animate-footerFloat"
              style={{
                width: `${60 + Math.random() * 80}px`,
                height: `${60 + Math.random() * 80}px`,
                background: `linear-gradient(135deg, #818cf8 60%, #38bdf8 100%)`,
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                opacity: 0.10 + Math.random() * 0.18,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700 relative z-10">
          {/* About */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-2"
              style={{
                fontFamily: "'Montserrat', 'Urbanist', sans-serif",
                color: "#60a5fa",
                letterSpacing: "2px"
              }}
            >
              Chandini Reddymasu
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "'Montserrat', 'Urbanist', sans-serif",
                color: "#e0e7ef"
              }}
            >
              A versatile developer blending Java, web design, and modern web technologies to create solutions that are both intelligent and visually compelling.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "'Montserrat', 'Urbanist', sans-serif",
                color: "#f472b6"
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-lg md:text-xl">
              <li>
                <a href="#home" className="hover:text-blue-400 transition" style={{ fontFamily: "'Montserrat', 'Urbanist', sans-serif", color: "#c7d2fe" }}>Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition" style={{ fontFamily: "'Montserrat', 'Urbanist', sans-serif", color: "#c7d2fe" }}>About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition" style={{ fontFamily: "'Montserrat', 'Urbanist', sans-serif", color: "#c7d2fe" }}>Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition" style={{ fontFamily: "'Montserrat', 'Urbanist', sans-serif", color: "#c7d2fe" }}>Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition" style={{ fontFamily: "'Montserrat', 'Urbanist', sans-serif", color: "#c7d2fe" }}>Contact</a>
              </li>
            </ul>
          </div>
          {/* Connect */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "'Montserrat', 'Urbanist', sans-serif",
                color: "#f472b6"
              }}
            >
              Connect
            </h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg text-3xl transition" aria-label="GitHub" style={{ color: "#60a5fa" }}><FaGithub /></a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg text-3xl transition" aria-label="LinkedIn" style={{ color: "#60a5fa" }}><FaLinkedin /></a>
              <a href="mailto:chandinireddymasu02@gmail.com" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg text-3xl transition" aria-label="Email" style={{ color: "#60a5fa" }}><FaEnvelope /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-base md:text-lg text-gray-400 relative z-10" style={{ fontFamily: "'Montserrat', 'Urbanist', sans-serif" }}>
          <div>
            © {new Date().getFullYear()} <span style={{ color: "#60a5fa", fontWeight: 700 }}>Chandini Reddymasu</span>. 
          </div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition" style={{ color: "#f472b6" }}>Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition" style={{ color: "#f472b6" }}>Terms of Service</a>
          </div>
        </div>
        <style>{`
          @keyframes footerFloat {
            0% { transform: translateY(0) scale(1);}
            50% { transform: translateY(-24px) scale(1.08) rotate(8deg);}
            100% { transform: translateY(0) scale(1);}
          }
          .animate-footerFloat { animation: footerFloat 9s cubic-bezier(.68,-0.55,.27,1.55) infinite; }
        `}</style>
      </footer>
    </>
  );
}
