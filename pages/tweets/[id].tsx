import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";


const TweetDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );

  return (
    <div className="flex flex-col">
      <h1>Title</h1>
      <span>{data?.tweet.title}</span>
      <h1>Contents</h1>
      <span>{data?.tweet.contents}</span>
      <h1>User</h1>
      <span>{data?.tweet?.user?.email}</span>
      <Link href={"/"}>
        <button className="bg-blue-300 w-24 mt-8">Home</button>
      </Link>
    </div>
  );
};

export default TweetDetail;
