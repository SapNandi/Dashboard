import mongoose from "mongoose";
// data imports
import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";
import AffiliateStat from "../models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "../data/index.js";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
      // User.insertMany(dataUser);
      // AffiliateStat.insertMany(dataAffiliateStat);
      // OverallStat.insertMany(dataOverallStat);
      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
    })
    .catch((err) => console.log(err));
};
