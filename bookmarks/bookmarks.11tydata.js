module.exports = {
	layout: 'bookmark',
	permalink: '/bookmarks/{{ page.fileSlug | slug }}/index.html',
	eleventyComputed: {
		oembed: 'test'
	}
}
