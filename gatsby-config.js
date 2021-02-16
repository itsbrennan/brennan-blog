module.exports = {
  siteMetadata: {
    title: `Brennan Matthew Portfolio`,
    name: `Brennan Matthew Martin Portfolio`,
    siteUrl: `https://brennanmatthew.com`,
    description: `Hello, I'm Brennan Martin! I'm a UX Lead and founder who loves playing in gray space of life and making sense of it.  `,
    hero: {
      heading: `Hi, I'm Brennan. I make meaningful experiences through <span style="color:#536DFE;font-weight:bold;">user resarch 🧐</span>, <span style="color:#536DFE;font-weight:bold;">co-creation 🥁</span> and <span style="color:#536DFE;font-weight:bold;">data-driven designs ✨</span.>`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/itsbrennan`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/itsbrennan`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/itsbrennan`,
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
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "UA-118232427-3",
      },
    },
  ],
};
