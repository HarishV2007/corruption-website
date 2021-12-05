import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faGraduationCap, faHandHoldingHeart, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons'
const CounterUp = () => {
    return (
        <Container className="text-light text-center">
            <h2 className="my-5 fw-bolder">Updates Around the world​</h2>
            <Row xs={1} sm={1} md={3} className="justify-content-around gy-4">
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">1 </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Denmark - Corruption Free Country
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faHandHoldingHeart} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">1</Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Gujarat - Least Corruption State in India
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box ">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">
                                1
                            </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Maharashtra - No.1 Corruption State in India
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default CounterUp
