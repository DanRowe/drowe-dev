import React from "react"

import SEO from "../components/seo"
import {Row, Col} from "react-bootstrap"
import styled from 'styled-components'

const myRow = styled.div`
    font-family: sans-serif;
    background-color: black;
`

const DevelopmentPage = () => (
    <myRow>
        <SEO title="Under Construction" />
        <Row>
            <Col>
                <h1>Nice to meet you</h1>
                <p>More amazing and exciting content to come.</p>
                <p>For now, take a look at my LinkedIn profile.</p>
            </Col>
            <Col>
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
            </Col>
        </Row>
    </myRow>
)

export default DevelopmentPage
