module.exports = {
  siteMetadata: {
    title: 'The Yolo Manifesto',
    siteUrl: 'https://yolomanifesto.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125100299-1'
      }
    }
  ]
}
