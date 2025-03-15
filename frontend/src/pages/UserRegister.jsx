import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
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
    <div className="flex flex-col p-4 min-h-screen max-w-7xl mx-auto md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Uber</h1>

      <div className="w-full max-w-md mx-auto mt-8">
        <form
          onSubmit={submitHandler}
          className="mt-5 text-base md:text-lg lg:text-xl font-medium flex gap-5 flex-col"
        >
          <div className="flex flex-col">
            <label htmlFor="name">What's your name</label>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                name="firstName"
                className="w-full md:w-1/2 bg-gray-200 outline-none rounded p-2 md:p-3 mt-2 focus:ring-2 focus:ring-black"
                onChange={inputHandle}
                value={formData.firstName}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                className="w-full md:w-1/2 bg-gray-200 outline-none rounded p-2 md:p-3 mt-2 focus:ring-2 focus:ring-black"
                onChange={inputHandle}
                value={formData.lastName}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">What's your email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={inputHandle}
              className="border bg-gray-200 p-2 md:p-3 rounded mt-2 outline-none focus:ring-2 focus:ring-black"
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
              className="border bg-gray-200 p-2 md:p-3 rounded mt-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-black text-white w-full rounded p-2 md:p-3 font-bold hover:bg-gray-800 transition-colors cursor-pointer"
          />
        </form>

        <div className="flex justify-center mt-5 font-medium text-base md:text-lg">
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
