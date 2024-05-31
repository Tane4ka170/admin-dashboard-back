import ctrlWrapper from "../helpers/ctrlWrapper.mjs";
import { Customer } from "../models/customer.mjs";
import { Income } from "../models/income.mjs";
import { Product } from "../models/product.mjs";
import { Supplier } from "../models/supplier.mjs";

const listDashboard = async (_, res) => {
  const suppliersCount = await Supplier.countDocuments();
  const productsCount = await Product.countDocuments();
  const customersCount = await Customer.countDocuments();

  const recentCustomers = await (
    await Customer.find()
  ).splice(customersCount - 5, customersCount);
  const incomeExpenses = await Income.find();

  res.json({
    suppliersCount,
    productsCount,
    customersCount,
    recentCustomers,
    incomeExpenses,
  });
};

export default {
  listDashboard: ctrlWrapper(listDashboard),
};
