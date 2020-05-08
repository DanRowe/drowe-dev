/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

// import "./layout.css"
import Footer from "../Footer/footer"
import MyNav from "../Nav/nav"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'

import { StaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components'


const ContentContainer = styled.div`
  max-width: 1300px;
  padding: 1rem;
  margin: auto;
`

export default ({children, page}) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Container fluid>
        {/* Mobile navigation */}
        <Container className="d-lg-none" style={{padding: 30}}>
          <Navbar collapseOnSelect fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#home">Drowe.dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav activeKey="/home" justify>
              {data.site.siteMetadata.menuLinks.map(link => (
                <Nav.Item>
                  {/* TODO add social links */}
                  <Nav.Link >
                    <Link 
                      to={link.link} 
                      style={{textDecoration: 'none', color: 'black'}}
                      activeStyle={{fontWeight: "bold"}}
                      >
                      {link.name}
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar> 
        </Container>
        <Row>
          <Col 
            xs={Math.round(data.site.siteMetadata.menuLinks.slice(
              0,
              data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1
            ).length/2)}
            className="p-0 d-none d-lg-block"
          >
            <div className="position-absolute d-flex">
              <MyNav 
                page={
                  data.site.siteMetadata.menuLinks.slice(
                    0,
                    data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1
                  )}
              />
            </div>
          </Col>
          <Col>
            <ContentContainer>{children}</ContentContainer>
          </Col>
          <Col 
            xs={Math.round(data.site.siteMetadata.menuLinks.slice(
              data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1,
            ).length/2)}
            className="p-0 d-none d-lg-block"
          >
            <div className="position-absolute d-flex" style={{right: 0}}>
            <MyNav 
              page={
                data.site.siteMetadata.menuLinks.slice(
                  data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1,
                )}
              />
            </div>
          </Col>
        </Row>
        {/* TODO make page content respect the space of footer */}
        <Row className="fixed-bottom d-none d-md-block">
          <Footer />
        </Row>
      </Container>
    )}
    />
)
