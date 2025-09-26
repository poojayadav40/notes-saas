// pages/api/notes/[id].js
import { connectDB } from "../../../lib/db";
import { Note } from "../../../lib/models";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();
  const token = req.headers.authorization?.split(" ")[1];
  const payload = token ? verifyToken(token) : null;
  if (!payload) return res.status(401).json({ error: "Unauthorized" });

  const tenant = payload.tenant;
  const note = await Note.findById(req.query.id);
  if (!note || note.tenant !== tenant) return res.status(404).json({ error: "Note not found" });

  if (req.method === "GET") return res.json(note);

  if (req.method === "PUT") {
    note.title = req.body.title ?? note.title;
    note.body = req.body.body ?? note.body;
    await note.save();
    return res.json(note);
  }

  if (req.method === "DELETE") {
    await note.remove();
    return res.json({ ok: true });
  }

  res.status(405).end();
}
