import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Форма регистрации</h1>
      <RegistrationForm />
    </div>
  );
};

export default App;
