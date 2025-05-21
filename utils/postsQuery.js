const POSTS_QUERY = `*[
  _type == "postCont" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  videoUrl,
  txtDescription,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
    categories[]->{
    _id,
    title
  },
  body,
  excerpt,
  "image": mainImage.asset->url,
}`;

const SANITY_QUERY = `*[_type == "postCont" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage {
    asset->{url},
    alt
  },
  body,
  excerpt,
  videoUrl,
  "image": mainImage.asset->url
}`;
const options = { next: { revalidate: 30 } };

export const queryData = {
  POSTS_QUERY,
  SANITY_QUERY,
  options
}