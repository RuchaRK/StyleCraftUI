import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Features/Home";
import { Components } from "./Features/Components";
import { ComponentNotFound } from "./Features/ComponentNotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component-not-found" element={<ComponentNotFound />} />
        <Route path="/components/*" element={<Components />} />
      </Routes>
    </div>
  );
}
