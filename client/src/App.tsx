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
    <div>
      <h1>🐔 {appName}</h1>
      <p>{createGreeting(appName)}</p>
      <h2>My Flock:</h2>
      <p>
        <strong>Total eggs per week:</strong> {calculateTotalEggs(myFlock)} 🥚
      </p>
      <div>
        {myFlock.map((chicken, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>🐔 {chicken.name}</h3>
            <p>
              <strong>Breed:</strong> {chicken.breed}
            </p>
            <p>
              <strong>Age:</strong> {chicken.age} years old
            </p>
            <p>
              <strong>Eggs per week:</strong> {chicken.eggsPerWeek}
            </p>
          </div>
        ))}
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
