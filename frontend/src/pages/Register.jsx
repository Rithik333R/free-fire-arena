import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form);
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <form className="bg-surface p-8 rounded-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

        <input
          className="w-full p-3 mb-3 bg-black rounded"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="w-full p-3 mb-3 bg-black rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="w-full p-3 mb-6 bg-black rounded"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-primary text-black py-3 rounded-full font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}
