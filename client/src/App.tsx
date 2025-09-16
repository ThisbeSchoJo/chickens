import React from "react";
import "./App.css";

// This is a TypeScript interface - it defines the shape of a Chicken object!
interface Chicken {
  name: string;
  breed: string;
  age: number;
  eggsPerWeek: number;
}

// The ": React.FC" part is TypeScript - aka this is a React Functional Component
const App: React.FC = () => {
  // This is a TypeScript variable with a type annotation!
  const appName: string = "Chickens App";

  // This is a TypeScript function with parameter and return types!
  const createGreeting = (name: string): string => {
    return `Welcome to ${name}!`;
  };

  // This function takes an array of chickens and returns the total eggs per week!
  const calculateTotalEggs = (chickens: Chicken[]): number => {
    return chickens.reduce((total, chicken) => total + chicken.eggsPerWeek, 0);
    // chickens.reduce() goes through each chicken in the array and adds the eggsPerWeek to the total (total is the running sum, chicken is the current chicken), 0 is the initial value of the total
  };

  // This is a TypeScript array with type annotation!
  const chickenBreeds: string[] = [
    "Rhode Island Red",
    "Leghorn",
    "Sussex",
    "Orpington",
  ];

  // This is a TypeScript array of Chicken objects using our interface!
  const myFlock: Chicken[] = [
    {
      name: "Henrietta",
      breed: "Rhode Island Red",
      age: 2,
      eggsPerWeek: 5,
    },
    {
      name: "Clucky",
      breed: "Leghorn",
      age: 1,
      eggsPerWeek: 6,
    },
    {
      name: "Penny",
      breed: "Sussex",
      age: 3,
      eggsPerWeek: 4,
    },
  ];

  return (
    <div className="app-container">
      <h1>🐔 {appName}</h1>
      <p>{createGreeting(appName)}</p>
      <h2>My Flock:</h2>
      <div className="total-eggs">
        <strong>Total eggs per week:</strong> {calculateTotalEggs(myFlock)} 🥚
      </div>
      <div>
        {myFlock.map((chicken, index) => (
          <div key={index} className="chicken-card">
            <h3>🐔 {chicken.name}</h3>
            <div className="chicken-info breed-info">
              <strong>Breed:</strong> {chicken.breed}
            </div>
            <div className="chicken-info age-info">
              <strong>Age:</strong> {chicken.age} years old
            </div>
            <div className="chicken-info eggs-info">
              <strong>Eggs per week:</strong> {chicken.eggsPerWeek}
              <span className="egg-badge">🥚 {chicken.eggsPerWeek}</span>
            </div>
          </div>
        ))}
      </div>

      <h2>Popular Chicken Breeds:</h2>
      <div className="breeds-list">
        <ul>
          {chickenBreeds.map((breed, index) => (
            <li key={index}>{breed}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
