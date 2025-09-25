// lib/auth.js
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "./db";
import { User } from "./models";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

export async function loginUser(email, password) {
  await connectDB();
  const user = await User.findOne({ email });
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;
  const token = signToken({ email: user.email, role: user.role, tenant: user.tenant });
  return { token, user: { email: user.email, role: user.role, tenant: user.tenant } };
}
