import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="Header">
          <h1>📖 Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="Footer">
          <small>
            <a
              href="https://github.com/katypants/dictionary-project"
              target="_blank"
              rel="noreferrer"
              className="Footer-link"
            >
              Open-source code
            </a>{" "}
            by Kate Dowd
          </small>
        </footer>
      </div>
    </div>
  );
}
