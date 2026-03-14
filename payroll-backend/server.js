import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Contact from "./userModel/userModel.js";
import Lead from "./userModel/Lead.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => {
  console.error("Connection error:", err.message);
  process.exit(1);
});

app.post("/api/submit-contact-details", async (req, res) => {
  
  try {
    const { name, company, phone, email, employees, services, message } = req.body;

    if (!name || !company || !phone || !email) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const lead = new Lead({ name, company, phone, email, employees, services, message });
    await lead.save();

    res.status(201).json({ success: true, message: "Form submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/contact", async (req, res) => {
    
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});