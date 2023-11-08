import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const Register = () => {
  const [registerError, SetRegisterError] = useState("");
  const [susses, setSusses] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("image");
    const password = form.get("password");
    console.log(name, email, image, password);

    //reset error
    SetRegisterError("");
    setSusses("");

    if (password.length < 6) {
      SetRegisterError("password should be at 6 characters or longer");
      return;
    } else if (/^[^A-Z!@#$%^&*(),.?":{}|<>]*$/.test(password)) {
      SetRegisterError(
        "your password should have at least one capital letter and one special character"
      );
      return;
    }
    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setSusses("User sussesfully register");
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="md:w-3/4 lg:w-1/2 mt-28 rounded mx-auto shrink-0 shadow py-4 bg-[#FFF]">
      <h2 className="text-center font-medium text-3xl mb-10 mt-3">
        Register your account
      </h2>
      <div className="text-red-400 mt-4 w-10/12 mx-auto">
        <hr />
      </div>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter your Photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              {registerError && <p className="text-red-600">{registerError}</p>}
              {susses && <p className="text-red-600">{susses}</p>}
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-orange-300 ">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
