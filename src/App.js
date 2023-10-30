import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioComponent from "./Components/Inicio"; // Updated import
import Quiz from "./Components/Quiz";
import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<InicioComponent />} />
          <Route path="/form" element={<Form />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
