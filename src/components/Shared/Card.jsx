import React, { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCheckCircle, FaClock, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdoptModal from "./AdoptModal";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Card = ({ pet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const browseLocation = useLocation();
  const isDisabled = browseLocation.pathname === "/wishlist";
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = userData?.token;

  const { id, breed, age, price, thumbnailUrl, location, status, name } = pet;

  const handleModalOpen = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      toast.error("Please Login to Adopt");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  const handleWishlist = (id) => {
    const data = { petId: id };

    if (user) {
      axios
        .post("https://petnest-np9s.onrender.com/api/favorites", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          toast.success("Added to Your Wishlist");
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1000);
        })
        .catch((error) => {
          console.error("wishlist error", error);
          toast.error("Wishlist request Failed!");
        });
    } else {
      toast.error("Please Login to Wish");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="card bg-base-100 border shadow-lg">
        <figure className="p-4">
          <img
            className="rounded-lg w-full h-56"
            src={thumbnailUrl}
            alt="Pet"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl">{name}</h2>
          <div>
            {/* Breed */}
            <p className="flex gap-2 items-center">
              <span className="text-lg font-semibold text-dark2 flex items-center justify-center gap-2">
                <TfiMenuAlt />
                Breed:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {breed}
              </span>
            </p>
            {/* Age */}
            <p className="flex gap-2 items-center">
              <span className="text-lg font-semibold text-dark2 flex items-center justify-center gap-2">
                <FaClock />
                Age:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {age} Year
              </span>
            </p>
            {/* Location */}
            <p className="flex gap-2 items-center">
              <span className="text-lg font-semibold text-dark2 flex items-center justify-center gap-2">
                <FaLocationDot />
                Location:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {location}
              </span>
            </p>
            {/* Status */}
            <p className="flex gap-2 items-center">
              <span
                className={`text-lg font-semibold text-dark2 flex items-center justify-center gap-2 `}
              >
                <FaCheckCircle />
                Status:
              </span>
              <span
                className={`text-lg text-dark2 flex items-center justify-center ${
                  status === "available" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </span>
            </p>
            {/* Price */}
            <p className="flex gap-2 items-center">
              <span className="text-lg text-dark2 font-semibold flex items-center justify-center gap-2">
                <BiSolidDollarCircle />
                Price:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {price}$
              </span>
            </p>
          </div>
          <hr className="my-4" />
          {/* buttons */}
          <div className="grid grid-cols-4 gap-5">
            <div
              className={`${!isDisabled ? "tooltip" : ""}`}
              data-tip="Add To Wishlist"
            >
              <button
                onClick={() => handleWishlist(id)}
                className={`btn rounded-lg text-lg text-primary bg-white border-secondary2 hover:text-red-600 ${
                  isDisabled ? "text-white" : ""
                }`}
                disabled={isDisabled}
              >
                <FaHeart />
              </button>
            </div>
            <div className=" col-span-3 grid grid-cols-2 gap-5">
              <button
                onClick={handleModalOpen}
                className="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:text-white hover:bg-primary"
              >
                Adopt
              </button>
              <Link to={`/details/${id}`}>
                <button className="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:bg-primary hover:text-white">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <AdoptModal setIsModalOpen={setIsModalOpen} id={id} />}
    </div>
  );
};

export default Card;
