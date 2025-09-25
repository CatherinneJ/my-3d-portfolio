import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Macbook} from "./Macbook.jsx";
import {useMediaQuery} from "react-responsive";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas camera={{position: [0, 0, 15], fov: 45}}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <HeroLights />
            <Particles count={300}  />

            <group
            scale={isMobile ? 0.7 : 1}
            position={[0,-2, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            >
            <Macbook />
            </group>
        </Canvas>
    );
}

export default HeroExperience;