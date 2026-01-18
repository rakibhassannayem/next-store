"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      toast.success("Login successful!");
      router.push("/protected");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8 border border-base-200">
        <h2 className="text-3xl font-black text-center mb-8">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control flex-row items-center gap-4">
            <label className="label w-24">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="montu@mia"
              className="input input-bordered rounded-xl h-14 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control flex-row items-center gap-4">
            <label className="label w-24">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="123456"
              className="input input-bordered rounded-xl h-14 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="btn btn-primary w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/30 text-white"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-sm text-center text-gray-500">
            <span className="font-bold text-primary">Mock Credentials:</span><br />
            Email: montu@mia<br />
            Password: 123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
