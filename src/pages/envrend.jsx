import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene';
import Navbar from '../components/navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* 3D Canvas */}
      <Canvas
        style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
        camera={{ fov: 75, near: 0.1, far: 1000 }}
      >
        <Scene cameraStart={[-20, 8, -1]} />
      </Canvas>

      {/* Glassy Info Card */}
      <div style={{
        position: 'absolute',
        top: '20px', // Adjust as needed
        left: '20px',
        padding: '20px',
        width: '400px',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // light transparent
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '15px',
        color: 'white',
        fontFamily: 'sans-serif',
      }}>
       
        <p>click on the game screen to move around (wasd) and click esc to gain web control</p>

        <h4>mission:</h4>
        <p> go to the sighn tht says ON AIR and click (e)</p>
      </div>
    </div>
    </>
  );
}

export default App;
