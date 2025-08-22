// import mongoose from "mongoose";

// const componentSchema = new mongoose.Schema({
// _id: String,
// category: String,
// thumbnail: String,
// html: String,
// });

// export const Component = mongoose.model("components_list", componentSchema);

// src/lib/schema/component.ts
import { Schema, models, model } from "mongoose";

const componentSchema = new Schema(
  {
    _id: String,
    category: String,
    thumbnail: String,
    html: String,
  },
  {
    timestamps: true,
  }
);

// ✅ Check if model already exists to avoid OverwriteModelError
export const Component =
  models.components_list || model("components_list", componentSchema);
