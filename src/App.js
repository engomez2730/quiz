import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioComponent from "./Components/Inicio"; // Updated import
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import "./App.css";
import Form from "./Components/Form";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Admin/Login";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<InicioComponent />} />
          <Route path="/form" element={<Form />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
