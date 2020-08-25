module.exports = {
  siteMetadata: {
    title: 'James & Sophie',
    description: "We're getting married on 30th October 2021",
    author: '@AndyMardell',
  },
  plugins: [
    'gatsby-plugin-polyfill-io',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/wrapper.js'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Playfair Display',
          },
          {
            family: 'Open Sans',
            variants: ['400', '400i', '600', '600i'],
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "James & Sophie's Wedding",
        short_name: 'James & Sophie',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'standalone',
        icon: 'src/images/js-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-153118645-1',
      },
    },
    'gatsby-plugin-offline',
  ],
}
