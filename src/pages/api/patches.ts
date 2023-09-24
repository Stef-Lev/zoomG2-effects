// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/connectDB";
import Patch from "@/models/patch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    if (req.method === "GET") {
      const patches = await Patch.find({});
      res.status(200).json({ patches });
    }
    if (req.method === "POST") {
      const data = req.body;
      const newPatch = new Patch(data);
      await newPatch.save();

      res
        .status(201)
        .json({ message: "Patch created successfully", patch: newPatch });
    }
  } catch (error) {}
}
