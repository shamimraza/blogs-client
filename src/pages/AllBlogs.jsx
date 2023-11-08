import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { capitalizeWords } from "../components/utilites/Capabilites";
import CategoryCard from "../components/categoryCard/CategoryCard";

const categoryName = [
  "Travel",
  "Programming",
  "Health",
  "Science",
  "Art",
  "Technology",
];
const AllBlogs = () => {
  const [categories, setCategories] = useState();
  console.log(categories);
  const [date, setDate] = useState();
  console.log(date);
  const axios = useAxios();

  const getCategories = async () => {
    const res = await axios.get("/category");
    return res;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["category, date"],
    queryFn: getCategories,
  });
  console.log(data);
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold mt-10">Blogs</h2>
        <p className="text-center mt-3">
          Our blog takes the message from the weekend <br /> and lays out next
          right steps, so you can hear a message and do a message in practical
          ways.
        </p>
        <div className="flex justify-end items-center border-2 border-primary rounded-2xl p-5 gap-5 my-10">
          <h1 className="flex-1 text-xl font-semibold">
            Choose Blogs Category
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="input input-bordered"
              onChange={(e) => setCategories(e.target.value)}
            >
              <option disabled selected>
                Choose One
              </option>
              {categoryName.map((item) => (
                <option key={item} value={item}>
                  {capitalizeWords.item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">date</span>
            </label>
            <select
              className="input input-bordered"
              onChange={(e) => setDate(e.target.value)}
            >
              <option disabled selected>
                Choose One
              </option>
              <option value="asc">From low To high</option>
              <option value="desc">From high To low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data?.data?.map((item) => (
            <CategoryCard key={item?._id} item={item}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
