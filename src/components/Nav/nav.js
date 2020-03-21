import React from "react"
import Navbar from "./Navbar/navbar"
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default({children}) => (
    <Container>
      <Row>
        {/* active */}
        <Col className="ml-0"><Navbar /></Col>
        {/* page content */}
        <Col>{ children }</Col>
        {/* inactive */}
        <Col className="d-none d-md-block"><Navbar /></Col>
      </Row>
    </Container>
)