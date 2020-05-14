// TODO contact page
import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Development from "./development"

const ContactPage = () => (
  <Layout page="Contact">
    <SEO title="Contact" />
    <Development />
  </Layout>
)

export default ContactPage