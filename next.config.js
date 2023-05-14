/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      // ... add more pages here as needed
    };
  },

  output: {
    export: "/path/to/export/directory",
  },
};

module.exports = nextConfig;
