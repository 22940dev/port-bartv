const cleanCss = require('clean-css')

module.exports = eleventyConfig => {
	eleventyConfig.setTemplateFormats(['md', 'html'])

	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addPassthroughCopy('fonts')
	eleventyConfig.addPassthroughCopy('*.png')
	eleventyConfig.addPassthroughCopy('favicon.ico')

	eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html')

	eleventyConfig.addFilter('cssmin', function(code) {
		return new cleanCss({}).minify(code).styles
	})

	eleventyConfig.addCollection('posts', function(collection) {
		return collection.getFilteredByGlob('blog/*.md').reverse()
	})
}
