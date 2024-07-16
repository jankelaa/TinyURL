import { Request, Response } from "express";
import Url from "../models/Url.js";

export const getPopularDomains = async (req: Request, res: Response) => {
  const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
  try {
    const urls = await Url.aggregate([
      {
        $match: {
          createdAt: { $gte: last24Hours },
        },
      },
      {
        $addFields: {
          fullDomain: {
            $arrayElemAt: [{ $split: ["$originalUrl", "/"] }, 2],
          },
        },
      },
      {
        $group: {
          _id: "$fullDomain",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res.json(urls);
  } catch (error) {
    console.error("Error fetching popular domains:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
