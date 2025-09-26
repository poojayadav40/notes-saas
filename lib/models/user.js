import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, // ✅ hashed password
    role: { type: String, enum: ["Member", "Admin"], default: "Member" },
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
  },
  { versionKey: false }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
