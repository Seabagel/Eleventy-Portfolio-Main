const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const navigations = require("./src/_data/navigations.json");
const eleventySass = require("eleventy-sass");


function srcByNavigationsTag(tagName) {
  return navigations[navigations.findIndex((i) => (i.tag == tagName ? true : false))]
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPlugin(eleventySass);

  // https://daily-dev-tips.com/posts/creating-a-custom-eleventy-filter/
  // or, use a Universal filter (an alias for all of the above)

  eleventyConfig.addFilter("findTitle", function (tagName) {
    return srcByNavigationsTag(tagName).title;
  });
  eleventyConfig.addFilter("findSlug", function (tagName) {
    return srcByNavigationsTag(tagName).slug;
  });

  return {
    // Set custom directories for input, output, includes, and data
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
