import React from "react"
// TODO customize bootstrap to match what was used --> https://getbootstrap.com/docs/4.3/getting-started/theming/
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Headshot from "../components/headshot"
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout page="Home">
    <SEO title="Home" />
    <Container fluid className="h-100">
      <Row xs="1" md="2" className="h-100 align-items-center">
        {/* TODO replace image with wire drawing */}
        {/* FIXME do we really need 3 of the same element for varying size? */}
        <Col className="d-none d-md-block" style={{maxHeight: "91vh"}}><Headshot></Headshot></Col>
        <Col className="d-none d-sm-block d-md-none" style={{maxHeight: "60vh"}}><Headshot></Headshot></Col>
        <Col className="d-sm-none" style={{maxHeight: "40vh"}}><Headshot></Headshot></Col>
        {/* <Col style={{maxHeight: "auto"}}><Headshot></Headshot></Col> */}
        <Col className="d-flex align-items-center pl-4">
          <div>
            <h1>Hello, my name is Daniel Rowe.</h1>
            <Card
              bg="light"
              border="primary"
              body
              style={{textAlign: "left"}}
            > 
              I’m an <strong>aspiring software engineer</strong> based in College Park, Maryland 
              working on my bachelor’s in Computer Science. I create simple 
              solutions to solve complex problems and love doing it. Check 
              out my skills and experience on my <strong><Link to="/about">about page</Link></strong>. 
              See what I’ve worked on and my current <strong><Link to="/projects">projects</Link></strong>.
            </Card>
            <Link to="/contact"><Button className="mt-3">Get In Touch</Button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
