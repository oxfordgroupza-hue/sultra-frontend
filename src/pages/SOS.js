import React from "react";

function SOS() {
  return (
    <div>
      <h2>Emergency SOS</h2>
      <button style={{ background: "red", color: "white", padding: "1em" }}>
        Send SOS Alert
      </button>
      <p>This will alert your trusted contacts. (Feature coming soon!)</p>
    </div>
  );
}

export default SOS;