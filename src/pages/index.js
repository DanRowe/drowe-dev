import React from "react"
// TODO customize bootstrap to match what was used --> https://getbootstrap.com/docs/4.3/getting-started/theming/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <p>Page content</p>
  </Layout>
)

export default IndexPage
