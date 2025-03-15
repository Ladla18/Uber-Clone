import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({ email, password });
    console.log(userData);
  };

  return (
    <div className="flex flex-col p-4 min-h-screen max-w-7xl mx-auto md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
        Uber Captain
      </h1>

      <div className="w-full max-w-md mx-auto mt-8">
        <form
          onSubmit={submitHandler}
          className="mt-5 text-base md:text-lg lg:text-xl font-medium flex gap-5 flex-col"
        >
          <div className="flex flex-col">
            <label htmlFor="email">What's your email</label>
            <input
              type="text"
              id="email"
              placeholder="email@example.com"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="border bg-gray-200 p-2 md:p-3 rounded mt-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              id="password"
              placeholder="example123"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="border bg-gray-200 p-2 md:p-3 rounded mt-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="bg-black text-white w-full rounded p-2 md:p-3 font-bold hover:bg-gray-800 transition-colors cursor-pointer"
          />
        </form>

        <div className="flex justify-center mt-5 font-medium text-base md:text-lg">
          <p className="mt-2">
            Become a partner!{" "}
            <Link
              to="/captain-signup"
              className="text-blue-500 hover:text-blue-600"
            >
              Join Here
            </Link>
          </p>
        </div>

        <Link
          to="/login"
          className="text-center block font-medium text-base md:text-lg mt-20 md:mt-32 bg-green-300 p-2 md:p-3 rounded hover:bg-green-400 transition-colors"
        >
          Sign In As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
