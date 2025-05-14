import cat from "../../assets/category/cat.png";
import dog from "../../assets/category/dog.png";
import rabbit from "../../assets/category/rabbit.png";
import bird from "../../assets/category/bird.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Shared/Card";

const Category = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => setPets(res.data.pets))
      .catch((error) => console.log(`Fetch Error: ${error}`));
  }, []);
  return (
    <section id="category" className="mt-20 mx-2">
      <h1 className="text-5xl font-extrabold text-dark1 text-center">
        Adopt Your Best Friend
      </h1>
      <p className="text-center text-dark2 py-6">
        It is a long established fact that a reader will be distracted by the
        readable content of a <br />
        page when looking at its layout. The point of using Lorem Ipsum is that
        it has a.
      </p>
      {/* categories button  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex gap-2 items-center justify-center py-5 border rounded-lg text-dark1 hover:bg-secondary hover:text-dark2">
          <img className="w-10" src={cat} alt="" />
          <h3 className="text-2xl font-bold">Cat</h3>
        </div>
        <div className="flex gap-2 items-center justify-center py-5 border rounded-lg text-dark1 hover:bg-secondary hover:text-dark2">
          <img className="w-10" src={dog} alt="" />
          <h3 className="text-2xl font-bold">Dog</h3>
        </div>
        <div className="flex gap-2 items-center justify-center py-5 border rounded-lg text-dark1 hover:bg-secondary hover:text-dark2">
          <img className="w-10" src={rabbit} alt="" />
          <h3 className="text-2xl font-bold">Rabbit</h3>
        </div>
        <div className="flex gap-2 items-center justify-center py-5 border rounded-lg text-dark1 hover:bg-secondary hover:text-dark2">
          <img className="w-10" src={bird} alt="" />
          <h3 className="text-2xl font-bold">Bird</h3>
        </div>
      </div>
      <div className="flex justify-between my-11">
        <h3 className="font-extrabold text-xl text-dark1">Best Deal For you</h3>
        <button className="btn border-none text-white bg-primary hover:bg-secondary hover:text-dark2 lg:w-40">
          Sort by Price
        </button>
      </div>
      {/*  All pets  */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
        {pets.map((pet) => (
          <Card pet={pet} />
        ))}
      </div>
    </section>
  );
};

export default Category;
