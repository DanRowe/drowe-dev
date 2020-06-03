/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./layout.css"
import Footer from "../Footer/footer"
import MyNav from "../Nav/nav"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Fade from 'react-bootstrap/Fade'

import { StaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components'
import Helmet from "react-helmet"

const ContentContainer = styled.div`
  max-width: 1300px;
  padding: 1rem;
  margin: auto;
  text-align: center;
  // display: flex;
  // flex: 1;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 2.2rem);
  }
  @media (max-width: 992px) {
    margin-top: 84.75px;
  }
  @media (max-width: 768px) {
    max-height: 100vh;
  }
  @media (min-width: 768px) {
    .sidebar {
      position: fixed;
    }
  }
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
      <>
      <Helmet>
        <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css" rel="stylesheet" integrity="sha384-oOs/gFavzADqv3i5nCM+9CzXe3e5vXLXZ5LZ7PplpsWpTCufB7kqkTlC9FtZ5nJo" crossorigin="anonymous"></link>  
      </Helmet>
      <Container fluid>
          {/* Mobile navigation */}
          <Navbar collapseOnSelect fixed="top" bg="primary" variant="dark" expand="lg" className="d-lg-none">
            <Link to="/"><Navbar.Brand>Drowe.dev</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav justify>
              {data.site.siteMetadata.menuLinks.map(link => (
                <Nav.Item key={link.name}>
                  {/* TODO add social links */}
                  <Nav.Link >
                    <Link 
                      to={link.link} 
                      style={{textDecoration: 'none', color: 'white'}}
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
          <Row>
          <div className="position-relative d-none d-lg-flex">
            <MyNav 
              page={
                data.site.siteMetadata.menuLinks.slice(
                  0,
                  data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1
                )}
              location={page}
            />
          </div>
          <Col className="p-0 bg-light" style={{borderStyle: "none"}}>
            <Fade appear="true" in="true"><ContentContainer>{children}</ContentContainer></Fade>
          </Col>
          <div className="position-relative d-none d-lg-flex" style={{right: 0}}>
            <MyNav 
              page={
                data.site.siteMetadata.menuLinks.slice(
                  data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1,
                )}
              location={page}
              />
          </div>
        </Row>
      </Container>
        <div className="fixed-bottom d-none d-md-block">
          <Footer />
        </div>
      </>
    )}
    />
)
