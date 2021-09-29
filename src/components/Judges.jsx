import React from 'react'
import "./Judges.scss";

const Judges = () => {
    return (

        <div className="judges">
            <div className="mnjcardsall">
                <div className="card__collection clear-fix">
                    <div className="mnjcards mnjcards--two">
                        <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
                            className="img-responsive" alt="Cards Image"></img>
                        <span className="mnjcards--two__rect">
                        </span>
                        <span className="mnjcards--two__tri"></span>
                        <p>Lucy Grace</p>
                        <ul className="mnjcards__list">
                            <li></li>
                        </ul>
                    </div>

                    <div className="mnjcards mnjcards--two">
                        <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
                            className="img-responsive" alt="Cards Image"></img>
                        <span className="mnjcards--two__rect"></span>
                        <span className="mnjcards--two__tri"></span>
                        <p>Lucy Grace</p>
                        <ul className="mnjcards__list">
                            <li>hello</li>

                        </ul>
                    </div>

                    <div className="mnjcards mnjcards--two">
                        <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
                            className="img-responsive" alt="Cards Image"></img>
                        <span className="mnjcards--two__rect"></span>
                        <span className="mnjcards--two__tri"></span>
                        <p>Lucy Grace</p>
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