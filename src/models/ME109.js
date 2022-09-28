/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/ME109.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0.15, 0]}
        scale={[1, -0.37, 2.4]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, -0.14, 0.64]}
        scale={[2.73, 0.07, -0.53]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Material}
        position={[0, 0.38, -2.11]}
        scale={[0.85, 0.05, 0.28]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[0, 0.54, -1.98]}
        scale={[1, -0.35, 0.43]}
      />
      <mesh
        geometry={nodes.Cone.geometry}
        material={materials.Material}
        position={[0, 0.04, 2.26]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.21, 0.14, 0.21]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        position={[0, 0.04, 2.35]}
        rotation={[Math.PI / 2, -1.08, 0]}
        scale={[0.05, 0.03, 0.05]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.Material}
        position={[0, -0.05, 1.68]}
        scale={[0.11, -0.02, 0.26]}
      />
    </group>
  );
}

useGLTF.preload("/ME109.gltf");
