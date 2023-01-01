import { useRouter } from "next/router";

const DetailedNews = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

  return <h1>Detailed News</h1>;
};

export default DetailedNews;
