module.exports = {
  poweredByHeader: false,
  pageExtensions: ["page.tsx"],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/_auth/:path*",
          destination: "/api/_auth/:path*",
          locale: false,
        },
      ],
    };
  },
};
