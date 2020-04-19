module.exports = {
  siteMetadata: {
    title: `LessPass Blog`,
    name: `LessPass`,
    siteUrl: `https://blog.lesspass.com`,
    description: `LessPass blog`,
    hero: {
      heading: `LessPass blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/guillaume20100`,
      },
      {
        name: `github`,
        url: `https://github.com/lesspass/lesspass`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LessPass Blog`,
        short_name: `LessPass`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
