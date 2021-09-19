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
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="Footer">
          <small>
            Open source{" "}
            <a
              href="https://github.com/katypants/dictionary-project"
              target="_blank"
              rel="noreferrer"
              className="Footer-link"
            >
              code
            </a>{" "}
            by Kate Dowd
          </small>
        </footer>
      </div>
    </div>
  );
}
