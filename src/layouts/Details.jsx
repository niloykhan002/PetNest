import { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Shared/Card";
import AdoptModal from "../components/Shared/AdoptModal";

const Details = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const data = useLoaderData();
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

  return (
    <div className="my-20 lg:w-3/4 mx-auto">
      <div className=" border mx-2  rounded-lg shadow-sm">
        <div className="md:flex bg-base-100 rounded-lg ">
          <figure className="p-5 md:w-80 lg:w-96 h-80">
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
              className="btn btn-sm w-fit mt-4 border-none font-bold text-lg text-white bg-primary hover:bg-secondary hover:text-dark2"
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
      <div className="flex mx-2 flex-col items-center justify-center">
        <h1 className=" p-3 shadow-sm w-fit my-12 font-bold text-2xl lg:text-3xl">
          You May Also Like
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {suggestedPets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <AdoptModal setIsModalOpen={setIsModalOpen} id={id} />}
    </div>
  );
};

export default Details;
