import React from "react"

import SEO from "../components/seo"
import {Row, Col, Container, Card} from "react-bootstrap"


const DevelopmentPage = () => (
    <Row className="h-100 align-items-center">
        <SEO title="Under Construction" />
        <Col className="m-auto">
            <Card
                bg="light"
                style={{width: '30rem', margin: "auto"}}
            >
                <Card.Body>
                    <Card.Title>Nice to meet you</Card.Title>
                    <Card.Text>
                        More amazing and exciting content to come.
                    </Card.Text>
                    <Card.Text>
                        For now, take a look at my LinkedIn profile.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <div>
                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
                <div 
                    className="LI-profile-badge"  
                    data-version="v1" 
                    data-size="large" 
                    data-locale="en_US" 
                    data-type="horizontal" 
                    data-theme="light" 
                    data-vanity="danielrowe2"
                    >
                    <a 
                        className="LI-simple-link" 
                        href='https://www.linkedin.com/in/danielrowe2?trk=profile-badge'
                        >
                        Daniel Rowe's LinkedIn Profile
                    </a>
                </div>
            </div>
        </Col>
    </Row>
)

export default DevelopmentPage
