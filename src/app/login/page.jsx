"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LuLogIn } from "react-icons/lu";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) router.push("/protected");
    else alert("Invalid credentials");
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary flex items-center gap-2">
        <LuLogIn size={30} />
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-20 space-y-4"
      >
        <label>Email</label>
        <input
          className="input input-bordered w-full"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-primary w-full text-white">Login</button>
      </form>
    </div>
  );
}
