const BlogCard = ({ item }) => {
  const { categories, image, title, short_description } = item;

  console.log(item);
  return (
    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="h-64 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{categories}</h2>
        <h2 className="card-title">{title}</h2>
        <p>{short_description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm">Details</button>
          <button className="btn btn-sm">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
