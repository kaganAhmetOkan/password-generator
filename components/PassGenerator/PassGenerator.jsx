"use client";
import style from "./PassGenerator.module.css";
import { useState } from "react";

export default function PassGenerator() {
  const [incNumbers, setIncNumbers] = useState(true);
  const [incLower, setIncLower] = useState(true);
  const [incUpper, setIncUpper] = useState(true);
  const [incSpecial, setIncSpecial] = useState(false);
  const [passLength, setPassLength] = useState(16); 

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      incNumbers,
      incLower,
      incUpper,
      incSpecial,
      passLength,
    });
  };

  return (
    <div className={style.main}>
      <h1>Password:</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="include-numbers">
          <input
            type="checkbox"
            defaultChecked
            required
            onChange={() => setIncNumbers(!incNumbers)}
            id="include-numbers"
          ></input>
          {`Numbers (e.g. 123)`}
        </label>
        <label htmlFor="include-lower">
          <input
            type="checkbox"
            defaultChecked
            id="include-lower"
            onChange={() => setIncLower(!incLower)}
          ></input>
          {`Lowercase letters (e.g. abc)`}
        </label>
        <label htmlFor="include-upper">
          <input
            type="checkbox"
            defaultChecked
            id="include-upper"
            onChange={() => setIncUpper(!incUpper)}
          ></input>
          {`Uppercase letters (e.g. ABC)`}
        </label>
        <label htmlFor="include-special">
          <input
            type="checkbox"
            id="include-special"
            onChange={() => setIncSpecial(!incSpecial)}
          ></input>
          {`Special characters (e.g. !?*)`}
        </label>
        <label htmlFor="pass-length">
          <input
            type="number"
            inputMode="numeric"
            value={passLength}
            onChange={event => setPassLength(Number.parseInt(event.target.value))}
            className={style.lengthInput}
            min={4}
            max={99}
            required
            id="pass-length"
          ></input>
          {`Length`}
        </label>
        <button type="submit">Generate!</button>
      </form>
    </div>
  );
};