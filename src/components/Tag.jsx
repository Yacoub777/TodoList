import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#f4772a", color: "#fff" },        // Strong orange
        CSS: { backgroundColor: "#0076d6", color: "#fff" },         // Deep blue
        JavaScript: { backgroundColor: "#f0db4f", color: "#000" },  // Classic JS yellow
        React: { backgroundColor: "#61dafb", color: "#000" },       // Light cyan
        Nodejs: { backgroundColor: "#78bc61", color: "#fff" },      // Light green
        MongoDB: { backgroundColor: "#3FA037", color: "#fff" },     // Fresh green
        Bootstrap: { backgroundColor: "#7952b3", color: "#fff" },   // Deep purple
        Work: { backgroundColor: "#005f73", color: "#fff" },        // Dark teal
        Home: { backgroundColor: "#9b2226", color: "#fff" },        // Deep red
        Sport: { backgroundColor: "#ffba08", color: "#000" },       // Bright yellow
        Study: { backgroundColor: "#3a86ff", color: "#fff" }        // Bright blue
      };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
