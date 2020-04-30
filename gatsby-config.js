module.exports = {
  siteMetadata: {
    title: `Daniel Rowe's Portfolio`,
    description: `Daniel Rowe's personal website to showcase his software engineering skills.`,
    author: `@drowe`,
    menuLinks:[
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
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
    // TODO gatsby offline
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
