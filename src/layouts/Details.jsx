import { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { petData } = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    petId,
    breed,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    pet_name,
  } = petData;

  const handleAdopt = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.petId = petId;
    console.log(data);
  };
  return (
    <div className="my-20 w-3/4 mx-auto border rounded-lg shadow-sm">
      <div className="lg:flex bg-base-100 rounded-lg ">
        <figure className="p-5 lg:w-96 h-80">
          <img className="rounded-lg w-full h-full " src={image} alt="Album" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="text-xl font-bold">{pet_name}</h2>
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
          {/* button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn w-fit mt-4 border-none font-bold text-lg text-white bg-primary hover:bg-secondary hover:text-dark2"
          >
            Adopt
          </button>
        </div>
      </div>
      <hr className="w-4/5 mx-auto" />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-3">Details Information</h3>
        <p>{pet_details}</p>
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

export default Details;
