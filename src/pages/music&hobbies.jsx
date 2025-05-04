// src/pages/Hi.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import "../styles/musicinfo.css"; 

function Hi() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'e') {
        navigate('/entered(hobbies)');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="hacker-page">

        {/* Left side - Info */}
        <div className="left-panel scrollable">
          <h1>Welcome, Operator. (Press 'E' to return to the game)</h1>

          <p className="intro">
            Initiating passion overview... Musician, athlete, builder, and explorer of machines and dreams.
          </p>

          <h2>🎸 Music Journey</h2>
          <ul>
            <li>Play bass, guitar, and piano</li>
            <li>Member of Shiitake Mushrooms band</li>
            <li>Genres: Rock, Jazz, Pop, Classical, EDM</li>
            <li>Share music on Instagram and YouTube</li>
          </ul>

          <h2>⚽ Sports Spirit</h2>
          <ul>
            <li>Soccer player since 10 years old</li>
            <li>Played for BFC, BBFS, and school team</li>
            <li>Passionate boxing practitioner</li>
          </ul>

          <h2>🤖 Builder's Mind</h2>
          <ul>
            <li>Arduino robotics enthusiast since 7th grade</li>
            <li>Built 4-DOF robotic arm controlled with Xbox controller</li>
            <li>Champion in school-level robotics competitions</li>
          </ul>

          <h2>🏍️ Mechanical Fascination</h2>
          <ul>
            <li>Lifelong passion for bikes and engineering</li>
            <li>Learned about engines and systems with my brother</li>
            <li>Admire bikes for precision, freedom, and design</li>
          </ul>

          <h2>🎯 Mission</h2>
          <p>
            Blending creativity, engineering, and discipline into everything I build, play, and create. Living with passion and precision.
          </p>

          <footer>Terminal session powered by Anuj</footer>
        </div>

        {/* Right side - Icons */}
        <div className="right-panel scrollable">
          <img src="/images/me.png" alt="Guitar" />
          <img src="/images/football.png" alt="Soccer" />
          <img src="/images/bike.png" alt="Bikes" />
          <img src="/images/cert.png" alt="Robotics" />

        </div>

      </div>
    </>
  );
}

export default Hi;
