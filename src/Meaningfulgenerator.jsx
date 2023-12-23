import React from "react";

const themes = {
  Technology: [
    "In the ever-evolving world of technology, innovations are reshaping the way we live.",
    "From artificial intelligence to blockchain, technology continues to redefine our future.",
  ],
  Nature: [
    "Amidst the tranquility of nature, one can find solace in the beauty of the great outdoors.",
    "Exploring the wonders of nature reveals a harmonious balance in the ecosystem.",
  ],
  Science: [
    "Scientific discoveries propel us into new frontiers, unraveling the mysteries of the universe.",
    "Through rigorous experimentation, scientists unlock the secrets that govern our world.",
  ],
  // Add more themes and corresponding sentences as needed
};

const getRandomTheme = () => {
  const themeKeys = Object.keys(themes);
  const randomIndex = Math.floor(Math.random() * themeKeys.length);
  return themeKeys[randomIndex];
};

const generateContent = (paragraphs) => {
  const generatedParagraphs = [];
  for (let i = 0; i < paragraphs; i++) {
    const theme = getRandomTheme();
    const themeSentences = themes[theme];
    const randomSentence =
      themeSentences[Math.floor(Math.random() * themeSentences.length)];
    generatedParagraphs.push(<p key={i}>{randomSentence}</p>);
  }
  return generatedParagraphs;
};

const MeaningfulGenerator = ({ paragraphs }) => {
  return (
    <div className="meaningful-generator">{generateContent(paragraphs)}</div>
  );
};

export default MeaningfulGenerator;
