import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.mjs";

const orderSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    address: { type: String },
    products: { type: Number },
    price: { type: Number },
    status: { type: String },
    order_date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

export const Order = model("order", orderSchema);
