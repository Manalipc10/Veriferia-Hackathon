import React from 'react'
import "./About.css";
import { useEffect } from 'react';
import bg from "../media/Images/aboutbg.svg";
import robot from '../media/models/cutehomerobot/scene.gltf';

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
                {/* <script class="model" type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"> </script> */}
                {/* <img src={bg} ></img> */}
                <model-viewer src={robot} alt="robot" auto-rotate camera-controls height="20vh">HELLLOOOO</model-viewer>
                {/* <div className="abtcard">
                    Veriféria is a rookiethon conducted by IEEE UMIT. The main focus of this hackathon is to attract UMIT students who are just starting out their journey of technological development.
                </div> */}
            </div>
        </div>
    )
}
export default About
