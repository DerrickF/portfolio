module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Simple date filter to format dates as YYYY-MM-DD
  eleventyConfig.addFilter("isoDate", function(dateObj) {
    if (!dateObj) return "UNKNOWN";
    if (typeof dateObj === "string") return dateObj;
    try {
      return dateObj.toISOString().split('T')[0];
    } catch(e) {
      return "UNKNOWN";
    }
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
