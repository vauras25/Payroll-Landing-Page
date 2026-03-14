import mongoose from "mongoose";  

const leadSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  company:   { type: String, required: true },
  phone:     { type: String, required: true },
  email:     { type: String, required: true },
  employees: { type: String },
  services:  { type: String },
  message:   { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Lead", leadSchema);