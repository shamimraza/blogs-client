import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const { _id, categories, image, title, short_description, long_description } =
    blog;
  console.log(blog);
  return (
    <div>
      <div className="card w-96  w-11/12 lg:w-full mx-auto mt-10 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-72" src={image} alt="Shoes" />
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
          <div className="card-actions justify-end">
            <Link to="/addBlog">
              <button className="btn btn-sm">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
