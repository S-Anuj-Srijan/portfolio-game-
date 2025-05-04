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
  const { scene } = useGLTF('/models/envport.glb');
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
  const region = [[[-17,3], [-17,-10], [-26,-10], [-26,1.5]]];
  const bike_region = [[[-17,3], [-17,-5], [-26,-6.5], [-26,1.5]]];

  blockedareas= [[[-2,26], [0.6,-28.4], [-16.2,-27.2], [-16.5,26.5]],[[-27.8419,-4.83386],[-28.2791,22.17244],[-29.4449,22.18924],[-29.4449,-4.83386]],
  [[-27.36878,22.58860],[-28,22.58860],[-27.36878,42.1244841],[-28,42.1244841]]];

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

    if (isCameraOutsideBlockades(camera.position.x,camera.position.z,blockedareas)){
      if (keys.current['w']&&isCameraOutsideBlockades(camera.position.x,camera.position.z,blockedareas)) move.add(direction);

      if (keys.current['s']&&isCameraOutsideBlockades(camera.position.x,camera.position.z,blockedareas)) move.addScaledVector(direction, -1);
      
      if (keys.current['a']&&isCameraOutsideBlockades(camera.position.x,camera.position.z,blockedareas)) move.addScaledVector(right, -1);
      
      if (keys.current['d']&&isCameraOutsideBlockades(camera.position.x,camera.position.z,blockedareas)) move.add(right);
    }
    else{
      if (keys.current['w']) move.addScaledVector(direction, -1);

      if (keys.current['s']) move.add(direction);
      
      if (keys.current['a']) move.add(right);
      
      if (keys.current['d']) move.addScaledVector(right, -1);
    }

    if (keys.current['e']&&!isCameraOutsideBlockades(camera.position.x,camera.position.z,region))navigate('/er');

    

    move.normalize().multiplyScalar(speed * delta);
    camera.position.add(move);
    console.log(isCameraOutsideBlockades(camera.position.x,camera.position.z,region))
    console.log('Camera position:', camera.position);

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