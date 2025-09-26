import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },   // ✅ final field
  role: { type: String, enum: ["Admin", "Member"], required: true },
  tenant: { type: String, required: true },
});

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  tenant: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// ✅ Force delete old models to avoid `passwordHash` version
delete mongoose.models.User;
delete mongoose.models.Note;

export const User = mongoose.model("User", UserSchema);
export const Note = mongoose.model("Note", NoteSchema);
