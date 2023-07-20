import ReactMarkdown from "react-markdown";
import Socials from "../../components/socials/socials";
import Head from "next/head";

export default function BlogDetailsPage({ posts }) {
  return (
    <>
      <Head>
        <meta name="description" content={posts?.attributes?.description} />
        <title>{`${posts?.attributes?.title} - U&U Designs`}</title>
      </Head>
      <div className="bd">
        <article className="article">
          <div className="post-header">
            <div className="header-content post-container">
              <h1 className="header-title">{posts?.attributes?.title}</h1>

              <img
                style={{ objectFit: "cover" }}
                src={posts.attributes.image.data[1].attributes.url}
                alt=""
                className="header-img"
              />
            </div>
          </div>

          <div className="post-content post-container">
            <p className="post-text">
              <ReactMarkdown>{posts.attributes.message}</ReactMarkdown>
            </p>
          </div>

          <footer className="footerf">
            <div className="social-links2">
              <Socials />
            </div>
            <span>Share this article</span>
          </footer>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // Fetch the blog post data using the slug
  const { slug } = params;
  const response = await fetch(
    `https://strapi-production-ccd8.up.railway.app/api/blogs?populate=*&filters\[Slug\][$eq]=${slug}`
  );
  const { data: posts } = await response.json();

  const blogPost = posts.find((post) => post.attributes.slug === slug);

  return {
    props: {
      posts: blogPost,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  // Fetch the slugs for all blog posts from API
  const response = await fetch("https://strapi-production-ccd8.up.railway.app/api/blogs?populate=*");
  const posts = await response.json();

  // Generate array of paths with the slugs
  const paths = posts.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return {
    paths,
    fallback: "blocking", // Set to true if there are additional dynamic routes
  };
}
