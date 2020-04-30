import React from "react"
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavColumn } from './nav-column'
import { StaticQuery, graphql } from "gatsby";

export default({children}) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Container fluid className="no-gutters">
      <Row>
        {/* active page and before */}
        <Col className="p-0 d-inline-flex">
          {data.site.siteMetadata.menuLinks.map(link => (
            <NavColumn>{link.name}</NavColumn>
          ))}
        </Col>
        {/* page content */}
        <Col xs={10} className="p-0">{ children }</Col>
        {/* page after active and beyond */}
        <Col className="p-0 d-none d-md-block">
          <Container className="no-gutters">
            <Row>
              <Col></Col>
              <Col xs={7}>
                <NavColumn>About</NavColumn>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    )}
  />
)