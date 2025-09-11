import React from "react";

// The ": React.FC" part is TypeScript - aka this is a React Functional Component
const App: React.FC = () => {
  // This is a TypeScript variable with a type annotation!
  const appName: string = "Chickens App";

  return (
    <div>
      <h1>🐔 {appName}</h1>
      <p>Welcome to your TypeScript React app!</p>
    </div>
  );
};

export default App;
