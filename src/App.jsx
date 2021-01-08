import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';
import React, { useRef, useState, Suspense } from 'react';
import Midi from './Midi';
import { draco, Stats, Stars,Html } from 'drei';
import Model from './Scene';
import Effects from './Effects';
import Terrain from './Terrain'
import Crystal from './Crystal'
// import Weaver from './Weaver'
function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 8] }} shadowMap>
        <ambientLight />
        <Stats
        showPanel={0} // Start-up panel (default=0)
        className="stats" // Optional className to add to the stats container dom element
      />
      <Suspense>
        <Midi />
        <Suspense fallback={<Html><h2>Loading</h2></Html>}>
          <Effects />
          <group scale={[0.15,0.15,0.15]}>
          {/* <Weaver /> */}
          </group>
          <Model position={[-10, 0, 0]} rotation={[0, 0, 0]} />
          <Terrain />
          <Crystal position={[150,0,-120]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-30,0,-40]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[85,0,-260]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[150,0, 680]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-100,0, 560]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-64,0, 460]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-80,0, 160]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[54,0, 380]} scale={[0.5,0.5,0.5]}/>
        </Suspense>
        </Suspense>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </>
  );
}

export default App;
