


/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
    // Set target to 'serverless' to enable serverless deployment
    target: "serverless",
    // Set assetPrefix to your GitHub pages URL if deploying to GitHub pages
    assetPrefix: "production",
    // Set webpack configuration to output a static site
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Add support for importing CSS files
        config.module.rules.push({
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        });
        // Disable server-side processing of dynamic imports
        config.resolve.fallback = {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          net: false,
          tls: false,
        };
      }
      // Disable server-side rendering
      config.plugins.push(new webpack.DefinePlugin({ "global.GENTLY": false }));
      return config;
    },
  
  output: "export",
  // images: { disableStaticImages: true}
}

module.exports = nextConfig
