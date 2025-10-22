import { Canvas } from "@react-three/fiber";
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {useEffect} from "react";
import * as THREE from "three";

const TechIcon = ({ model }) => {
    const { scene } = useGLTF(model.modelPath, true, true);

    useEffect(() => {
        if (!scene || !scene.scene) return;
        
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === "Object_5") { 
                    child.material = new THREE.MeshStandardMaterial({ color: "purple" });                   
                }
            });
        }
    }, [scene]);

    if (!scene || !scene.scene || typeof window === 'undefined') {
    return <div className="text-white text-center">3D model loading or not supported</div>;
  }

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Environment preset="city" />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    );
};

export default TechIcon;
