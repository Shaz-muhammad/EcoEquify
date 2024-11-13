import React from "react";
import "./Learn.css";

const technologies = [
  { name: "JavaScript", url: "https://www.youtube.com/results?search_query=JavaScript+tutorial" },
  { name: "Python", url: "https://www.youtube.com/results?search_query=Python+tutorial" },
  { name: "Machine Learning", url: "https://www.youtube.com/results?search_query=Machine+Learning+tutorial" },
  { name: "Blockchain", url: "https://www.youtube.com/results?search_query=Blockchain+tutorial" },
  { name: "Cyber Security", url: "https://www.youtube.com/results?search_query=Cyber+Security+tutorial" },
  { name: "Data Science", url: "https://www.youtube.com/results?search_query=Data+Science+tutorial" },
  { name: "ReactJS", url: "https://www.youtube.com/results?search_query=ReactJS+tutorial" },
  { name: "NodeJS", url: "https://www.youtube.com/results?search_query=NodeJS+tutorial" },
  { name: "Artificial Intelligence", url: "https://www.youtube.com/results?search_query=Artificial+Intelligence+tutorial" },
  { name: "Cloud Computing", url: "https://www.youtube.com/results?search_query=Cloud+Computing+tutorial" },
  { name: "C", url: "https://www.youtube.com/results?search_query=C+programming+tutorial" },
  { name: "C++", url: "https://www.youtube.com/results?search_query=C%2B%2B+programming+tutorial" },
];



const Learn = () => {
  return (
    <div className="learn-container">
      <header className="header-slide">
        <h1 className="title">Learn and Grow</h1>
        <p className="subtitle">Explore various learning resources in technology.</p>
      </header>

      <div className="technology-grid">
        {technologies.map((tech, index) => (
          <a href={tech.url} target="_blank" rel="noopener noreferrer" key={index} className="tech-card">
            <h3>{tech.name}</h3>
          </a>
        ))}
      </div>

      <div className="practice-section">
        <h2>Practice</h2>
        <p>Sharpen your skills with hands-on exercises and coding challenges.</p>
        <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="practice-btn">
          Start Practicing
        </a>
      </div>
    </div>
  );
};

export default Learn;
