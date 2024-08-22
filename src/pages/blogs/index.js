import Blog from "@/components/Blog/Blog";

const Blogs = ({ data }) => {
  // const [blogData, setBlogData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setBlogData(data));

  //   return () => {
  //     blogData != "" && console.log("Data fetched successfully!");
  //   };
  // }, []);

  return (
    <>
      <div className="container space-y-8 mx-auto px-4 py-20">
        <h2 className="text-center pb-8">Blogs Page</h2>
        <Blog data={data} />
      </div>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data },
  };
}
