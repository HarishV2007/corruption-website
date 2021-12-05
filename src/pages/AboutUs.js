import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import ImageCarousel from '../components/ImageCarousel';
import * as data from "../data"

const AboutUs = () => {
    return (
        <>
            <Container fluid className="text-light my-5">
                <Row className="p-3 p-md-5 bg-warning">
                    <Col>
                        <h2 className="fw-bolder text-dark">About Us</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <ImageCarousel about={true} caption={true} images={data.aboutUsSlider.images} />
                    </Col>
                </Row>

                <Row className="mt-2 justify-content-around align-items-center ">
                    <Col sm={12} md={9}>
                        <Card bg="transparent" text={'white'}>
                            <Card.Body>
                                <Card.Text className="fs-4">
                                    As coalition-builders, we will work cooperatively with all individuals and groups, with for-profit and not-for-profit corporations and organisations, and with governments and international bodies committed to the fight against corruption, subject only to the policies and priorities set by our governing bodies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default AboutUs
