import Swal from "sweetalert2";

const AddBlog = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    console.log(name, category, image, short_description, long_description);

    const newBlog = {
      name,
      category,
      image,
      short_description,
      long_description,
    };
    console.log(newBlog);
    fetch("https://my-blogs-server.vercel.app/api/v1", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Blog added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Add Blog Items
      </h2>
      <form onSubmit={handleSubmit}>
        {/* form row 1*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 2*/}

        <div className=" mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <label className="input-group">
              <input
                name="image"
                type="text"
                placeholder="Enter Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form row 3*/}
        <div className=" mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                name="short_description"
                type="text"
                placeholder="Enter Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 4*/}
        <div className=" mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Long Description</span>
            </label>
            <label className="input-group">
              <input
                name="long_description"
                type="text"
                placeholder="Enter Long Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-gray-200 btn btn-block"
        />
      </form>
    </div>
  );
};

export default AddBlog;
