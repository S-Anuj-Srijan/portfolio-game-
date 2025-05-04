// components/Scene.jsx
import React, { useEffect, useRef, Suspense } from 'react';
import { useGLTF, PointerLockControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

const speed = 5;
function isCameraOutsideBlockades(x, y, blockade) {
  function isPointInPolygon(polygon, px, py) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];

      const intersect =
        yi > py !== yj > py &&
        px < ((xj - xi) * (py - yi)) / (yj - yi + Number.EPSILON) + xi;

      if (intersect) inside = !inside;
    }
    return inside;
  }

  for (const region of blockade) {
    if (isPointInPolygon(region, x, y)) {
      return false; // Inside a blocked region
    }
  }

  return true; // Not in any blocked region
}


function CityModel() {
  const { scene } = useGLTF('/models/office port3.glb');
  return <primitive object={scene} />;
}

function isCameraInRegion(region, cameraPosition) {
  const px = cameraPosition.x;
  const pz = cameraPosition.z;
  let inside = false;

  for (let i = 0, j = region.length - 1; i < region.length; j = i++) {
    const [xi, zi] = region[i];
    const [xj, zj] = region[j];

    const intersect =
      zi > pz !== zj > pz &&
      px < ((xj - xi) * (pz - zi)) / (zj - zi + Number.EPSILON) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
}


const Scene = ({ blockedareas,cameraStart = [0, 3, 10] }) => {
  const { camera, gl } = useThree();
  const navigate = useNavigate();
  const keys = useRef({});
  const region = [[[-17,3], [-17,-5], [-26,-6.5], [-26,1.5]]];
  const region_bike=[[[-11.00528093969574,-1.549987033520637],[-10.675265578903177,-2.2550495944993276],[-8.114312789302016,-2.436218407956524],[-8.114304768296893,-1.567211359929366]]]
  const region_console=[[[-3.2966532833104676,1.677974864612035],[3.991238266217072,0.15843407036722412],[3.9625560271401215,4.045348293199242],[-2.5757632795414924,6.166986167994398]]]
  const region_musicstudio=[[[-3.4416721556657164,-1.7060335835591802],[-3.0048205699853234,-6.7725162576979905],[4.123160797802293,-4.230325983793688],[3.3343244387978794,-0.3237769183306849]]]

  blockedareas= [[[]]];

  // Set camera position on mount
  useEffect(() => {
    camera.position.set(...cameraStart);
  }, [camera, cameraStart]);

  // Key handlers
  useEffect(() => {
    const down = (e) => (keys.current[e.key.toLowerCase()] = true);
    const up = (e) => (keys.current[e.key.toLowerCase()] = false);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // WASD movement logic
  useFrame((_, delta) => {
    if (document.pointerLockElement !== gl.domElement) return;
  
    const direction = new THREE.Vector3();
    const right = new THREE.Vector3();
    const move = new THREE.Vector3();
  
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();
    right.crossVectors(direction, camera.up).normalize();
  
    // WASD movement
    if (keys.current['w'] && isCameraOutsideBlockades(camera.position.x, camera.position.z, blockedareas)) move.add(direction);
    if (keys.current['s'] && isCameraOutsideBlockades(camera.position.x, camera.position.z, blockedareas)) move.addScaledVector(direction, -1);
    if (keys.current['a'] && isCameraOutsideBlockades(camera.position.x, camera.position.z, blockedareas)) move.addScaledVector(right, -1);
    if (keys.current['d'] && isCameraOutsideBlockades(camera.position.x, camera.position.z, blockedareas)) move.add(right);
  
    // Conditional Y-position logic
    if (
      camera.position.z > -2.5&&
      camera.position.z < -1.4 &&
      camera.position.x > -11.5 &&
      camera.position.x < -8
    ) {
      camera.position.y = 7;
    } else if (camera.position.x < -10) {
      camera.position.y = 6;
      if (keys.current['e'])navigate('/gr');
    } else if (camera.position.x > -11.5 &&
      camera.position.x < -10) {
      camera.position.y = 5.5; // default height
    }else if (camera.position.x > -10 &&
      camera.position.x < -9.5) {
      camera.position.y = 5; // default height
    }else if (camera.position.x > -9.5 &&
      camera.position.x < -9) {
      camera.position.y = 4.5; // default height
    }else if (camera.position.x > -9 &&
      camera.position.x < -8.5) {
      camera.position.y = 4; // default height
    }else if (camera.position.x > -8.5 &&
      camera.position.x < -7.5) {
      camera.position.y = 3.5; // default height
    }
    else if (camera.position.x > -8 &&
      camera.position.x < -5.5) {
      camera.position.y = 3; // default height
    }
    else if (camera.position.x > -5.5 &&
      camera.position.x < -4) {
      camera.position.y = 2.5; // default height
    }
    else if (camera.position.x > -4&&
      camera.position.x < 0) {
      camera.position.y = 1.8; // default height
    }

    if (keys.current['e']){
        if(!isCameraOutsideBlockades(camera.position.x,camera.position.z,region_bike))navigate('/tech/passion');
        if(!isCameraOutsideBlockades(camera.position.x,camera.position.z,region_console))navigate('/tech/abtme');
        if(!isCameraOutsideBlockades(camera.position.x,camera.position.z,region_musicstudio))navigate('/tech/music');
    }

    move.normalize().multiplyScalar(speed * delta);
    camera.position.add(move);
  
    console.log(camera.position);
  });
  
  

  return (
    <>
      <Suspense fallback={null}>
        <CityModel />
      </Suspense> 
      <PointerLockControls />
    </>
  );
};

export default Scene; 