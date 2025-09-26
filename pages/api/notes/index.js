// pages/index.js
import { useState, useEffect } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [info, setInfo] = useState("");
  const [tenant, setTenant] = useState("");
  const [role, setRole] = useState("");
  const [noteLimitReached, setNoteLimitReached] = useState(false);

  function getAuth() {
    return localStorage.getItem("token");
  }

  async function loadNotes() {
    const token = getAuth();
    if (!token) {
      window.location.href = "/login";
      return;
    }
    const res = await fetch("/api/notes", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
      return;
    }
    const data = await res.json();
    setNotes(data);
  }

  useEffect(() => {
    setTenant(localStorage.getItem("tenant"));
    setRole(localStorage.getItem("role"));
    loadNotes();
  }, []);

  async function createNote(e) {
    e.preventDefault();
    const token = getAuth();
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await res.json();
    if (res.status === 403 && data.error?.includes("Upgrade")) {
      setNoteLimitReached(true);
      setInfo("Note limit reached for Free plan");
      return;
    }
    setTitle("");
    setBody("");
    loadNotes();
  }

  async function del(id) {
    const token = getAuth();
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    loadNotes();
  }

  async function upgrade() {
    const token = getAuth();
    const slug = localStorage.getItem("tenant");
    const res = await fetch(`/api/tenants/${slug}/upgrade`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setInfo("Upgraded to Pro!");
      setNoteLimitReached(false);
      loadNotes();
    } else {
      const d = await res.json();
      setInfo(d.error || "Upgrade failed");
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Notes ({tenant})</h1>
        <div>
          {localStorage.getItem("email")} — {role}
        </div>
      </div>
      <form onSubmit={createNote} className="mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className="w-full p-2 mb-2 border rounded"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Create Note
        </button>
      </form>

      {noteLimitReached && (
        <div className="p-3 bg-yellow-100 border mb-4 rounded">
          <div>
            Free plan limit reached.
            <button
              onClick={upgrade}
              className="ml-2 px-3 py-1 bg-blue-600 text-white rounded"
            >
              Upgrade to Pro
            </button>
          </div>
          <div className="text-sm mt-1">{info}</div>
        </div>
      )}

      <div>
        {notes?.map((n) => (
          <div key={n._id} className="border p-3 mb-2 rounded">
            <div className="flex justify-between">
              <strong>{n.title}</strong>
              <button
                onClick={() => del(n._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
            <p>{n.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-500">{info}</div>
    </div>
  );
}
