import dbConnect from "../../lib/db";
import { User, Tenant } from "../../lib/models";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (req.headers["x-seed-secret"] !== process.env.SEED_SECRET) {
    return res.status(403).json({ error: "Forbidden" });
  }

  await dbConnect();

  await Tenant.deleteMany({});
  await User.deleteMany({});

  const tenants = [
    { name: "Acme", slug: "acme", plan: "Free" },
    { name: "Globex", slug: "globex", plan: "Free" },
  ];
  const createdTenants = await Tenant.insertMany(tenants);

  const passwordHash = await bcrypt.hash("password", 10);

  const users = [
    { email: "admin@acme.test", role: "Admin", tenant: createdTenants[0]._id, passwordHash },
    { email: "user@acme.test", role: "Member", tenant: createdTenants[0]._id, passwordHash },
    { email: "admin@globex.test", role: "Admin", tenant: createdTenants[1]._id, passwordHash },
    { email: "user@globex.test", role: "Member", tenant: createdTenants[1]._id, passwordHash },
  ];
  await User.insertMany(users);

  res.json({ ok: true });
}
