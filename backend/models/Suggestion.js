import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true }, // ✅ fixed field name
  createdAt: { type: Date, default: Date.now },
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;
