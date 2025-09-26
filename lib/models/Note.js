import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
