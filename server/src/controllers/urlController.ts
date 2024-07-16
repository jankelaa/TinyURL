import { Request, Response } from "express";
import Url from "../models/Url.js";
import { nanoid } from "nanoid";

const baseUrl = "http://localhost:5000/";

export const createShortUrl = async (req: Request, res: Response) => {
  const { originalUrl } = req.body;

  const urlObj = await Url.findOne({ originalUrl });
  let shortUrl: string;
  if (urlObj) {
    shortUrl = `${baseUrl}${urlObj.shortUrlId}`;
    res.status(200).json(shortUrl);
  } else {
    const shortUrlId = nanoid(8);
    const newUrl = new Url({ originalUrl, shortUrlId });

    try {
      await newUrl.save();
      shortUrl = `${baseUrl}${shortUrlId}`;
      res.status(200).json(shortUrl);
    } catch (error) {
      console.error("Error saving URL:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const redirectToOriginalUrl = async (req: Request, res: Response) => {
  const { shortUrlId } = req.params;

  const url = await Url.findOne({ shortUrlId });
  if (url) {
    await url.save();
    res.redirect(url.originalUrl);
  } else {
    res.status(404).json({ message: "URL not found" });
  }
};
