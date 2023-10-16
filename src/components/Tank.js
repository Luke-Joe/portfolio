/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function RotatingObject() {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/TankModel.gltf`
  );
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 5;
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh ref={myMesh}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0.0, 0]}
        rotation={[0, Math.PI, 0]}
        scale={[0.6, 0.6, 0.6]}
      />
    </mesh>
  );
}
export default function Model(props) {
  return (
    <group {...props} dispose={null}>
      <ambientLight color={"#EAB003"}></ambientLight>
      <pointLight
        position={[3, 3, -3]}
        intensity={1.5}
        color={"#EAB003"}
      ></pointLight>
      <RotatingObject />
    </group>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}/TankModel.gltf`);
