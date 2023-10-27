/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
        @import "./src/styles/scss/variables.scss";
        @import "./src/styles/scss/mixins.scss";
        @import "./src/styles/scss/extends.scss";
        `,
  },
};

module.exports = nextConfig;
