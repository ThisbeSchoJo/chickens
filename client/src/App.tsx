import React, { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import { Chicken } from "./types";
import ChickenCard from "./components/ChickenCard";

// The ": React.FC" part is TypeScript - aka this is a React Functional Component
const App: React.FC = () => {
  // State to control whether to show landing page or main app
  const [showLanding, setShowLanding] = useState<boolean>(true);

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

  // Function to handle entering the main app from landing page
  const handleEnterApp = (): void => {
    setShowLanding(false);
  };

  // This function handles when someone submits the form to add a new chicken
  const handleAddChicken = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // This prevents the page from refreshing when the form is submitted

    // Get the form element
    const form = event.currentTarget;

    // Get the values from each input field
    const name = (
      form.elements.namedItem("chicken-name") as HTMLInputElement
    ).value.trim();
    const breed = (
      form.elements.namedItem("chicken-breed") as HTMLInputElement
    ).value.trim();
    const age = parseInt(
      (form.elements.namedItem("chicken-age") as HTMLInputElement).value
    );
    const eggsPerWeek = parseInt(
      (form.elements.namedItem("chicken-eggs") as HTMLInputElement).value
    );

    // Validate that all fields are filled and have valid values
    if (!name || !breed || isNaN(age) || isNaN(eggsPerWeek)) {
      alert("Please fill in all fields with valid data!");
      return;
    }

    // Validate age range (0-20 years is reasonable for chickens)
    if (age < 0 || age > 20) {
      alert("Please enter a valid age (0-20 years)!");
      return;
    }

    // Validate eggs per week range (0-10 is reasonable)
    if (eggsPerWeek < 0 || eggsPerWeek > 10) {
      alert("Please enter a valid number of eggs per week (0-10)!");
      return;
    }

    // Create a new chicken object using our Chicken interface
    const newChicken: Chicken = {
      name: name,
      breed: breed,
      age: age,
      eggsPerWeek: eggsPerWeek,
    };

    // Add the new chicken to our existing flock using setMyFlock
    setMyFlock([...myFlock, newChicken]);

    // Clear the form after adding the chicken
    form.reset();
  };

  // This is a TypeScript array with type annotation!
  const chickenBreeds: string[] = [
    "Rhode Island Red",
    "Leghorn",
    "Sussex",
    "Orpington",
  ];

  // This is a TypeScript array of Chicken objects using our interface!
  // Now it is a React state variable so it can change
  const [myFlock, setMyFlock] = useState<Chicken[]>([
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
  ]);

  // Show landing page first, then main app
  if (showLanding) {
    return <LandingPage onEnterApp={handleEnterApp} />;
  }

  return (
    <div className="app-container">
      <h1>🐔 {appName}</h1>
      <p className="welcome-message">{createGreeting(appName)}</p>
      <div className="flock-header">
        <h2>My Flock:</h2>
        <span className="flock-count">🐔 {myFlock.length} chickens</span>
      </div>
      <div className="total-eggs">
        <strong>Total eggs per week:</strong> {calculateTotalEggs(myFlock)} 🥚
      </div>
      <div>
        {myFlock.map((chicken, index) => (
          <ChickenCard key={index} chicken={chicken} />
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

      {/* New form to add chickens! */}
      <h2>Add a New Chicken:</h2>
      <form className="add-chicken-form" onSubmit={handleAddChicken}>
        <div className="form-group">
          <label htmlFor="chicken-name">Name:</label>
          <input
            type="text"
            id="chicken-name"
            placeholder="Enter chicken name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chicken-breed">Breed:</label>
          <input
            type="text"
            id="chicken-breed"
            placeholder="Enter breed"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chicken-age">Age (years):</label>
          <input
            type="number"
            id="chicken-age"
            placeholder="Enter age"
            min="0"
            max="20"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chicken-eggs">Eggs per week:</label>
          <input
            type="number"
            id="chicken-eggs"
            placeholder="Enter eggs per week"
            min="0"
            max="10"
            required
          />
        </div>

        <button type="submit" className="add-chicken-btn">
          Add Chicken 🐔
        </button>
      </form>
    </div>
  );
};

export default App;
