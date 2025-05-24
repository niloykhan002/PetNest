import Lottie from "lottie-react";
import register_data from "../assets/lotties/register.json";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (data.password.length < 6) {
      return toast.error("Length must be at least 6 character ");
    }
    if (!/[A-Z]/.test(data.password)) {
      return toast.error("Must have an Uppercase letter in the password");
    }
    if (!/[a-z]/.test(data.password)) {
      return toast.error("Must have a Lowercase letter in the password");
    }
    createUser(data, navigate);
  };
  return (
    <div className="flex items-center justify-center my-20">
      <Toaster />
      <div className="lg:flex flex-row-reverse items-center gap-6">
        <div className="md:w-[600px] w-80">
          <Lottie animationData={register_data} />
        </div>
        <div className="card bg-secondary w-full max-w-md shrink-0 shadow-2xl">
          <h1 className="font-bold text-4xl text-center pt-8 text-primary ">
            Register
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />

              <button className="btn mt-2 border-none text-white bg-primary hover:bg-secondary hover:text-dark2">
                Register
              </button>
            </fieldset>
          </form>
          <p className="pl-8 pb-8">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-bold text-blue-600 hover:text-dark2"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
