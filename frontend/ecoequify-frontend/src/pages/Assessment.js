// src/pages/Assessment.js
import React, { useState } from "react";

const assessments = [
  { name: "Eco Assessment 1", date: "2024-11-20" },
  { name: "Sustainability Quiz", date: "2024-11-25" },
  { name: "Green Practices Test", date: "2024-12-05" },
];

const Assessment = () => {
  const [search, setSearch] = useState("");
  const [filteredAssessments, setFilteredAssessments] = useState(assessments);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredAssessments(
      assessments.filter((assessment) =>
        assessment.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assessments</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for assessments..."
        className="p-2 border rounded-lg mb-4"
      />
      <ul className="space-y-4">
        {filteredAssessments.map((assessment, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{assessment.name}</h3>
            <p>{assessment.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assessment;
