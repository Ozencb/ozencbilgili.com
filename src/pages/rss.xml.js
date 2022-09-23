import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION, __DEV__ } from '../constants';

export const get = () => {
  const postImportResult = import.meta.glob('../posts/blog/**/*.md', {
    eager: true
  });
  const posts = Object.values(postImportResult).filter(
    (post) => !post.frontmatter.archived
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate
    }))
  });
};
