import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutPage = () => (
  <Layout page="About">
    <SEO title="About" />
    <Container fluid className="h-100">
      <Row xs="1" md="2" className="h-100">
        <Col md="4">
          {/* <Img alt="Circle image" /> */}
          <p>Circle image</p>
          <Link to="/about">Resume</Link>
          <h2>Skills</h2>
          <ul>
            <li>Skills are</li>
            <li>imported</li>
            <li>from API</li>
          </ul>
        </Col>
        <Col md="8">
          <h2>Work experience</h2>
          <h3>Most Recent Job</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
          <h3>Kinda Recent Job</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
          <h3>Not Recent Job</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage