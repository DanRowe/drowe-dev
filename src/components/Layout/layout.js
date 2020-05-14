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
  height: calc(100vh - 2.2rem);
  text-align: center;
  // display: flex;
  // flex: 1;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
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
        <Container className="d-lg-none" style={{padding: "1.5rem"}}>
          <Navbar collapseOnSelect fixed="top" bg="light" expand="lg">
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
          <div className="position-relative d-none d-lg-flex">
            <MyNav 
              page={
                data.site.siteMetadata.menuLinks.slice(
                  0,
                  data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1
                )}
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
