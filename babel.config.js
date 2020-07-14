module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "transform-assets",
      {
        extensions: ["jpg", "jpeg", "png", "svg"],
        name: "[name].[ext]?[sha512:hash:base64:7]",
      },
    ],
    "inline-svg",
    [
      "module-resolver",
      {
        root: "./",
        alias: {
          src: "./src",
          components: "./src/components",
        },
      },
    ],
  ],
};
