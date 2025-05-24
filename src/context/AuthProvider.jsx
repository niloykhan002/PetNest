import axios from "axios";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (data, navigate) => {
    axios
      .post("https://petnest-np9s.onrender.com/api/auth/register", data)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Registration Successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("register error", error);
        toast.error("Registration Failed!");
      });
  };

  const loginUser = (data, navigate) => {
    axios
      .post("https://petnest-np9s.onrender.com/api/auth/login", data)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("login error", error);
        toast.error("Login Failed!");
      });
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
