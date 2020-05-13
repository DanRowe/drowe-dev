import React from "react"

import SEO from "../components/seo"
import {Row, Col, Container} from "react-bootstrap"


const DevelopmentPage = () => (
    <Row className="h-100">
        <SEO title="Under Construction" />
        <Col className="my-auto">
            <div>
                <h1 className="d-none d-sm-block">Nice to meet you</h1>
                <h2 className="d-sm-none">Nice to meet you</h2>
                <p>More amazing and exciting content to come.</p>
                <p>For now, take a look at my LinkedIn profile.</p>
            </div>
            <div>
                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
                <div 
                    class="LI-profile-badge"  
                    data-version="v1" 
                    data-size="large" 
                    data-locale="en_US" 
                    data-type="horizontal" 
                    data-theme="light" 
                    data-vanity="danielrowe2"
                    >
                    <a 
                        class="LI-simple-link" 
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
