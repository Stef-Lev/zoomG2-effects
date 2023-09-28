import Patch from "@/models/patch";
import connectDB from "@/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
    if (req.method === "GET") {
      const { patchId } = req.query;
      const patch = await Patch.findById(patchId);
      res.status(200).json(patch);
    }
    if (req.method === "PUT") {
      const { patchId } = req.query;
      const patch = await Patch.findById(patchId);

      await patch.save();
      res.status(200).json({
        result: "success",
        patch,
        message: `Record ${patchId} is updated`
      });
    }
    if (req.method === "DELETE") {
      const { patchId } = req.query;
      const patch = await Patch.findById(patchId);

      res.json({
        result: "success",
        patch,
        message: `Record ${patchId} was deleted`
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
