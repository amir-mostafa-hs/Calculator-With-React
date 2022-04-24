import React from "react";
import "./App.css";

function App() {
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
                .replace(/[^0-9.&-]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }}
          />
        </aside>
      </main>
    </React.Fragment>
  );
}

export default App;
