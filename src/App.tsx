import React, { useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const sampleState = atom({
  key: " sampleState",
  default: true,
});

const useSelectState = selector({
  key: "useSelectState",
  get: ({ get }) => {
    const state = get(sampleState);

    return state ? "✅" : "⛔";
  },
});

const CheckBox = () => {
  const [state, setState] = useRecoilState(sampleState);
  const selectState = useRecoilValue(useSelectState);
  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={state}
        onChange={() => {
          setState(!state);
        }}
      />
      <strong style={{ color: "#fff" }}>true</strong>
      {selectState}
    </div>
  );
};

const Button = () => {
  const [state, setState] = useRecoilState(sampleState);
  return (
    <button
      style={{
        backgroundColor: `${state ? "#7952B3" : "#FFC107"}`,
        border: "none",
        padding: "1rem 2rem",
        transition: "all",
      }}
      onClick={() => setState(!state)}
    >
      👩‍💻
    </button>
  );
};

function App() {
  const [state, setState] = useRecoilState(sampleState);

  return (
    <div
      style={{ backgroundColor: "#444444", minHeight: "100vh", width: "100%" }}
    >
      <div style={{ width: "65%", margin: "0 auto", paddingTop: "5rem" }}>
        <span style={{ color: "#fff" }}>STATE</span> : {`${state}`}
        <strong>leran/atom</strong>
        <hr />
        <Button />
        <hr />
        <CheckBox />
      </div>
    </div>
  );
}

export default App;
