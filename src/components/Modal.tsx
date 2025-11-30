import React from "react";
export default function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal" data-testid="modal">
      <div className="modal-content">
        <h3>React Modal</h3>
        <p>This modal appears after clicking a button.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
