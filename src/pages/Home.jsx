import Banner from "../components/baner/Banner";
import NewsLatter from "../components/newsLatter/NewsLatter";
import RecentBlog from "../components/recentBlogs/RecentBlog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentBlog></RecentBlog>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;
