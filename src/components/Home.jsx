import React from 'react'
import "./Home.css";
import V from "../media/Images/V.svg";
import ball from "../media/Images/ball.png";



const Home = () => {
    return (
        <div class="home">
            <section>
                <img src={ball} alt="ball" id="ball1"></img>
                <img src={ball} alt="ball" id="ball2"></img>
                <img src={ball} alt="ball" id="ball3"></img>
                <img src={ball} alt="ball" id="ball4"></img>
                <img src={ball} alt="ball" id="ball5"></img>
                <img src={ball} alt="ball" id="ball6"></img>
                <img src={ball} alt="ball" id="ball7"></img>
                <img src={V} alt="Veriféria" id="text"></img>
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