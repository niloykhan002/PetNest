import Lottie from "lottie-react";
import login_data from "../assets/lotties/login.json";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    loginUser(data, navigate);
  };
  return (
    <div className="flex items-center justify-center my-20">
      <div className="lg:flex flex-row-reverse items-center gap-6">
        <div className="md:w-[500px] w-80">
          <Lottie animationData={login_data} />
        </div>
        <div className="card bg-secondary w-full max-w-md shrink-0 shadow-2xl">
          <h1 className="font-bold text-4xl text-center pt-8 text-primary">
            Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
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
                  className="input w-full"
                  required
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-dark3 hover:text-dark2"
                >
                  {showPassword ? <IoEyeOff size={15} /> : <IoEye size={15} />}
                </button>
              </div>

              <button
                type="submit"
                className="btn mt-2 border-none text-white bg-primary hover:bg-secondary hover:text-dark2"
              >
                Login
              </button>
            </fieldset>
          </form>

          <p className="px-8 pb-4">
            {"Don't"} have an account?{" "}
            <Link
              to={"/register"}
              className="font-bold text-blue-600 hover:text-dark2"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
