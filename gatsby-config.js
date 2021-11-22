module.exports = {
  siteMetadata: {
    description: "Personal page of Jayanth Vikash",
    locale: "en",
    title: "Jayanth Vikash",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "gh-inspired",
      },
    },
  ],
}