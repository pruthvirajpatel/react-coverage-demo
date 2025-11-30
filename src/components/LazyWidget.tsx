import React from "react";
export default function LazyWidget() {
  return (
    <div data-testid="lazy-widget" style={{ padding: 10, border: "1px solid #ccc" }}>
      <h3>Lazy Widget Loaded</h3>
    </div>
  );
}
