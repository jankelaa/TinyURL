import mongoose, { Schema, Document } from "mongoose";

interface IUrl extends Document {
  originalUrl: string;
  shortUrlId: string;
  createdAt: Date;
}

const urlSchema: Schema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrlId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Url = mongoose.model<IUrl>("Url", urlSchema);

export default Url;
