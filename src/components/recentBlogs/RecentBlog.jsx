import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import BlogCard from "../blogcard/BlogCard";

const RecentBlog = () => {
  const axios = useAxios();

  const getBlog = async () => {
    const res = await axios.get("/blogs");
    return res;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["blogs, date"],
    queryFn: getBlog,
  });
  console.log(data);
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center text-orange-500">
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.data?.map((item) => (
          <BlogCard key={item?._id} item={item}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
