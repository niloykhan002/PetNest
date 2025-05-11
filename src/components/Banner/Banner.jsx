import bannerImg from "../../assets/pet.webp";

const Banner = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center gap-10">
        <h3 className="font-bold text-2xl text-dark3 text-center">
          Bringing Families Together ❤️‍🔥
        </h3>
        <h1 className="text-center text-3xl lg:text-7xl font-extrabold text-dark1">
          Your Path to Adoption <br />
          Starts Here
        </h1>
        <p className="text-center text-dark1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking <br />
          at its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        <a href="#best-friend">
          <button className="btn border-none text-white bg-primary hover:bg-secondary hover:text-dark2 lg:w-40">
            View More
          </button>
        </a>
        <img src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
