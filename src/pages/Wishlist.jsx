import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/blogs")
      .then((res) => res.json())
      .then((result) => setUserOrder(result));
  }, [user?.email]);
  console.log(userOrder);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-orange-500">
        Read Wishlist
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        {userOrder.map((users) => (
          <div key={users._id}>
            <div className="card w-11/12 mx-auto bg-base-100 shadow-xl mt-10 my-5">
              <figure>
                <img
                  className="h-[300px] w-full"
                  src={users.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{users.category}</h2>
                <h2 className="card-title">{users.title}</h2>
                <p>{users.date}</p>
                <p>{users.short_description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm">Details</button>
                  <button className="btn btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
