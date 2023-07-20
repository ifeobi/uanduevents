import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage(props) {
  const { posts } = props;

  // Check if data is still loading
  if (!posts) {
    return <div>Loading...</div>;
  }

  const sortedData = posts.sort((a, b) => b.id - a.id);
 
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover unforgettable moments and seamless event planning on our blog. Get expert tips, inspiring ideas, and valuable insights to make your events truly extraordinary. Let's create cherished memories together."
        />
        <title>Blog - U&U Designs</title>
      </Head>
      <div className="container">
        {sortedData.map((post) => (
          <div className="card" key={post.attributes.slug}>
            <figure className="card__thumb">
              <img
                src={post.attributes.image.data[0].attributes.url}
                alt={post.attributes.title}
                className="card__image"
              />
              <figcaption className="card__caption">
                <h2 className="card__title">{post.attributes.title}</h2>
                <p className="card__snippet">{post.attributes.description}</p>
                <Link
                  href={`/blog/${post.attributes.slug}`}
                  className="card__button"
                >
                  Read more
                </Link>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const response = await fetch("https://strapi-production-ccd8.up.railway.app/api/blogs?populate=*");
  const data = await response.json();

  return {
    props: {
      posts: data.data,
    },
    revalidate: 600,
  };
}
