import mongoose from "mongoose";
import { IUser } from "@/types/types";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  patches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patch" }],
});

export const User = mongoose.model<IUser>("User", userSchema);
