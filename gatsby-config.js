module.exports = {
  siteMetadata: {
    description: "Personal page of Jayanth Vikash",
    locale: "en",
    title: "Jayanth Vikash",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  pathPrefix: "/JayanthVikashS.github.io",
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
    {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Defaults used for gatsbyImageData and StaticImage
      defaults: {},
      // Set to false to allow builds to continue on image errors
      failOnError: true,
      // deprecated options and their defaults:
      base64Width: 20,
      forceBase64Format: ``, // valid formats: png,jpg,webp
      useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      stripMetadata: true,
      defaultQuality: 50,
      },
    },
  ],
}
