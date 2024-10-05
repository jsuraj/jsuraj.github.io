import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteConfig from "../data/site-config";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
    },
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
      customData: `<media:content
        type="image/${post.data.seo.image.src.split(".")[1] == "jpg" ? "jpeg" : "png"}"
        medium="image"
        url="${context.site + post.data.seo.image.src}" />
      `,
    })),
  });
}
