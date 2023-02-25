import mongoose from "mongoose";
import { IPatch } from "@/types/types";

const patchSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    inPedal: { type: Boolean, required: true },
    pedalCode: { type: String, required: true },
    low: { type: Number, required: true },
    mid: { type: Number, required: true },
    high: { type: Number, required: true },
  });

  export const Patch = mongoose.model<IPatch>('Patch', patchSchema);