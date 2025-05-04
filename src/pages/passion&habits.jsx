// src/pages/Hi.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import this
import '../styles/passioninfo.css';
import Navbar from '../components/navbar';
function Hi() {
  const navigate = useNavigate(); // <-- setup navigation hook

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'e') {
        navigate('/entered(passion)'); // <-- change this to whatever route you want
      }
    };  

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <>
    <Navbar/>
    <div className="hacker-page">
      {/* Left side - Tech info */}
      <div className="left-panel scrollable">
        <h1>Welcome, Operator. (Press 'E' to return to the game)</h1>
        <p className="intro">About Me</p>
        <h2>🎯 Mission</h2>
        <p>
        I am deeply passionate about electronics, technology, and networks. From a young age, I have been driven by a curiosity to understand how systems work and how they can be improved. I love building projects that test my rigor and push my creativity, allowing me to constantly learn, innovate, and challenge myself.

        One area that excites me the most is blockchain implementation. The complexity, security models, and decentralized logic behind blockchain technology fuel my desire to dive deeper into its real-world applications. It’s a space where I can truly stretch my thinking, sharpen my technical skills, and stay at the cutting edge of innovation.

        I also have a strong interest in cybersecurity. I enjoy exploring ways to protect systems and data, understanding vulnerabilities, and applying security principles in everything I build. It’s a field that complements my love for networks and technology, reinforcing my commitment to creating robust, secure, and forward-looking solutions.
        </p>

        <h2>🚀 Lately, I am excited about diving into emerging technologies like:</h2>
        <ul>
          <li>Zero Knowledge Proofs (ZKPs) for blockchain scalability and privacy</li>
          <li>Decentralized Finance (DeFi) protocols</li>
          <li>Smart Contracts and dApps (Decentralized Apps) development</li>
          <li>IoT (Internet of Things) systems integrated with blockchain</li>
          <li>AI-enhanced cybersecurity for smarter, predictive defenses</li>
          <li>Quantum-resistant cryptography to secure future systems</li>


        </ul>

        <footer>Terminal session powered by me🎉</footer>
      </div>

      
    </div>
    </>
  );
}

export default Hi;
