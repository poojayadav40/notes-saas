import db from "../../lib/db";
import { User } from "../../lib/models";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (
    req.method !== "POST" &&
    !(req.method === "GET" && req.query.secret === "myseedsecret123")
  ) {
    return res.status(405).end();
  }

  try {
    await db.connect();

    // ✅ clear old users
    await User.deleteMany({});

    const hashed = await bcrypt.hash("password", 10);

    await User.insertMany([
      { email: "admin@acme.test", password: hashed, role: "Admin", tenant: "acme" },
      { email: "user@acme.test", password: hashed, role: "Member", tenant: "acme" },
      { email: "admin@globex.test", password: hashed, role: "Admin", tenant: "globex" },
      { email: "user@globex.test", password: hashed, role: "Member", tenant: "globex" },
    ]);

    res.json({ ok: true });
  } catch (err) {
    console.error("Seed error:", err);
    res.status(500).json({ error: err.message || "Seeding failed" });
  }
}
