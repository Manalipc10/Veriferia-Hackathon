import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import './Sponsors.css'
import sponsor1 from '../media/Images/Devfolio.png';
import sponsor2 from '../media/Images/Polygon.png';

const Sponsor = ({ mode }) => {
  return (
    <div class='sponsors' id="sponsor" data-theme={mode ? "dark" : "light"}>
      <br /> <br />
      <Container align='center'>
        <br></br>
        <h2 className='sponsor'>Sponsors</h2>
        <br></br>
        <div>
            <Row className='cardrow1'>
                <Col lg={6}>
                    <Card className="sponsor-card sponsor-card-view">
                        <Card.Img variant="top" src={sponsor1} />
                            <Card.Body>
                                 <br></br>
                                     <Card.Title className="sponsors-title">Devfolio</Card.Title>
                                     <Card.Text className="sponsors-title">Diamond Sponsor</Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
           
                <Col lg={6}>
                    <Card className="sponsor-card sponsor-card-view">
                        <Card.Img variant="top" src={sponsor2} />
                            <Card.Body>
                            <br></br>
                                <Card.Title className="sponsors-title">Polygon</Card.Title>
                                <Card.Text className="sponsors-title">Platinum Sponsor</Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
      </Container>
    </div>
  )
}

export default Sponsor
