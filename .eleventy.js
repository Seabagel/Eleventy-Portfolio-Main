const eleventyPluginFilesMinifier  = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Set custom directories for input, output, includes, and data
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
      dataTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "liquid", "njk"],
    },
  };
};
