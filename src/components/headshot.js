import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      headshotImage: file(relativePath: { eq: "headshot.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img 
      fluid={data.headshotImage.childImageSharp.fluid} 
      fadeIn 
      alt="Daniel Rowe Headshot"
      style={{maxHeight: "100%", position: "static"}}
    />
}

export default Headshot
