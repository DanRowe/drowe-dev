// TODO about page
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Development from "./development"

const AboutPage = () => (
  <Layout page="About">
    <SEO title="About" />
    <Development />
  </Layout>
)

export default AboutPage