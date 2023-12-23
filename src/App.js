import React, { useState } from "react";
import "./App.css";
import "./Meaningfulgenerator.css";
import MeaningfulGenerator from "./Meaningfulgenerator";

const App = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedContent, setGeneratedContent] = useState(null);

  const handleParagraphChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setParagraphs(value);
    setGeneratedContent(null); // Reset generated content when the input changes
  };

  const handleGenerateClick = () => {
    // Generate content only if the number of paragraphs is valid
    if (paragraphs >= 1 && paragraphs <= 15) {
      const content = <MeaningfulGenerator paragraphs={paragraphs} />;
      setGeneratedContent(content);
    }
  };

  return (
    <div className="app">
      <h1 className="crazy-heading">Custom Content Generator</h1>
      <label className="my-label" htmlFor="paragraphInput">
        Number of Paragraphs:{" "}
      </label>
      <input
        type="number"
        id="paragraphInput"
        value={paragraphs}
        onChange={handleParagraphChange}
        min="1"
        max="15"
      />
      <button className="crazy-button" onClick={handleGenerateClick}>
        Generate
      </button>
      {generatedContent}
    </div>
  );
};

export default App;
