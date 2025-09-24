import React from "react";
import { Chicken } from "../types";

interface ChickenCardProps {
  chicken: Chicken;
}

const ChickenCard: React.FC<ChickenCardProps> = ({ chicken }) => {
  return (
    <div className="chicken-card">
      <h3>🐔 {chicken.name}</h3>
      <div className="chicken-info breed-info">
        <strong>Breed:</strong> {chicken.breed}
      </div>
      <div className="chicken-info age-info">
        <strong>Age:</strong> {chicken.age} years old
      </div>
      <div className="chicken-info eggs-info">
        <strong>Eggs per week:</strong> {chicken.eggsPerWeek}
      </div>
    </div>
  );
};

export default ChickenCard;
