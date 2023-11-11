"use client";
import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <form className="flex flex-col justify-center border rounded-lg bg-white p-5  shadow-lg shadow-sky-300 sm:w-96">
      <p className="text-center font-bold text-2xl my-2">
        {isSignup ? "Signup" : "Login"}
      </p>
      {isSignup ? (
        <TextField
          id="standard-text-input"
          label="Username"
          type="text"
          variant="standard"
          className="my-1"
        />
      ) : null}
      <TextField
        id="standard-email-input"
        label="Email"
        type="email"
        variant="standard"
        className="my-1"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        className="mt-1 mb-4"
      />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
      </FormGroup>
      <button className=" text-xl my-2 font-bold p-2 transition ease-in-out  bg-sky-300 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg">
        {isSignup ? "Signup" : "Login"}
      </button>
      <p className="text-center font-semibold my-1">Or login with</p>
      <button className=" text-xl my-2 font-bold p-2 text-white transition ease-in-out  bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg">
        Google
      </button>
      <p className="flex justify-center text-md font-bold text-gray-500 my-2 ">
        {isSignup ? "Already have an account?" : "Don't have an account?"}

        <p
          className="mx-1 text-center text-sky-300 underline underline-offset-4 decoration-2 cursor-pointer "
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login!" : " Sign up!"}
        </p>
      </p>
    </form>
  );
};

export default AuthForm;
