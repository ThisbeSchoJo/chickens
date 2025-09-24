import React, { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import { Chicken } from "./types";
import ChickenCard from "./components/ChickenCard";

// The ": React.FC" part is TypeScript - aka this is a React Functional Component
const App: React.FC = () => {
  // State to control whether to show landing page or main app
  const [showLanding, setShowLanding] = useState<boolean>(true);

  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    eggsPerWeek: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    breed: "",
    age: "",
    eggsPerWeek: "",
  });

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

  // Handle input changes for controlled inputs
  const handleInputChange = (field: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const errors = {
      name: "",
      breed: "",
      age: "",
      eggsPerWeek: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.breed.trim()) {
      errors.breed = "Breed is required";
    }

    const age = parseInt(formData.age);
    if (!formData.age || isNaN(age)) {
      errors.age = "Please enter a valid age";
    } else if (age < 0 || age > 20) {
      errors.age = "Age must be between 0 and 20 years";
    }

    const eggsPerWeek = parseInt(formData.eggsPerWeek);
    if (!formData.eggsPerWeek || isNaN(eggsPerWeek)) {
      errors.eggsPerWeek = "Please enter a valid number";
    } else if (eggsPerWeek < 0 || eggsPerWeek > 10) {
      errors.eggsPerWeek = "Eggs per week must be between 0 and 10";
    }

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== "");
  };

  // This function handles when someone submits the form to add a new chicken
  const handleAddChicken = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create a new chicken object using our Chicken interface
    const newChicken: Chicken = {
      id: Date.now(),
      name: formData.name.trim(),
      breed: formData.breed.trim(),
      age: parseInt(formData.age),
      eggsPerWeek: parseInt(formData.eggsPerWeek),
    };

    // Add the new chicken to our existing flock
    setMyFlock([...myFlock, newChicken]);

    // Clear the form after adding the chicken
    setFormData({
      name: "",
      breed: "",
      age: "",
      eggsPerWeek: "",
    });
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
      id: 1,
      name: "Henrietta",
      breed: "Rhode Island Red",
      age: 2,
      eggsPerWeek: 5,
    },
    {
      id: 2,
      name: "Clucky",
      breed: "Leghorn",
      age: 1,
      eggsPerWeek: 6,
    },
    {
      id: 3,
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
        {myFlock.map((chicken) => (
          <ChickenCard key={chicken.id} chicken={chicken} />
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
            name="chicken-name"
            placeholder="Enter chicken name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={formErrors.name ? "error" : ""}
          />
          {formErrors.name && (
            <span className="error-message">{formErrors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="chicken-breed">Breed:</label>
          <input
            type="text"
            id="chicken-breed"
            name="chicken-breed"
            placeholder="Enter breed"
            value={formData.breed}
            onChange={(e) => handleInputChange("breed", e.target.value)}
            className={formErrors.breed ? "error" : ""}
          />
          {formErrors.breed && (
            <span className="error-message">{formErrors.breed}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="chicken-age">Age (years):</label>
          <input
            type="number"
            id="chicken-age"
            name="chicken-age"
            placeholder="Enter age"
            min="0"
            max="20"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            className={formErrors.age ? "error" : ""}
          />
          {formErrors.age && (
            <span className="error-message">{formErrors.age}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="chicken-eggs">Eggs per week:</label>
          <input
            type="number"
            id="chicken-eggs"
            name="chicken-eggs"
            placeholder="Enter eggs per week"
            min="0"
            max="10"
            value={formData.eggsPerWeek}
            onChange={(e) => handleInputChange("eggsPerWeek", e.target.value)}
            className={formErrors.eggsPerWeek ? "error" : ""}
          />
          {formErrors.eggsPerWeek && (
            <span className="error-message">{formErrors.eggsPerWeek}</span>
          )}
        </div>

        <button type="submit" className="add-chicken-btn">
          Add Chicken 🐔
        </button>
      </form>
    </div>
  );
};

export default App;
