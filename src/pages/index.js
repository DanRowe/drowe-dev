import React from "react"
// TODO customize bootstrap to match what was used --> https://getbootstrap.com/docs/4.3/getting-started/theming/
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Headshot from "../components/headshot"

const IndexPage = () => (
  <Layout page="Home">
    <SEO title="Home" />
    <Container fluid className="h-100">
      <Row xs="1" md="2" className="h-100 align-items-center">
        {/* FIXME do we really need 3 of the same element for varying size? */}
        <Col className="d-none d-md-block" style={{maxHeight: "91vh"}}><Headshot></Headshot></Col>
        <Col className="d-none d-sm-block d-md-none" style={{maxHeight: "60vh"}}><Headshot></Headshot></Col>
        <Col className="d-sm-none" style={{maxHeight: "40vh"}}><Headshot></Headshot></Col>
        <Col className="d-flex align-items-center">
          <div>
            <h1>Hi I&rsquo;m Daniel!</h1>
            <p style={{textAlign: "left"}}>
              This is where I will eventually write a nice paragraph of text 
              about myself. It will explain my intetests, why someone should 
              hire me, who I am, etc. This is a realistic amount of space 
              that the text blurb will take up. Before, my example was 
              far too long to be considered a realistic size. Now I can 
              properly style my page to match the amount of space that 
              this will take up.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
