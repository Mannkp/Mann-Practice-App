import { useRouter } from "next/router";

const Blogpost = () => {
  const router = useRouter();
  const item = router.query;

  return <div>{item?.blogItem}</div>;
};

export default Blogpost;
