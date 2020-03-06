/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./layout.css"
import Footer from "../Footer/footer"
import Nav from "../Nav/nav"

export default ({children}) => (
  <>
      <Nav>
        {children}
      </Nav>
      <Footer />
  </>
)
