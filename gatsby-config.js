module.exports = {
  siteMetadata: {
    title: `James and Sophie`,
    description: `We're getting married on 31st October 2020`,
    author: `@AndyMardell`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layouts/wrapper.js`)
      }
    },
    {
      resolve: `gatsby-plugin-stylus-resources`,
      options: {
        resources: [
          './src/css/config/*'
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `james-sophie-wedding`,
        short_name: `James & Sophie`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/js-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}
