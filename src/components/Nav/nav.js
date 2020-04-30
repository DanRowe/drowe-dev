import React from "react"
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavColumn } from './nav-column'

export default({children}) => (
    <Container className="no-gutters">
      <Row className="no-gutters">
        {/* active */}
        <Col>
          <NavColumn>Home</NavColumn>
        </Col>
        {/* page content */}
        <Col xs={10}>{ children }</Col>
        {/* inactive */}
        <Col>
          <NavColumn>About</NavColumn>
        </Col>
      </Row>
    </Container>
)