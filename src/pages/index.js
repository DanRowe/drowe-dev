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
        <Col className="headshot-img"><Headshot></Headshot></Col>
        <Col className="d-flex align-items-center pl-4">
          <div>
            <h1 className="pt-1 text-primary">
              <small className="text-secondary">
                Hello, my name is 
              </small>
              <br />
              Daniel Rowe.
            </h1>
            <Card
              bg="light"
              border="primary"
              body
              style={{
                textAlign: "left", 
                borderRadius: "8px",
              }}
            > 
              I’m an <strong>aspiring software engineer</strong> based in College Park, Maryland 
              working on my bachelor’s in Computer Science. I create simple 
              solutions to solve complex problems and love doing it. Check 
              out my skills and experience on my <strong><Link to="/about">about page</Link></strong>. 
              See what I’ve worked on and my current <strong><Link to="/projects">projects</Link></strong>.
            </Card>
            <Link to="/contact">
              <Button variant="secondary" block className="mt-3 border-primary border" style={{backgroundColor: "#ececec"}}>
                Get In Touch
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
