import React, { useEffect, useState } from "react";
import axios from "axios";
import WishCard from "../components/Shared/WishCard";
import toast from "react-hot-toast";

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

  const deleteWish = (id) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData?.token;
    axios
      .delete(`https://petnest-np9s.onrender.com/api/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Wish removed successfully");
        const remaining = wishlist.filter((wish) => wish.id !== id);
        setWishlist(remaining);
      })
      .catch((error) => {
        console.error("delete error", error);
      });
  };

  return (
    <div className="my-20">
      <h1 className="text-center my-12 font-bold text-2xl lg:text-3xl">
        Pet You Wished For
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {wishlist.map((pet) => (
          <WishCard
            key={pet.id}
            pet={pet}
            onDelete={() => deleteWish(pet.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
