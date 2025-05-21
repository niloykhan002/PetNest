import React, { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCalendar, FaHeart } from "react-icons/fa";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Card = ({ pet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { petId, breed, date_of_birth, price, image, gender, pet_name } = pet;

  const handleAdopt = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.petId = petId;
    console.log(data);
  };

  return (
    <div>
      <div className="card bg-base-100 border shadow-lg">
        <figure className="p-4">
          <img className="rounded-lg w-full h-56" src={image} alt="Pet" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl">{pet_name}</h2>
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
            {/* Birth */}
            <p className="flex gap-2 items-center">
              <span className="text-lg font-semibold text-dark2 flex items-center justify-center gap-2">
                <FaCalendar />
                Birth:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {date_of_birth}
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
          <div class="grid grid-cols-4 gap-5">
            <div className="tooltip" data-tip="Add To Wishlist">
              <button className="btn rounded-lg text-lg text-primary bg-white border-secondary2 hover:text-red-600">
                <FaHeart />
              </button>
            </div>
            <div class=" col-span-3 grid grid-cols-2 gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:text-white hover:bg-primary"
              >
                Adopt
              </button>
              <Link to={`/details/${petId}`}>
                <button className="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:bg-primary hover:text-white">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Adoption Form</h2>
            <div className="space-y-4 mt-4"></div>
            <form onSubmit={handleAdopt} className="space-y-4">
              <fieldset className="fieldset">
                <label className="label">Contact</label>
                <input
                  type="number"
                  name="contact"
                  className="input w-full"
                  placeholder="Number"
                />
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  placeholder="Address"
                />
              </fieldset>
              <div className="modal-action">
                <button type="submit" className="btn btn-success text-white">
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-error text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
