import React from "react";

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

  // This is a TypeScript array with type annotation!
  const chickenBreeds: string[] = [
    "Rhode Island Red",
    "Leghorn",
    "Sussex",
    "Orpington",
  ];

  // This is a TypeScript object using our interface!
  const myChicken: Chicken = {
    name: "Henrietta",
    breed: "Rhode Island Red",
    age: 2,
    eggsPerWeek: 5,
  };

  return (
    <div>
      <h1>🐔 {appName}</h1>
      <p>{createGreeting(appName)}</p>
      <h2>My Chicken:</h2>
      <div>
        <p>
          <strong>Name:</strong> {myChicken.name}
        </p>
        <p>
          <strong>Breed:</strong> {myChicken.breed}
        </p>
        <p>
          <strong>Age:</strong> {myChicken.age} years old
        </p>
        <p>
          <strong>Eggs per week:</strong> {myChicken.eggsPerWeek}
        </p>
      </div>

      <h2>Popular Chicken Breeds:</h2>
      <ul>
        {chickenBreeds.map((breed, index) => (
          <li key={index}>{breed}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
