import Lottie from "lottie-react";
import register_data from "../assets/lotties/register.json";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    createUser(data, navigate);
  };
  return (
    <div className="flex items-center justify-center my-20">
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
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input  w-full validator"
                  required
                  placeholder="Password"
                  minlength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-dark3 hover:text-dark2"
                >
                  {showPassword ? <IoEyeOff size={15} /> : <IoEye size={15} />}
                </button>
              </div>
              <p className="validator-hint">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>

              <button
                type="submit"
                className="btn mt-2 border-none text-white bg-primary hover:bg-secondary hover:text-dark2"
              >
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
