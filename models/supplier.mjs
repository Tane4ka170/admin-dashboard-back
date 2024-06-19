import { Schema, model } from "mongoose";
import Joi from "joi";
import handleMongooseError from "../helpers/handleMongooseError.mjs";

const supplierSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    suppliers: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Active", "Deactive"], required: true },
  },
  { versionKey: false, timestamps: true }
);

supplierSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  address: Joi.string()
    .required()
    .messages({ "any.required": "missing required address field" }),
  suppliers: Joi.string()
    .required()
    .messages({ "any.required": "missing required suppliers field" }),
  date: Joi.date()
    .required()
    .messages({ "any.required": "missing required date field" }),
  amount: Joi.number()
    .required()
    .messages({ "any.required": "missing required amount field" }),
  status: Joi.string()
    .valid("Active", "Deactive")
    .required()
    .messages({ "any.required": "missing required status field" }),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  suppliers: Joi.string(),
  date: Joi.date(),
  amount: Joi.number(),
  status: Joi.string(),
});

export const schemas = { addSchema, updateSchema };

export const Supplier = model("supplier", supplierSchema);
