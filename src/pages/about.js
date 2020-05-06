// TODO about page
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout page="About">
    <SEO title="About" />
    <h1>Hi from the About page</h1>
    <p>Read about me</p>
  </Layout>
)

export default AboutPage