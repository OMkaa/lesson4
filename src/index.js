import React from "react";
import ReactDOM from "react-dom";
import Lesson4 from "./App.js";

const App = () => {
  return (
    <div>
      <h1>Пример формы регистрации</h1>
      <Lesson4 /> {}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
