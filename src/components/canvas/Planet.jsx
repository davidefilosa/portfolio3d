import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { easing } from "maath";

const Planet = ({ isMobile }) => {
  const planet = useGLTF("./lava_planet/scene.gltf");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-30, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={planet.scene}
        scale={isMobile ? 3 : 7}
        position={isMobile ? [-1, -1, -1] : [1, -1, 10]}
        rotation={[0, rotation, 0]}
      />
    </mesh>
  );
};

const PlanetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChanges = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChanges);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChanges);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [25, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PlanetCanvas;
