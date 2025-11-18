import { section } from "motion/react-client"
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { use } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
import { Suspense } from "react";
import { Float } from "@react-three/drei";

const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 853});
    
    return (
        <section className="flex items-start justify-center md: items-start
        md: justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0" 
                style={{height: "100vh", width: "100vw"}}
            >
                <Canvas camera={{position: [0, 1, 3]}}>
                   
                   <Suspense fallback={<Loader />}>

                    <Float>
                     
                     <Astronaut scale={isMobile && 0.23} 
                      position={isMobile && [0, -1.5, 0]} />
                  
                   </Float>

                   </Suspense>
                   
                   
                    <Rig />

                </Canvas>
            
            </figure>
        
        </section>
    )
}

function Rig(){
    return useFrame((state, delta) => {
       easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
       ) ;
    });
}

export default Hero;