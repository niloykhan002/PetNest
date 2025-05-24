import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Shared/Card";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData?.token;
    axios
      .get("https://petnest-np9s.onrender.com/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWishlist(res.data);
      })
      .catch((error) => {
        console.error("wishlist get error", error);
      });
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-center my-12 font-bold text-2xl lg:text-3xl">
        Pet You Wished For
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {wishlist.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
