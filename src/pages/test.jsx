// src/pages/AboutMe.jsx
import React from 'react';
import Canvas3D from '../components/Canvas3d.jsx';
import '../styles/mainaboutme.css';
import GlassCard from "../components/HeroCard.jsx";
import Navbar from '../components/navbar.jsx';
function AboutMe() {
  return (
    <>
    <Navbar/>
    <div className="aboutme-page no-scrollbar">
      
      {/* Section 1: 3D Canvas */}
        <div className="centered-content">
          <Canvas3D />
        </div>

      {/* Section 2: About Me Text */}
        <div className="aboutme-box">
          <h1>Hello, I'm Anuj</h1>
          <p>
          I'm a first-year student at PES University, and a passionate coder, hacker, and builder from Bangalore, India. I have a deep love for backend development, game development, and web development. I'm extremely curious about blockchain technology and am actively exploring its potential. With a strong foundation in building and a drive to keep learning, I'm excited to dive deeper into areas like smart contracts, decentralized apps, and blockchain security.

My goal is to combine my skills across backend, web, and gaming with the power of blockchain to create innovative and impactful solutions.


          </p>
        </div>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          <GlassCard title="Game" description="checkout a exploring game where u explore about me" route="/gr"  backgroundImage="/images/gameentry.png"/>
          <GlassCard title="My Passion" description="Find out more about me and what i am most Passionate about." route="/tech/passion" backgroundImage="/images/game.png"/>
          <GlassCard title="My experience and skill in tech" description="Explore my portfolio." route="/tech/abtme"  backgroundImage="/images/console.png" />
          <GlassCard title="My Hobbies" description="Explore my hobbies and if it interests you may be get in touch" route="/tech/music"  backgroundImage="/images/hobbies.png" />
        </div>
      </section>
      {/* Section 2: About Me Text */}
        <div className="aboutme-box">
        <h1>Contact</h1>

          <p>Git: <a href="https://github.com/S-Anuj-Srijan" target="_blank">Look at my projects </a></p>
          <p>Youtube: <a href="https://www.youtube.com/@anujsrijan5826" target="_blank">I update my life here</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/anuj-srijan-s-850313248/" target="_blank">Connect with me on LinkedIn</a></p>          
          <p>Instagram: <a href="https://www.instagram.com/anuj_srijan" target="_blank">Text me on instagram</a></p>

        </div>
    </div>
    </>
  );
}

export default AboutMe;
