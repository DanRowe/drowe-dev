import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Job = styled.div`
  @media (min-width: 768px) {
    padding-right: 3em;
    padding-left: 3em;
  }
  p {
    padding-bottom: 2em;
  }
`

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
        {/* TODO mobile view look better */}
        {/* FIXME sizing of sidebar */}
        <Row xs="1" md="2" className="h-100 m-auto">
          <Col md="2" className="pt-md-4">
            <div className="sidebar mb-3">
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
              <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                <li>Skills are</li>
                <li>imported</li>
                <li>from API</li>
              </ul>
            </div>
          </Col>
          <Col md="10" className="m-auto pt-md-4">
            <h1 className="mb-4">Work experience</h1>
            <Job>
              <h3>Most Recent Job</h3>
              <small className="text-muted">Start Date - End Date</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
            </Job>
            <Job>
              <h3>Kinda Recent Job</h3>
              <small className="text-muted">Start Date - End Date</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
            </Job>
            <Job>
              <h3>Not Recent Job</h3>
              <small className="text-muted">Start Date - End Date</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
            </Job>
            <Job>
              <h3>Overflow Job 1</h3>
              <small className="text-muted">Start Date - End Date</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
            </Job>
            <Job>
              <h3>Overflow Job 2</h3>
              <small className="text-muted">Start Date - End Date</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in turpis et dolor rhoncus viverra. Suspendisse justo orci, molestie a sem ac, tristique sollicitudin risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vehicula nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tortor a diam fringilla euismod eget volutpat ex. Cras vitae est aliquam, molestie orci sit amet, tincidunt enim. Quisque sed ante nec risus pulvinar mollis vitae non felis. </p>
            </Job>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage