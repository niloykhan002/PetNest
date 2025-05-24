import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData?.token;
    axios
      .get("https://petnest-np9s.onrender.com/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("profile get error", error);
      });
  }, []);
  return <div>hi</div>;
};

export default Profile;
