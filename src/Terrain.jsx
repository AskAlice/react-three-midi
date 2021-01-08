import {useRef} from "react";
import { useFrame, useUpdate } from "react-three-fiber";
import {useMidiAction} from './Midi'
import { noise } from "./perlin";
import * as THREE from 'three';

function updateMesh(geometry,ex,elapsedMs){
  noise.seed((elapsedMs/10)%1);
    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i+(elapsedMs/150) / 100, j+(elapsedMs/150) / 100) +
            noise.simplex2((i+(elapsedMs/150) + 200) / 50, j+(elapsedMs/150) / 50) * Math.pow(ex, 1) +
            noise.simplex2((i+(elapsedMs/150) + 400) / 25, j+(elapsedMs/150) / 25) * Math.pow(ex, 2) +
            noise.simplex2((i+(elapsedMs/150) + 600) / 12.5, j+(elapsedMs/150) / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i+(elapsedMs/150) + 800) / 6.25, j+(elapsedMs/150) / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }
    pos.needsUpdate = true;
}
const Terrain = () => {
  const exx = useRef(1.1); 
  const geo = useRef();
  const noiseGeo = useRef();
  const secondMesh = useRef(new THREE.PlaneBufferGeometry(1000,5000,200,1000));

  // useFrame(()=>{
  
  // })
  const noise = useUpdate(({ geometry }) => {
    updateMesh(geometry,1.3,40);
  });
  const mesh = useUpdate(({ geometry }) => {
    updateMesh(geometry,1.3,30);
  });
  useMidiAction({type:8,subtype:9,note: 40},()=>{
    const geometry = geo.current;
    const elapsedMs = window.currentAudio.currentTime;
    updateMesh(geometry,1.7,elapsedMs);
  },()=>{});
  //   const geometry = geo.current;
  //   const elapsedMs = document.getElementById("audioPlayer").currentTime;

  //   Math.sin(elapsedMs);
  //   let pos = geometry.getAttribute("position");
  //   let pa = pos.array;
  //   const hVerts = geometry.parameters.heightSegments + 1;
  //   const wVerts = geometry.parameters.widthSegments + 1;
  //   for (let j = 0; j < hVerts; j+=2) {
  //     for (let i = 0; i < wVerts; i+=2) {
  //       pa[3 * (j * wVerts + i) + 2] += 0.15*Math.sin(elapsedMs*5);
  //     }
  //   }
  //   for (let j = 1; j < hVerts; j+=2) {
  //     for (let i = 1; i < wVerts; i+=2) {
  //       pa[3 * (j * wVerts + i) + 2] += 0.15*Math.cos(elapsedMs*5);
  //     }
  //   }
  //   pos.needsUpdate = true;
  //   //  mesh.current.rotation.z += 0.001;
  // });
  // Raf loop
  useFrame(() => {
    const geometry = geo.current;
    const noiseGeometry = noiseGeo.current;
    window.audioAnalyzerData.analyzer.getByteFrequencyData(window.audioAnalyzerData.dataArray);
    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    let noisePos = noiseGeometry.getAttribute("position");
    let noisePa = noisePos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j+=3) {
      for (let i = 0; i < wVerts; i+=3) {
        pa[3 * (j * wVerts + i) + 2] = noisePa[3 * (j * wVerts + i) + 2] + window.audioAnalyzerData.dataArray[i] / 30.0;
      }
    }
    pos.needsUpdate = true;
    noisePos.needsUpdate = true;
   
    // group.current.children[0].children[0].children[12].scale.x = dataArray[256]/128.0
    // group.current.children[0].children[0].children[11].scale.x = dataArray[256]/50
    // group.current.children[0].children[0].children[9].scale.x = dataArray[512]/50
  });

  return (
    <group>
      
      <planeBufferGeometry attach="geometry"  ref={noiseGeo} args={[1000,5000,200,1000]} />

      <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" ref={geo} args={[1000,5000,200,1000]} />
        <meshBasicMaterial
          attach="material"
          wireframe={true}
          color={"hotpink"}
          specular={"hotpink"}
          shininess={3}
          flatShading
          />
      </mesh>
    </group>
  );
};

export default Terrain;
