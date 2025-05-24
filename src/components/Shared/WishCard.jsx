import React, { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import AdoptModal from "./AdoptModal";

const WishCard = ({ pet, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    id,
    breed,
    age,
    price,
    thumbnailUrl,
    location,
    status,
    gender,
    name,
  } = pet;

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className=" border mx-2  rounded-lg shadow-sm">
        <div className="lg:flex bg-base-100 rounded-lg ">
          <figure className="p-5 lg:w-96 h-80">
            <img
              className="rounded-lg w-full h-full "
              src={thumbnailUrl}
              alt="Album"
            />
          </figure>
          <div className="card-body flex-1">
            <h2 className="text-xl font-bold">{name}</h2>
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
              {/* Gender */}
              <p className="flex gap-2 items-center">
                <span className="text-lg text-dark2 font-semibold flex items-center justify-center gap-2">
                  {gender === "Male" ? <IoMaleSharp /> : <IoFemaleSharp />}
                  Gender:
                </span>
                <span className="text-lg text-dark2 flex items-center justify-center">
                  {gender}
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
            {/* button */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn w-fit border-none font-bold text-lg text-white bg-primary hover:bg-secondary hover:text-dark2"
              >
                Adopt
              </button>

              <Link to={`/details/${id}`}>
                <button className="btn w-fit border-none font-bold text-lg text-white bg-primary hover:bg-secondary hover:text-dark2">
                  Details
                </button>
              </Link>
              <button
                onClick={onDelete}
                className="btn w-fit border-none font-bold text-lg text-white bg-red-600 hover:bg-secondary hover:text-dark2"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <AdoptModal setIsModalOpen={setIsModalOpen} id={id} />}
    </div>
  );
};

export default WishCard;
