import ctrlWrapper from "../helpers/ctrlWrapper.mjs";
import { Income } from "../models/income.mjs";

export const listIncome = async (req, res) => {
  const { page = "1", limit = "5" } = req.query;
  const skip = (page - 1) * limit;
  const result = await Income.find({ skip, limit });
  res.json(result);
};

export default {
  listIncome: ctrlWrapper(listIncome),
};
