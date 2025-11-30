import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";
import * as Unused from "./unused";

const AUTO_TRIGGER = false;

export default function App(): JSX.Element {
  const [time, setTime] = useState<string>("Not loaded");
  const [show, setShow] = useState<boolean>(false);
  const [Widget, setWidget] = useState<React.ComponentType | null>(null);

  async function loadData() {
    setTime("Loading...");
    await new Promise((r) => setTimeout(r, 300));
    setTime("Loaded at " + new Date().toLocaleTimeString());
  }

  function showModal() {
    setShow(true);
  }

  async function loadWidget() {
    const module = await import("./components/LazyWidget");
    setWidget(() => module.default);
  }

  useEffect(() => {
    if (AUTO_TRIGGER) {
      loadData();
      showModal();
      loadWidget();
    }
  }, []);

  return (
    <div>
      <h1>React + TS Coverage Demo</h1>

      <button onClick={showModal}>Open Modal</button>
      <button onClick={loadData}>Load Data</button>
      <button onClick={loadWidget}>Load Lazy Widget</button>

      <p>Time: {time}</p>

      {show && <Modal onClose={() => setShow(false)} />}
      {Widget && <Widget />}
    </div>
  );
}
