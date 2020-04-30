/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

// import "./layout.css"
import Footer from "../Footer/footer"
import Nav from "../Nav/nav"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default ({children, page}) => (
  <Container fluid>
    <Row>
      <Nav page={page}>
        {children}
      </Nav>
    </Row>
    <Row className="fixed-bottom">
      <Footer />
    </Row>
  </Container>
)
