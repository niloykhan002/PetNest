import { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Shared/Card";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    id,
    breed,
    age,
    price,
    gender,
    location,
    description,
    images,
    name,
    suggestedPets,
  } = data;

  const [image] = images;

  const handleAdopt = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.petId = id;
    console.log(data);
  };
  return (
    <div className="my-20 w-3/4 mx-auto">
      <div className=" border rounded-lg shadow-sm">
        <div className="lg:flex bg-base-100 rounded-lg ">
          <figure className="p-5 lg:w-96 h-80">
            <img
              className="rounded-lg w-full h-full "
              src={image}
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
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" p-3 shadow-sm w-fit my-12 font-bold text-3xl">
          You May Also Like
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {suggestedPets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))}
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

export default Details;
