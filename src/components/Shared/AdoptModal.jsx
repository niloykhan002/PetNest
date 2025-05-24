import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AdoptModal = ({ setIsModalOpen, id }) => {
  const handleAdopt = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.petId = id;
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData?.token;

    axios
      .post("https://petnest-np9s.onrender.com/api/adoptions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Your Adoption is in process");
        setTimeout(() => {
          setIsModalOpen(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("adoption error", error);
        toast.error("Your Adoption request Failed!");
      });
  };
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Adoption Form</h2>
        <div className="space-y-4 mt-4"></div>
        <form onSubmit={handleAdopt} className="space-y-4">
          <fieldset className="fieldset">
            <label className="label">Contact</label>
            <input
              type="number"
              name="contact"
              className="input w-full"
              placeholder="Number"
            />
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input w-full"
              placeholder="Address"
            />
            <label className="label">Address</label>
            <textarea
              className="textarea w-full"
              name="message"
              placeholder="Message"
            ></textarea>
          </fieldset>
          <div className="modal-action">
            <button type="submit" className="btn btn-success text-white">
              Submit
            </button>

            <button
              type="button"
              className="btn btn-error text-white"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdoptModal;
