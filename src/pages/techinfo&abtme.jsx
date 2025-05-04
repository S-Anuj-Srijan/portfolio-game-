// src/pages/Hi.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/techinfo.css';
import Navbar from '../components/navbar';
function Hi() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'e') {
        navigate('/entered(console)');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <>
      {/* Navbar */}
      <Navbar/>

      {/* Main Page Content */}
      <div className="hacker-page">
        {/* Left side - Tech info */}
        <div className="left-panel scrollable">
          <h1>Welcome, Operator. (Press 'E' to return to the game)</h1>

          <p className="intro">
            Initiating system overview... Expertise in full-stack development, immersive 3D web, and UI/UX hacking.
          </p>

          <h2>⚡ Skills</h2>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React, Three.js</li>
            <li>Backend: Node.js, Express</li>
            <li>3D Web: Three.js, React Three Fiber</li>
            <li>Game Dev Basics: Physics, Collision, FPV Movement</li>
            <li>UI/UX: Responsive Design, Dark Interfaces</li>
            <li>Debugging: Clean Code Architectures</li>
          </ul>

          <h2>🚀 Projects</h2>
          <ul>
            <li>Immersive 3D Virtual Worlds</li>
            <li>Real-time Web Applications</li>
            <li>Animated UI Systems</li>
            <li>Automation Utilities and Tools</li>
            <li>Posture detection and posture similarity detection</li>
          </ul>

          <footer>Terminal session powered by Anuj</footer>
        </div>

        {/* Right side - Framework logos */}
        <div className="right-panel scrollable">
          <img src="/images/react.png" alt="React" />
          <img src="/images/nodejs.png" alt="Node.js" />
          <img src="/images/Threejs-logo.png" alt="Three.js" />
          <img src="/images/html.png" alt="HTML" />
          <img src="/images/css.png" alt="CSS" />
          <img src="/images/js.png" alt="JavaScript" />
          <img src="/images/c.png" alt="JavaScript" />

        </div>
      </div>
    </>
  );
}

export default Hi;
