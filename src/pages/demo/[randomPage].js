import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { randomPage } = router?.query;
  return <h1>Welcome to {randomPage}!!</h1>;
};

export default Post;
