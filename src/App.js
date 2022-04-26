import React from "react";
import "./App.css";
import CreateBtn from "./components/Button";
import ranKey from "./components/CreateRandomKey";

function App() {
  const btnTest = [
    "C",
    "÷",
    "×",
    "-",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "^",
    "7",
    "8",
    "9",
    "=",
  ];
  return (
    <React.Fragment>
      <main className="container">
        <aside className="form">
          <input
            type="text"
            placeholder="0"
            className="inputNumber"
            onInput={(evt) => {
              evt.target.value = evt.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }}
          />
          {btnTest.map((item) => {
            return (
              <CreateBtn
                key={ranKey()}
                colorStyle={isNaN(item) ? "btn-operator" : "btn-number"}
                btnValue={item}
              />
            );
          })}
        </aside>
      </main>
    </React.Fragment>
  );
}

export default App;
