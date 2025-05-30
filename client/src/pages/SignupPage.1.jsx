import React, { useState, useEffect } from "react";
import { Logo, Inputbox, Button } from "../components";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  const user = {}; // Replace with your auth logic
  const [showForm, setShowForm] = useState(true);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileURL(url);

      return () => URL.revokeObjectURL(url); // Clean up on unmount or file change
    }
  }, [file]);

  if (user.token) window.location.replace("/");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle signup logic here
    console.log("Submitted data:", data);
  };

  return (
    <div className="flex w-full min-h-screen bg-[#1a1f2b] text-[#4de94f] font-mono">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/3 flex-col justify-center items-center bg-gradient-to-b from-[#2f374c] via-[#2a2f43] to-[#2f374c] border-r border-[#4de94f66] px-12">
        {fileURL ? (
          <img
            src={fileURL}
            alt="Profile preview"
            className="w-24 h-24 rounded-full border-2 border-[#4de94f]"
          />
        ) : (
          <div className="w-24 h-24 rounded-full border-2 border-[#4de94f] flex items-center justify-center text-2xl font-bold">
            ?
          </div>
        )}
        <Logo type="signin" />
        <span className="mt-6 text-xl font-semibold tracking-wide text-[#4de94f]">
          Join ThreatWire Chronicles
        </span>
        <p className="mt-4 text-sm text-[#6cf47ccc] text-center">
          Sign up to get exclusive access to cybersecurity insights and community.
        </p>
        <Button
          label={showForm ? "Hide Form" : "Show Form"}
          onClick={() => setShowForm((prev) => !prev)}
          styles="mt-8 bg-[#4de94f] hover:bg-[#3cc83b] text-black font-semibold py-2 px-6 rounded-full"
        />
      </div>

      {/* Right Panel / Form */}
      <div className="flex flex-1 flex-col justify-center items-center p-12 bg-[#2a2f43] shadow-lg rounded-lg mx-6 md:mx-0">
        <div className="max-w-md w-full">
          <div className="block mb-10 md:hidden">
            <Logo />
          </div>
          <h2 className="text-center text-3xl font-extrabold mb-8 text-[#4de94f] tracking-wide">
            Create your account
          </h2>

          {showForm && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <Inputbox
                  label="First Name"
                  name="firstName"
                  type="text"
                  isRequired={true}
                  placeholder="John"
                  value={data.firstName}
                  onChange={handleChange}
                  inputClass="bg-[#394158] text-[#c4fcbc] placeholder-[#8ac985]"
                  labelClass="text-[#a1d986]"
                />
                <Inputbox
                  label="Last Name"
                  name="lastName"
                  type="text"
                  isRequired={true}
                  placeholder="Doe"
                  value={data.lastName}
                  onChange={handleChange}
                  inputClass="bg-[#394158] text-[#c4fcbc] placeholder-[#8ac985]"
                  labelClass="text-[#a1d986]"
                />
              </div>

              <Inputbox
                label="Email Address"
                name="email"
                type="email"
                isRequired={true}
                placeholder="email@example.com"
                value={data.email}
                onChange={handleChange}
                inputClass="bg-[#394158] text-[#c4fcbc] placeholder-[#8ac985]"
                labelClass="text-[#a1d986]"
              />

              <Inputbox
                label="Password"
                name="password"
                type="password"
                isRequired={true}
                placeholder="Enter your password"
                value={data.password}
                onChange={handleChange}
                inputClass="bg-[#394158] text-[#c4fcbc] placeholder-[#8ac985]"
                labelClass="text-[#a1d986]"
              />

              <div>
                <label
                  htmlFor="profilePic"
                  className="block mb-1 font-semibold text-[#4de94f]"
                >
                  Upload Profile Picture (optional)
                </label>
                <input
                  id="profilePic"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-[#4de94f] file:bg-[#4de94f] file:text-black file:rounded-full file:px-4 file:py-1 cursor-pointer"
                />
              </div>

              <Button
                label="Sign Up"
                type="submit"
                styles="group relative w-full flex justify-center py-2.5 px-4 rounded-full text-white bg-[#4de94f] hover:bg-[#3cc83b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4de94f]"
              />
            </form>
          )}

          <div className="flex items-center justify-center mt-8 text-[#a1d986]">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-[#4de94f] font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

