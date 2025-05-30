import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { Button, Divider, Inputbox, Logo } from "../components";

const LoginPage = () => {
  const user = {}; // You should replace with actual auth state

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const googleLogin = async () => {
    // Implement Google OAuth login logic here
    toast("Google Login is not yet implemented.", { type: "info" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement login with email/password logic here
    toast("Login functionality is pending.", { type: "info" });
  };

  if (user.token) window.location.replace("/");

  return (
    <div className="flex w-full min-h-screen bg-[#0f111a] text-neon-green font-mono">
      {/* Left Cyber Terminal Panel */}
      <div className="hidden md:flex w-1/3 flex-col justify-center items-center bg-gradient-to-b from-[#011627] via-[#0b132b] to-[#011627] border-r border-neon-green/50 px-12">
        <Logo type="threatwire" className="mb-8" />
        <h1 className="text-4xl font-bold mb-4 text-neon-green drop-shadow-[0_0_15px_rgba(0,255,0,0.7)]">
          ThreatWire Chronicles
        </h1>
        <p className="text-lg text-neon-green/80 tracking-wide leading-relaxed max-w-xs text-center">
          Access the ThreatWire network to monitor latest cyber threats, vulnerabilities, and threat intelligence.
        </p>
        <p className="mt-6 text-sm text-neon-green/60 italic max-w-xs text-center">
          <span className="font-bold">Reminder:</span> Use this platform responsibly. Always adhere to ethical guidelines.
        </p>
      </div>

      {/* Right Login Form */}
      <div className="flex flex-1 flex-col justify-center items-center p-12 bg-[#111822] shadow-lg rounded-lg mx-6 md:mx-0">
        <h2 className="text-3xl font-bold mb-8 text-neon-green drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] text-center">
          Access ThreatWire
        </h2>

        <Button
          onClick={googleLogin}
          label="Sign in with Google"
          icon={<FcGoogle />}
          styles="w-full flex items-center justify-center gap-3 bg-[#1f2937] text-neon-green hover:bg-[#2f3e4f] border border-neon-green rounded-full py-3 font-semibold shadow-md transition duration-300"
        />

        <Divider label="OR" styles="text-neon-green/70 my-8" />

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6"
          autoComplete="off"
        >
          <Inputbox
            label="Email Address"
            name="email"
            type="email"
            isRequired={true}
            placeholder="security@threatwire.com"
            value={data.email}
            onChange={handleChange}
            styles="bg-[#0d111a] border border-neon-green focus:border-electric-blue text-neon-green"
          />

          <div className="relative">
            <Inputbox
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              isRequired={true}
              placeholder="••••••••"
              value={data.password}
              onChange={handleChange}
              styles="bg-[#0d111a] border border-neon-green focus:border-electric-blue text-neon-green pr-12"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-[40px] text-neon-green/70 hover:text-neon-green transition"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <Button
            type="submit"
            label="Unlock"
            styles="bg-neon-green text-black font-bold py-3 rounded-full shadow-lg hover:shadow-neon-green/60 transition duration-300"
          />
        </form>

        <p className="mt-10 text-neon-green/70 text-center">
          Don't have access?{" "}
          <Link to="/sign-up" className="text-electric-blue hover:underline">
            Request Access
          </Link>
        </p>
      </div>

      <Toaster richColors position="top-center" />
    </div>
  );
};

export default LoginPage;
