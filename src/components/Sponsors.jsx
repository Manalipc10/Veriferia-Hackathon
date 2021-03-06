import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import './Sponsors.css'
import sponsor1 from '../media/Images/Postman.svg';
import sponsor2 from '../media/Images/Devfolio.png';
import sponsor3 from '../media/Images/Tezos.png';
import sponsor4 from '../media/Images/Celo.png';
import sponsor5 from '../media/Images/Filecoin.png';
import sponsor6 from '../media/Images/Polygon.png';
import bg from "../media/Images/aboutbg.svg";


const Sponsor = ({ mode }) => {
    return (
        <div className='sponsors' id="sponsor" data-theme={mode ? "dark" : "light"}>
             <img className="bgmen2" src={bg} alt="WAVE"></img>
            <br /> <br />
            <Container align='center'>
                <br></br>
                <h1 className='sponsor'>Sponsors</h1>
                <br></br>
                <h2 className="diamond">Diamond Sponsors</h2>
                <br></br>
                <div>
                    <Row className='cardrow1'>
                        <Col lg={6}>
                            <a href="https://www.postman.com/" target="_blank">
                                <Card className="diamond-card diamond-card-view">
                                    <Card.Img variant="top" src={sponsor1} style={{height:`103px`, width:`498px`}} />
                                    <Card.Body>
                                        <br></br>
                                        <Card.Title className="sponsors-title">Postman</Card.Title>
                                        <Card.Text className="sponsors-title">Diamond Sponsor</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col lg={6}>
                            <a href="https://devfolio.co" target="_blank">
                                <Card className="diamond-card diamond-card-view">

                                    <Card.Img variant="top" src={sponsor2} />
                                    <Card.Body>
                                        <br></br>
                                        <Card.Title className="sponsors-title">Devfolio</Card.Title>
                                        <Card.Text className="sponsors-title">Diamond Sponsor</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <br></br>
                    <h2 className="platinum">Platinum Sponsors</h2>
                    <br></br>

                    <Row>
                        <Col lg={3}>
                            <a href="https://tezos.com/" target="_blank">
                                <Card className="sponsor-card sponsor-card-view">
                                    <Card.Img variant="top" src={sponsor3} />
                                    <Card.Body>
                                        <br></br>
                                        <Card.Title className="sponsors-title">Tezos</Card.Title>
                                        <Card.Text className="sponsors-title">Platinum Sponsor</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col lg={3}>
                            <a href="https://celo.org/" target="_blank">
                                <Card className="sponsor-card sponsor-card-view">
                                    <Card.Img variant="top" src={sponsor4} />
                                    <Card.Body>
                                        <br></br>
                                        <Card.Title className="sponsors-title">Celo</Card.Title>
                                        <Card.Text className="sponsors-title">Platinum Sponsor</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col lg={3}>
                            <a href="https://filecoin.io/" target="_blank">
                                <Card className="sponsor-card sponsor-card-view">
                                    <Card.Img variant="top" src={sponsor5} />
                                    <Card.Body>
                                        <br></br>
                                        <Card.Title className="sponsors-title">Filecoin</Card.Title>
                                        <Card.Text className="sponsors-title">Platinum Sponsor</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col lg={3}>
                            <a href="https://polygon.technology/" target="_blank">
                                <Card className="sponsor-card sponsor-card-view">
                                    <Card.Img variant="top" src={sponsor6} />
                                    <Card.Body>
                                        <br></br>
                                        <Card.Title className="sponsors-title">Polygon</Card.Title>
                                        <Card.Text className="sponsors-title">Platinum Sponsor</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>



                    </Row>

                </div>
            </Container>
        </div>
    )
}

export default Sponsor
