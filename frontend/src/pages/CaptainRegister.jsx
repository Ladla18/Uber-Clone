import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Transform data before sending to the backend
    const backendData = {
      fullName: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };

    console.log("User Registered", backendData);

    // Reset the form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-extrabold">Uber Captain</h1>

      <form
        onSubmit={submitHandler}
        className="mt-5 text-xl font-medium flex gap-5 flex-col"
      >
        <div className="flex flex-col">
          <label htmlFor="name">What's our Captains name</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              className="w-1/2 bg-gray-200 outline-none rounded p-2 mt-2"
              onChange={inputHandle}
              value={formData.firstName}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              className="w-1/2 bg-gray-200 outline-none rounded p-2 mt-2"
              onChange={inputHandle}
              value={formData.lastName}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">What's our Captain's email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={inputHandle}
            className="border bg-gray-200 p-2 rounded mt-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            value={formData.password}
            onChange={inputHandle}
            id="password"
            name="password"
            placeholder="example123"
            className="border bg-gray-200 p-2 rounded mt-2 outline-none"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="bg-black text-white w-full rounded p-2 font-bold"
        />
      </form>

      <div className="flex justify-center mt-5 font-medium text-lg">
        <p className="mt-2">
          Already a Captaiin?{" "}
          <Link to="/captain-login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;
