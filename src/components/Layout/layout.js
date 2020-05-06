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
import Col from 'react-bootstrap/Col'
import { StaticQuery, graphql } from "gatsby";
import Row from 'react-bootstrap/Row'
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
        <Row>
          <Col 
            xs={Math.round(data.site.siteMetadata.menuLinks.slice(
              0,
              data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1
            ).length/2)}
            className="p-0 d-inline-flex"
          >
            <div className="position-absolute d-flex">
              <Nav 
                page={
                  data.site.siteMetadata.menuLinks.slice(
                    0,
                    data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1
                  )}
              />
            </div>
          </Col>
          <Col className="p-0">
            <ContentContainer>{children}</ContentContainer>
          </Col>
          <Col 
            xs={Math.round(data.site.siteMetadata.menuLinks.slice(
              data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1,
            ).length/2)}
            className="p-0 d-none d-lg-block"
          >
            <div className="position-absolute d-flex" style={{right: 0}}>
            <Nav 
              page={
                data.site.siteMetadata.menuLinks.slice(
                  data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1,
                )}
              />
            </div>
          </Col>
        </Row>
        <Row className="fixed-bottom">
          <Footer />
        </Row>
      </Container>
    )}
    />
)
