module.exports = {
  siteMetadata: {
    title: `Daniel Rowe Software Engineer`,
    siteUrl: `https://www.drowe.dev`,
    description: `Daniel Joseph Rowe Software Engineer`,
    author: `Daniel Rowe`,
    menuLinks:[
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Projects',
        link: '/projects'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/imgs/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-favicon`,
      //TODO update favicon image favicon.io
      options: {
        logo: `./static/favicon/favicon-512.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      }
    },
    {
      //TODO change metadata
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel-Rowe-Portfolio`,
        short_name: `DRowe`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/favicon/favicon-512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-166756795-1`,
        head: true,
        anonymize: false,
      },
    },
    // TODO gatsby offline
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
