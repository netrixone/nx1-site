const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const postcsshex = require("postcss-hexrgba");
const postcssPlugins = [postcsshex, tailwindcss];

if (process.env.NODE_ENV === "production") {
  postcssPlugins.push(
    purgecss({
      whitelist: ["mode-dark"],
      whitelistPatterns: [/^dark/],
      content: ["./src/**/*.*"],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  );
  postcssPlugins.push(autoprefixer);
}

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), ...postcssPlugins]
};
