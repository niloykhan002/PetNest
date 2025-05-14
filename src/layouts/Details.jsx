import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { petData } = useLoaderData();
  const {
    petId,
    breed,
    category,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    vaccinated_status,
    pet_name,
  } = petData;
  return (
    <div className="flex rounded-lg w-3/4 mx-auto border lg:card-side bg-base-100 shadow-sm">
      <figure className="p-5 w-96 h-80">
        <img className="rounded-lg " src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">{pet_name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default Details;
