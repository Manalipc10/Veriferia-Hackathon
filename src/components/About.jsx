import React from 'react'
import "./About.css";
import { useEffect } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import bg from "../media/Images/aboutbg.svg";
// import ModelViewer from 'react-model-viewer';
// import robot from '../media/models/unicorn1/scene.gltf';
// const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
// const loader = new GLTFLoader();
// loader.load("../media/models/cutehomerobot/scene.gltf")
import "@google/model-viewer/dist/model-viewer";


const About = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },
        []);
    return (
        <div>

            <div className="about">
                <img src={bg} ></img>
                {/* <model-viewer src={modelPath} alt="robot" type="gltf" height="20vh"className="model">HELLLOOOO</model-viewer> */}
                {/* <model-viewer id="reveal" loading="eager" camera-controls auto-rotate poster="../../assets/poster-shishkebab.png" src={robot} alt="A 3D model of a shishkebab"></model-viewer> */}
                {/* <model-viewer src="shared-assets/models/Astronaut.glb" alt="A 3D model of an astronaut" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer> */}
                <div className="abtcard">
                    Veriféria is a rookiethon conducted by IEEE UMIT. The main focus of this hackathon is to attract UMIT students who are just starting out their journey of technological development.
                    <div className="apply-button"
                        data-hackathon-slug="veriferia"
                        data-button-theme="light"
                        style={{ height: 44 + 'px', width: 312 + 'px'}}>
                    </div>
                    {/* <div class="apply-button" 
	                data-hackathon-slug="veriferia" 
	                data-button-theme="light"
	            	style={{height: 44 + 'px', width: 312 + 'px'}}> */}
                </div>
                <div className="modelcover">
                    <model-viewer
                        // height="5000px"
                        className="model"
                        src="/robot.glb"
                        // ios-src=""
                        // poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
                        alt="A 3D model of an astronaut"
                        shadow-intensity="1"
                        camera-controls
                        auto-rotate
                    ></model-viewer>
                </div>
            </div>
        </div>
    )
}
export default About
