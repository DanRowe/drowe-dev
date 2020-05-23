// TODO project page
import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Development from "./development"

const ProjectsPage = () => (
  <Layout page="Projects">
    <SEO title="Projects" />
    {/* IDEA use cards to display projects and import last updated */}
    <Development />
  </Layout>
)

export default ProjectsPage