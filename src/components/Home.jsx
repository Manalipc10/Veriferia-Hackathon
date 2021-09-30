import React, { useEffect, useState } from 'react'
import "./Home.css";
import V from "../media/Images/V.svg";
import ball from "../media/Images/ball.png";

// function Home(){

// }

const Home = () => {
    const[offsetY, setOFFsetY] = useState(0);
    const handleScroll = () => setOFFsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return() => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="home">
            <section>
                <img src={ball} alt="ball" id="ball1"style={{transform: `translateY(${offsetY * 2}px)`}}></img>
                <img src={ball} alt="ball" id="ball2"style={{transform: `translateX(${offsetY * 2 }px)`}}></img>
                <img src={ball} alt="ball" id="ball3"style={{transform: `translateX(-${offsetY * 1}px)`}}></img>
                <img src={ball} alt="ball" id="ball4"style={{transform: `translateX(${offsetY * 0.5}px)`}}></img>
                <img src={ball} alt="ball" id="ball5"style={{transform: `translateY(${offsetY * 2}px)`}}></img>
                <img src={ball} alt="ball" id="ball6"style={{transform: `translateY(${offsetY * 3}px)`}}></img>
                <img src={ball} alt="ball" id="ball7"style={{transform: `translateY(${offsetY * 0.2}px)`}}></img>
                <img src={ball} alt="ball" id="ball4"style={{transform: `translateX(-${offsetY * 0.36}px)`}}></img>
                <img src={ball} alt="ball" id="ball5"style={{transform: `translateY(${offsetY * 5}px)`}}></img>
                <img src={ball} alt="ball" id="ball6"style={{transform: `translateY(${offsetY * 6}px)`}}></img>
                <img src={ball} alt="ball" id="ball7"style={{transform: `translateY(-${offsetY * 0.1}px)`}}></img>
                <img src={V} alt="Veriféria" id="text" style={{transform: `translateY(${offsetY * 0.75}px)`}}></img>
                {/* <script type="text/javascript">
                    let text = document.getElementById("text");
                    let ball1 = document.getElementById("ball1");
                    let ball2 = document.getElementById("ball2");
                    let ball3 = document.getElementById("ball3");
                    let ball4 = document.getElementById("ball4");
                    let ball5 = document.getElementById("ball5");
                    let ball6 = document.getElementById("ball6");
                    let ball7 = document.getElementById("ball7");

                    window.addEventListener('scroll', function val () {
                        value = this.window.scrollY; 
                        text.style.top = value * 0.75 +'px';
                        ball1.style.left = value * 2 +200+'px';
                        ball2.style.left = value * 3 +600 +'px';
                        ball3.style.left = -value * 2 + 500+'px';
                        ball4.style.top = value * 1.5 +'px';
                        ball5.style.top = value * 3 +'px';
                        ball6.style.left = -value * 1.2 +1000+'px';
                        ball7.style.top = value * 1.7 +'px';
                    }) */}

                    {/* window.addEventListener('scroll', (){ 
                        value = this.window.scrollY; 
                        text.style.top = value * 0.75 +'px';
                        ball1.style.left = value * 2 +200+'px';
                        ball2.style.left = value * 3 +600 +'px';
                        ball3.style.left = -value * 2 + 500+'px';
                        ball4.style.top = value * 1.5 +'px';
                        ball5.style.top = value * 3 +'px';
                        ball6.style.left = -value * 1.2 +1000+'px';
                        ball7.style.top = value * 1.7 +'px';}) */}


                {/* </script> */}

            </section>
        </div>

    )
}

export default Home