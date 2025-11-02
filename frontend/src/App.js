import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch all suggestions on load
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/suggestions")
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Submit new suggestion
  const handleSubmit = async () => {
    if (!name || !text) {
      alert("Please enter your name and suggestion!");
      return;
    }

    const newSuggestion = { name, text, createdAt: new Date() };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/suggestions",
        newSuggestion
      );
      setSuggestions([res.data, ...suggestions]);
      setName("");
      setText("");
    } catch (error) {
      console.log("Error posting suggestion:", error);
    }
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <h1>💭 Community Suggestion Wall</h1>
        <motion.button
          className="toggle-btn"
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Day Mode" : "🌙 Night Mode"}
        </motion.button>
      </div>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your suggestion..."
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <motion.button
        className="post-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
      >
        Post Suggestion
      </motion.button>

      <AnimatePresence>
        {suggestions.map((s) => (
          <motion.div
            key={s._id}
            className="suggestion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <strong>{s.name}</strong>
            <p>{s.text}</p>
            <span className="timestamp">
              {new Date(s.createdAt).toLocaleString()}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
