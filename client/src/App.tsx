import React from "react";

// The ": React.FC" part is TypeScript - aka this is a React Functional Component
const App: React.FC = () => {
  // This is a TypeScript variable with a type annotation!
  const appName: string = "Chickens App";

  // This is a TypeScript function with parameter and return types!
  const createGreeting = (name: string): string => {
    return `Welcome to ${name}!`;
  };

  return (
    <div>
      <h1>🐔 {appName}</h1>
      <p>{createGreeting(appName)}</p>
    </div>
  );
};

export default App;
