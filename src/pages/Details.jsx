import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h2>blog details page</h2>
    </div>
  );
};

export default Details;
