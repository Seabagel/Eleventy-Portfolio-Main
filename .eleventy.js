const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const wikiNavigations = require("./src/_data/wikiNavigations.json");
const eleventySass = require("eleventy-sass");

function srcBywikiNavigationsTag(tagName) {
  return wikiNavigations[
    wikiNavigations.findIndex((i) => (i.tag == tagName ? true : false))
  ];
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
    return srcBywikiNavigationsTag(tagName).title;
  });
  eleventyConfig.addFilter("findSlug", function (tagName) {
    return srcBywikiNavigationsTag(tagName).slug;
  });
  eleventyConfig.addFilter("bgImage", function (imgURL) {
    return `\"background-image:  url(\'${imgURL}\')\";`;
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
