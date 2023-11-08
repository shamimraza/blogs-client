import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const NewsLatter = () => {
  const { veri } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    veri(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank You For subscribe your newsletter",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-9/12 mx-auto h-[300px] bg-base-100 shadow-2xl my-4">
      <div className="">
        <h2 className="text-center text-3xl font-bold mt-8">
          Subscribe Our Newsletter
        </h2>
        <p className="text-center mt-5">
          Join our newsletter and be the first to know about new product <br />
          release, discounts and useful resources!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center mt-8 gap-3"
        >
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ..."
              className="input input-bordered"
              id=""
            />
          </div>
          <button className="btn btn-outline">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
