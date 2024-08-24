const FullBlog = ({ blog }) => {
  return (
    <>
      {blog && (
        <div className={`blog-${blog.id}`}>
          <h2>{blog?.title}</h2>
          <p>{blog?.body}</p>
        </div>
      )}
    </>
  );
};

export default FullBlog;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({ params: { id: blog.id.toString() } }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
}

export async function getStaticProps({ params }) {
  console.log("kk", params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const blog = await res.json();
  return { props: { blog } };
}
