module.exports = {
  siteMetadata: {
    title: "Jesus & Renata",
    titleTemplate: "Nuestra Boda",
    description:
      "Sitio Web de nuestra Boda, Jesus & Renata",
    url: "https://renatajesus.gatsbyjs.io", // No trailing slash allowed!
    image: "./src/assets/images/hero-image.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js')],
      },
    },
  ],
}
