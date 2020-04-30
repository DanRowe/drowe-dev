// TODO about page
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout page="about">
    <SEO title="About Page" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default AboutPage