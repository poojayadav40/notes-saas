import dbConnect from "../../../lib/db";
import { Note } from "../../../lib/models";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }

  const { method } = req;

  switch (method) {
    case "GET":
      const notes = await Note.find({ tenant: decoded.tenant });
      return res.json(notes);

    case "POST":
      if (decoded.role !== "Member" && decoded.role !== "Admin") {
        return res.status(403).json({ error: "Not allowed" });
      }
      const note = await Note.create({
        title: req.body.title,
        content: req.body.content,
        tenant: decoded.tenant,
        owner: decoded.userId,
      });
      return res.json(note);

    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
