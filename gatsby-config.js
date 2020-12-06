module.exports = {
  siteMetadata: {
    title: 'Goatnbike',
    author: 'Renate W Ravnaas',
    description: 'Goatnbike site, based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Goatnbike',
        short_name: 'goatnbike',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zysy44islyfs`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: `e5a7ac785052c6089044743d608d4f53567d3c84bfc90584335266392ac16b5a`,
      },
    },
  ],
}
