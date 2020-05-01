import React from "react"
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavColumn } from './nav-column'
import { StaticQuery, graphql, Link } from "gatsby";

export default({children, page}) => (
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
      <Container fluid className="no-gutters">
      <Row>
        {/* active page and before */}
        <Col className="p-0 d-inline-flex">
        {data.site.siteMetadata.menuLinks.slice(0,data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1).map(link => (
                <Link to={link.link} style={{textDecoration: 'none', color: 'black'}}><NavColumn>{link.name}</NavColumn></Link>
              ))}
        </Col>
        {/* page content */}
        <Col xs={10} className="p-0">{ children }</Col>
        {/* page after active and beyond */}
        <Col className="p-0 d-none d-lg-block">
          <Container className="no-gutters">
            <Row>
              <Col></Col>
              <Col xs={7} className="p-0 d-inline-flex">
              {data.site.siteMetadata.menuLinks.slice(data.site.siteMetadata.menuLinks.map(e => e.name).indexOf(page)+1,).map(link => (
                <Link to={link.link} style={{textDecoration: 'none', color: 'black'}}><NavColumn>{link.name}</NavColumn></Link>
              ))}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    )}
  />
)