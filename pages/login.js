import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    setErr("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErr(data.error || "Login failed");
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("tenant", data.user.tenant);
    localStorage.setItem("role", data.user.role);

    window.location.href = "/"; // redirect after login
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="space-x-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>

      {err && <p className="text-red-500 mt-2">{err}</p>}

      <div className="mt-4 text-sm">
        <p>Test accounts:</p>
        <p>admin@acme.test / user@acme.test</p>
        <p>admin@globex.test / user@globex.test</p>
        <p>(password: password)</p>
      </div>
    </div>
  );
}
