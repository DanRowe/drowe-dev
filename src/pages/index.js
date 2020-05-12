import React from "react"
// TODO customize bootstrap to match what was used --> https://getbootstrap.com/docs/4.3/getting-started/theming/
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Headshot from "../components/headshot"

const IndexPage = () => (
  <Layout page="Home">
    <SEO title="Home" />
    <Container fluid>
      <Row xs="1" sm="1" md="2">
        {/* FIXME do we really need 3 of the same element for varying size? */}
        <Col className="d-none d-md-block" style={{maxHeight: "91vh"}}><Headshot></Headshot></Col>
        <Col className="d-none d-sm-block d-md-none" style={{maxHeight: "60vh"}}><Headshot></Headshot></Col>
        <Col className="d-sm-none" style={{maxHeight: "40vh"}}><Headshot></Headshot></Col>
        <Col className="d-flex align-items-center">
          <div>
            <h1>Hi I&rsquo;m Daniel!</h1>
            <p style={{textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur eleifend luctus. Vestibulum a felis pellentesque, aliquet mi ac, cursus enim. Nam aliquet erat quis hendrerit posuere. Cras id laoreet eros. Quisque nibh orci, dapibus sed vehicula at, volutpat nec leo. Curabitur blandit tincidunt tincidunt. Phasellus eget diam at ipsum mollis laoreet non vitae diam. Sed auctor, mi commodo malesuada mattis, metus arcu consectetur ante, sit amet fermentum urna metus eu dui. Donec consectetur ex id enim dignissim euismod. Ut vehicula mollis porta.
              Vivamus lacus arcu, imperdiet eget risus ac, ultrices dapibus augue. Sed felis dolor, egestas ac ante eget, viverra elementum erat. Aenean dolor dui, feugiat id metus sit amet, luctus mattis arcu. Sed tristique viverra tortor sed fringilla. Cras erat purus, auctor pharetra tellus ut, eleifend cursus lorem. Proin vitae feugiat felis. Phasellus laoreet id turpis vel placerat.
              Etiam posuere eros leo, id dignissim mi varius quis. Curabitur nisl nisl, semper sit amet semper in, aliquam ut mi. Maecenas pulvinar turpis sed purus porttitor placerat. Maecenas dictum lorem velit, in ultrices orci pretium ac. Pellentesque ipsum lectus, consequat eget ultricies nec, faucibus et ligula. Nullam fermentum volutpat arcu eget laoreet. Pellentesque tristique dolor dolor, lacinia aliquam magna accumsan at. Nam luctus mi non hendrerit mattis. Pellentesque ullamcorper tortor quis nunc convallis, non pulvinar erat elementum. Pellentesque pretium felis vitae massa elementum eleifend. Nulla auctor diam eget tortor ullamcorper, quis posuere est pharetra. Suspendisse vel risus feugiat, laoreet odio sit amet, varius elit. Donec accumsan nunc eu bibendum auctor.
              </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
