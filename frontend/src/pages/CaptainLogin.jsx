import React from 'react'
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
    <div className="flex flex-col p-4 ">
      <h1 className="text-3xl font-extrabold">Uber Captain</h1>

      <form
        onSubmit={submitHandler}
        action=""
        className="mt-5 text-xl font-medium flex gap-5 flex-col"
      >
        <div className="flex flex-col">
          <label htmlFor="email">What's your email</label>
          <input
            type="text"
            id="email"
            placeholder="email@example.com"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className="border bg-gray-200 p-2 rounded mt-2 outline-none"
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
            className="border bg-gray-200 p-2 rounded mt-2 outline-none"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-black text-white w-full rounded p-2 font-bold"
        />
      </form>

      <div className="flex justify-center mt-5 font-medium text-lg">
        <p className="mt-2">
          Become a partner ! {" "}
          <Link to="/captain-signup" className="text-blue-500">
            Join Here
          </Link>
        </p>
      </div>

      <Link
        to="/login"
        className="text-center  font-medium  text-lg mt-60 bg-green-300 p-2 rounded"
      >
        Sign In As User
      </Link>
    </div>
  );
}

export default CaptainLogin