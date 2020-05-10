// TODO project page
import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Development from "./development"

const ProjectsPage = () => (
  <Layout page="Projects">
    <SEO title="Projects" />
    <Development />
  </Layout>
)

export default ProjectsPage