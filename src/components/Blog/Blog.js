import Link from "next/link";

const Blog = ({ limit, data }) => {
  const blogsToDisplay = limit ? data?.slice(0, limit) : data;

  return (
    <>
      <div className="container space-y-8 mx-auto">
        {data &&
          blogsToDisplay &&
          blogsToDisplay?.map((blog) => (
            <div
              className="blogItem border-2 border-gray-500 px-10 py-4 hover:shadow-lg transition-all space-y-2 rounded-xl w-2/4 mx-auto"
              key={blog?.id}
            >
              <Link href={""}>
                <h3>{blog?.title}</h3>
              </Link>
              <p className="line-clamp-1">{blog?.body}</p>
            </div>
          ))}
        {blogsToDisplay.length < data.length && (
          <div className="blogs-cta text-center text-xl text-gray-700 hover:text-black font-bold hover:underline transition">
            <Link href={"/blogs"}>Read More Blogs</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
