import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const BlogCard = ({ item }) => {
  const { user } = useContext(AuthContext);

  const { category, image, title, short_description } = item;
  //   console.log(item);
  const userEmail = user?.email;

  const handleAddTOCard = () => {
    const addToCard = {
      category,
      image,
      title,
      short_description,
      userEmail,
    };
    console.log(addToCard);
    fetch("http://localhost:5000/api/v1/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCard),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("yes paici");
        }
      });
  };

  return (
    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="h-64 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <h2 className="card-title">{title}</h2>
        <p>{short_description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm">Details</button>
          <button onClick={handleAddTOCard} className="btn btn-sm">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
