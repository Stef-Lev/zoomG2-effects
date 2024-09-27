import Patch from "@/models/patch";
import connectDB from "@/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();

    const { patchId } = req.query;
    let patch;

    switch (req.method) {
      case "GET":
        patch = await Patch.findById(patchId);
        if (!patch) return res.status(404).json({ error: "Patch not found" });
        return res.status(200).json(patch);

      case "PUT":
        patch = await Patch.findById(patchId);
        if (!patch) return res.status(404).json({ error: "Patch not found" });
        await patch.save();
        return res.status(200).json({
          result: "success",
          patch,
          message: `Record ${patchId} is updated`
        });

      case "DELETE":
        patch = await Patch.findById(patchId);
        if (!patch) return res.status(404).json({ error: "Patch not found" });
        return res.status(200).json({
          result: "success",
          patch,
          message: `Record ${patchId} was deleted`
        });

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
}
