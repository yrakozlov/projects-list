/** @type {import('next').NextConfig} */
const {
  generateStaticParams,
} = require("next/dist/next-server/lib/router/utils/generate-static-routes");

const nextConfig = {
  async rewrites() {
    const routes = ["/index", "/about", "/contact"];

    const staticParams = await Promise.all(
      routes.map(async (route) => {
        const { page, query } = await generateStaticParams(`/${route}`);
        return { route, page, query };
      })
    );

    return staticParams.map(({ route, page, query }) => ({
      source: route,
      destination: page,
      query,
    }));
  },
};

module.exports = nextConfig;
