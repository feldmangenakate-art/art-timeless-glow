import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BG       = "rgba(20,17,12,0.85)";
const BG_HOVER = "rgba(36,30,18,0.92)";
const GOLD     = "#C9A84C";

export default function TimelineButton() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => navigate("/timeline")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 50,
        background: hovered ? BG_HOVER : BG,
        color: GOLD,
        border: `0.5px solid ${GOLD}`,
        borderRadius: "2px",
        padding: "8px 16px",
        fontFamily: "monospace",
        fontSize: "10px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        cursor: "pointer",
        transition: "background 0.15s ease",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      ← Timeline
    </button>
  );
}
