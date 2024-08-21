import { Canvas } from '@react-three/fiber';
import RubberDuck from './RubberDuck';
import { OrbitControls } from '@react-three/drei';

const BackgroundCanvas = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [-3.7439, 1.5835, 3.3649],
        }}
      >
        {/* <gridHelper args={[10, 10]} />
        <axesHelper args={[10]} /> */}

        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={0.5} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <RubberDuck position={[0, -3.4, 0]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={1}
          panSpeed={1}
          rotateSpeed={0.5}
          rotation={[0, 2, 0]}
        // onChange={(e) => {
        //   console.log(e?.target?.object?.position);
        // }}
        />
      </Canvas>
    </>
  );
}

export default BackgroundCanvas;