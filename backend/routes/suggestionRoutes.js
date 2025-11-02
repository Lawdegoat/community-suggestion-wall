import express from "express";
import Suggestion from "../models/Suggestion.js";

const router = express.Router();

// ✅ GET all suggestions
router.get("/", async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ createdAt: -1 });
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching suggestions" });
  }
});

// ✅ POST a new suggestion
router.post("/", async (req, res) => {
  try {
    console.log("Received:", req.body); // Optional debug
    const { name, text } = req.body;
    if (!name || !text) {
      return res.status(400).json({ message: "Missing name or text" });
    }

    const newSuggestion = new Suggestion({ name, text });
    const saved = await newSuggestion.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving suggestion:", err);
    res.status(500).json({ message: "Error saving suggestion" });
  }
});

export default router;
