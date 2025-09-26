import mongoose from "mongoose";

const TenantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    plan: { type: String, enum: ["free", "pro"], default: "free" },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default mongoose.models.Tenant || mongoose.model("Tenant", TenantSchema);
