module.exports = {
  siteMetadata: {
    title: `Antonina Gliwinska`,
    description: `Jestem doświadczoną masażystką z 14 letnim stażem pracy. Prowadzę
		prywatny gabinet od 2008 roku. Pracowałam w renomowanych hotelach
		spa takich jak Malinowy Zdrój Hotel Medical Spa w Solcu Zdroju czy
		Bristol Art & Medical Spa w Busko-Zdroju. Jestem właśnie tym
		przypadkiem kiedy praca jest pasją, a pomoc innym daje mi
		satysfakcję.`,
    author: `@szewczukk`,
  },
  pathPrefix: "antoninagliwinska.pl",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonina Gliwińska`,
        short_name: `Antonina Gliwińska`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              quality: 100,
            },
          },
          "gatsby-remark-normalize-paths",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-147438970-2",
        head: false,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
