/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./layout.css"
import Footer from "./footer"
import Navbar from "./Navbar/navbar"

export default ({children}) => (
  <>
    {/* <div style={{maxHeight: `100vh`}}> */}
      <Navbar />
      {children}
      <Footer />
    {/* </div> */}
  </>
)
