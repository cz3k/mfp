import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

async function generateFeed(config: SiteConfig, hostname: string) {
  const feed = new Feed({
    title: '🪴 Musik für Pflanzen',
    description: 'Experimentelle Kleingartenkonzerte in Dresden',
    id: hostname,
    link: hostname,
    language: 'de',
    image: `${hostname}/mfp.jpg`,
    favicon: `${hostname}/favicon.ico`,
    //copyright:
    //  'Copyright (c) 2022-present, '
  })

  const posts = await createContentLoader('src/*.md', {
    excerpt: true,
    render: true
  }).load()

  // Filter everything that's not of type `va` (e.g. index.md)
  const filteredPosts = posts.filter(post => post.frontmatter.type === 'va')
  
  filteredPosts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, frontmatter, html } of filteredPosts) {
    // Remove `/src` from URL
    const fullUrl = `${hostname}${url.replace(/^\/src/, '')}`

    // Strip `&ZeroWidthSpace;` from `html` string
    const content = html?.replace(/&ZeroWidthSpace;/g, '');

    feed.addItem({
      title: frontmatter.title,
      id: fullUrl,
      link: fullUrl,
      description: frontmatter.description,
      content: content,
      //author: [
      //  {
      //    name: '',
      //    email: '',
      //    link: ''
      //  }
      //],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}

export default generateFeed