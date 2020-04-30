import React from "react"
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavColumn } from './nav-column'

export default({children}) => (
    <Container fluid className="no-gutters">
      <Row>
        {/* active */}
        <Col className="p-0">
          <NavColumn>Home</NavColumn>
        </Col>
        {/* page content */}
        <Col xs={10} className="p-0">{ children }</Col>
        {/* inactive */}
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
)