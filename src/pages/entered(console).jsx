import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/scene2';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* 3D Canvas */}
      <Canvas
        style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
        camera={{ fov: 75, near: 0.1, far: 1000 }}
      >
        <Scene cameraStart={[-0.36624370280761515, 1.8, 3.2461351728289967]} />
      </Canvas>

      {/* Fixed Glassy Info Card */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        padding: '20px',
        width: '500px',
        backdropFilter: 'blur(15px)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '0.5px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
      }}>
        <h3 style={{ marginBottom: '10px' }}>(Area ➔ Info about Me)</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li><strong>Bike</strong> ➔ Passion</li>
          <li><strong>Control Console</strong> ➔ Tech Info & Experience</li>
          <li><strong>Music Studio</strong> ➔ Hobbies</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
