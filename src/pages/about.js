import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FIXME replace with real portrait image
const indexQuery = graphql`
  query indexQuery {
    portrait: file(relativePath: { eq: "profile-placeholder.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = () => {
  const data = useStaticQuery(indexQuery)
  return (
    <Layout page="About">
      <SEO title="About" />
      <Container fluid className="h-100">
        <Row xs="1" md="2" className="h-100">
          <Col md="4">
            <Img 
              fluid={data.portrait.childImageSharp.fluid} 
              title="Daniel Rowe" 
              style={{
                "border-radius": "50%",
                "maxWidth": "200px",
                "margin": "auto"
              }}
            />
            <br />
            <h3><Link to="/about">Resume</Link></h3>
            <h3>Skills</h3>
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
}

export default AboutPage