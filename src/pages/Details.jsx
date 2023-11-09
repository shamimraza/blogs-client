import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { categories, image, title, short_description, long_description } =
    details;
  console.log(details);
  return (
    <div>
      <h2 className="mt-10 text-3xl font-bold text-orange-500">
        blog details{" "}
      </h2>
      <div className="card w-11/12 lg:w-full mx-auto my-10 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[500px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name : {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="card-title">Title : {title}</p>
          <p className="card-title">Category: {categories}</p>
          <p>Short : {short_description}</p>
          <p>Description : {long_description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
