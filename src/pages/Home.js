import React from 'react'
import ImageCarousel from '../components/ImageCarousel';
import InfoPane from "../components/InfoPane"
import { Container, Row, Col } from 'react-bootstrap';
import CounterUp from '../components/CounterUp';
import AdmissionCTA from '../components/AdmissionCTA';
import OurMission from '../components/OurMission';
import TestimonialVol from '../components/TestimonialVol';

import * as data from "../data"
const Home = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <ImageCarousel caption={true} images={data.homeSlider.images} content={data.homeSlider.content} />
                    </Col>
                </Row>
                <InfoPane />
                <CounterUp />
                <AdmissionCTA />
                <OurMission />
                <TestimonialVol />
            </Container>
        </>
    )
}

export default Home
