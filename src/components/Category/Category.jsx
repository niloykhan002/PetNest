import cat from "../../assets/category/cat.png";
import dog from "../../assets/category/dog.png";
import rabbit from "../../assets/category/rabbit.png";
import bird from "../../assets/category/bird.png";

const Category = () => {
  return (
    <section className="mt-20">
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
        <button
          onclick="loadPetsForSort()"
          className="btn border-none text-white bg-primary hover:bg-secondary hover:text-dark2 lg:w-40"
        >
          Sort by Price
        </button>
      </div>
    </section>
  );
};

export default Category;
