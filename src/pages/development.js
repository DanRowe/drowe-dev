import React from "react"

import SEO from "../components/seo"
import {Row, Col, Button, Jumbotron} from "react-bootstrap"
import { OutboundLink } from "gatsby-plugin-gtag"


const DevelopmentPage = () => (
  <Row className="h-100 align-items-center">
    <SEO title="Under Construction" />
    <Col className="m-auto">
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <Row
          xs="1"
          sm="2"
          className="align-items-center"
          style={{ textAlign: "left" }}
        >
          <Col className="m-auto">
            <h1 className="d-none d-sm-block">Nice to meet you</h1>
            <h2 className="d-sm-none">Nice to meet you</h2>
            <p>More amazing and exciting content to come.</p>
            <p>For now, take a look at my LinkedIn profile.</p>
          </Col>
          <Col>
            <Button
              as={OutboundLink}
              variant="primary"
              href="https://www.linkedin.com/in/danielrowe2/"
            >
              Daniel Rowe&rsquo;s LinkedIn Profile
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Col>
  </Row>
)

export default DevelopmentPage
