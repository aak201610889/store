import React, { useState } from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Temp from "./components/Temp";
import Todo from "./components/Todo";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  const [theme, settheme] = useState(false);
  return (
    <div className="todo-app">
      {/* //using redux here to store the theme best  */}
      <ResponsiveAppBar theme={theme} />
      <Routes>
        <Route path="/todo" element={<Todo theme={theme} />} />
        <Route path="/weather" element={<Temp theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
