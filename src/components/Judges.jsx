import React from 'react'
import "./Judges.scss";
// import {Ishadi} from "../media/Images/Judges/Ishadi.png";

const Judges = () => {
    return (

        <div className="judges">
            <div className="mnjcardsall">
                <div className="card__collection clear-fix">
                    <div className="mnjcards mnjcards--two">
                        <img src="/Ishadi.jpeg"
                            className="img-responsive" alt="Isha di"></img>
                        <span className="mnjcards--two__rect">
                        </span>
                        <span className="mnjcards--two__tri"></span>
                        <p>Isha Ghiria</p>
                        <ul className="mnjcards__list">
                            {/* <li><img src="/Linkedin.svg" height="2vh"></img></li> */}
                        </ul>
                    </div>

                    <div className="mnjcards mnjcards--two">
                        <img src="/Twinkledi.jpeg"
                            className="img-responsive" alt="Cards Image"></img>
                        <span className="mnjcards--two__rect"></span>
                        <span className="mnjcards--two__tri"></span>
                        <p>Twinkle Bagdi</p>
                        <ul className="mnjcards__list">
                            {/* <li>hii<a href="www.google.com" target="_blank"><img className="linke" src="/Linkedin.svg"></img></a></li> */}

                        </ul>
                    </div>

                    <div className="mnjcards mnjcards--two">
                        <img src="/VaishnaviDi.jpeg"
                            className="img-responsive" alt="Cards Image"></img>
                        <span className="mnjcards--two__rect"></span>
                        <span className="mnjcards--two__tri"></span>
                        <p>Vaishnavi Desai</p>
                        <ul className="mnjcards__list">
                        </ul>
                    </div>
                </div>
            </div>
            <div className="model2">
                <model-viewer
                    // height="5000px"
                    className="model2"
                    src="/plush.glb"
                    // ios-src=""
                    // poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
                    // alt="A 3D model of an astronaut"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                ></model-viewer>
            </div>
        </div>
    )
}

export default Judges