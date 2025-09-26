import dbConnect from "../../../lib/db";
import { Tenant } from "../../../lib/models";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

  if (decoded.role !== "Admin") {
    return res.status(403).json({ error: "Only admins can upgrade" });
  }

  const { slug } = req.query;
  const tenant = await Tenant.findOneAndUpdate({ slug }, { plan: "Pro" }, { new: true });

  res.json({ ok: true, tenant });
}
