// src/Components/RubberDuck.jsx
import { useGLTF } from '@react-three/drei';

export default function RubberDuck(props) {
  const { nodes, materials, animations } = useGLTF('/YellowDuck1glb.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Duck.geometry}
        material={materials.Material}
        scale={[0.3, 0.3, 0.3]}
      />
    </group>
  );
}

useGLTF.preload('/YellowDuck1glb.glb');