import React from 'react'
import "./About.css";
import {useEffect} from 'react';
import bg from "../media/Images/aboutbg.svg";

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
    return(
        <div className="about">
            <img src={bg} ></img>
            <div className="abtcard">
              Veriféria is a rookiethon conducted by IEEE UMIT.The main focus of this hackathon is to attract UMIT students who are just starting out their journey of technological development.
            </div>
        </div>
    )
}
export default About
