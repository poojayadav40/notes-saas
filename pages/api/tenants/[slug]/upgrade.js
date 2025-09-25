// pages/api/tenants/[slug]/upgrade.js
import { connectDB } from "../../../../lib/db";
import { Tenant } from "../../../../lib/models";
import { verifyToken } from "../../../../lib/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await connectDB();

  const slug = req.query.slug;
  const token = req.headers.authorization?.split(" ")[1];
  const payload = token ? verifyToken(token) : null;
  if (!payload) return res.status(401).json({ error: "Unauthorized" });

  if (payload.role !== "Admin" || payload.tenant !== slug) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const updated = await Tenant.findOneAndUpdate(
    { slug },
    { plan: "pro", $unset: { noteLimit: 1 } },
    { new: true }
  );
  if (!updated) return res.status(404).json({ error: "Tenant not found" });

  res.json({ ok: true, tenant: updated });
}
