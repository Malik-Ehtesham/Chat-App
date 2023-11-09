"use client";
import { TextField } from "@mui/material";
import { useState } from "react";

const AccountForm = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [update, setUpdate] = useState(false);

  // ------HANDLERS------------

  const CancelUpdateHandler = (e) => {
    e.preventDefault();

    setUpdate(false);
    setPassword("");
    setPasswordConfirm("");
  };

  const UpdateProfileHandler = (e) => {
    e.preventDefault();

    setUpdate(false);
    setPassword("");
    setPasswordConfirm("");
  };
  return (
    <div className="flex justify-center  items-center  flex-col h-screen pb-20 ">
      {update ? (
        <form className=" flex flex-col items-center p-5 w-4/5 md:w-3/4">
          <div className="w-full  my-3">
            <label className="font-semibold">New Password:</label>
            <input
              type="password"
              placeholder="Your New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-info w-full "
            />
          </div>
          <div className="w-full  my-3">
            <label className="font-semibold">Password Confirm:</label>
            <input
              type="password"
              placeholder="Your New Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="input input-bordered input-info w-full "
            />
          </div>
          <div className="flex justify-end items-end w-full">
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
          </div>
        </form>
      ) : null}

      <button
        className="btn text-lg btn-primary my-4"
        onClick={(e) => {
          e.preventDefault();
          setUpdate(!update);
        }}
      >
        Update Password
      </button>
      <button className="btn text-lg btn-error px-6 my-4">
        Delete Account
      </button>
      <button className="btn text-lg btn-error px-16 my-4">LOGOUT</button>
    </div>
  );
};

export default AccountForm;
