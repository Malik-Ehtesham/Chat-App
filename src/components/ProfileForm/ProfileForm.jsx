"use client";
import { TextField } from "@mui/material";
import { useState } from "react";

const ProfileForm = () => {
  // -----USE STATES----------

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);

  // ------HANDLERS------------

  const CancelUpdateHandler = (e) => {
    e.preventDefault();

    setUpdate(false);
    setUsername("");
    setPhoneNumber("");
    setCountry("");
    setEmail("");
  };

  const UpdateProfileHandler = (e) => {
    e.preventDefault();

    setUpdate(false);
    setUsername("");
    setPhoneNumber("");
    setCountry("");
    setEmail("");
  };
  return (
    <div className="flex  justify-center">
      <form className=" flex flex-col items-center p-5 w-4/5 md:w-3/4">
        <img
          src="/ehtesham.jpg"
          className="w-44 sm:w-56  rounded-lg  my-2 border-4 border-blue-400"
        />
        <div className="w-full  my-3">
          <label className="font-semibold">Username:</label>
          <input
            type="text"
            placeholder="Your Username"
            value={update ? username : "Ehtesham Zahid"}
            onChange={update ? (e) => setUsername(e.target.value) : null}
            className="input input-bordered input-info w-full "
          />
        </div>{" "}
        <div className="w-full  my-3">
          <label className="font-semibold">Email:</label>
          <input
            type="text"
            placeholder="Your Email"
            value={update ? email : "shamimalick321@gmail.com"}
            onChange={update ? (e) => setEmail(e.target.value) : null}
            className="input input-bordered input-info w-full "
          />
        </div>
        <div className="w-full  my-3">
          <label className="font-semibold">Phone No.:</label>
          <input
            type="text"
            placeholder="Your Phone No."
            value={update ? phoneNumber : "0308-0554483"}
            onChange={update ? (e) => setPhoneNumber(e.target.value) : null}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="w-full  my-3">
          <label className="font-semibold">Country:</label>
          <input
            type="text"
            placeholder="Your Country"
            value={update ? country : "Pakistan"}
            onChange={update ? (e) => setCountry(e.target.value) : null}
            className="input input-bordered input-info w-full"
          />{" "}
        </div>
        <div className="flex justify-end items-end w-full">
          {update ? (
            <>
              <button
                className="btn btn-outline btn-error mx-2 "
                onClick={CancelUpdateHandler}
              >
                Cancel
              </button>
              <button
                className="btn btn-outline btn-success"
                onClick={UpdateProfileHandler}
              >
                Save
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline btn-primary"
              onClick={(e) => {
                e.preventDefault();
                setUpdate(true);
              }}
            >
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
