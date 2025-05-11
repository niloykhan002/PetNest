import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({ pet }) => {
  const {
    // petId,
    // breed,
    // category,
    // date_of_birth,
    // price,
    image,
    // gender,
    // pet_details,
    // vaccinated_status,
    pet_name,
  } = pet;

  return (
    <div>
      <div className="card bg-base-100 border shadow-lg">
        <figure className="p-4">
          <img className="rounded-lg w-full h-56" src={image} alt="Pet" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">{pet_name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <hr className="my-4" />
          <div class="grid grid-cols-4 gap-5">
            <button className="btn rounded-lg text-lg text-primary bg-white border-secondary2 hover:text-red-600">
              <FaHeart />
            </button>
            <div class="col-span-3 grid grid-cols-2 gap-5">
              <button class="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:text-white hover:bg-primary">
                Adopt
              </button>
              <button class="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:bg-primary hover:text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
