import React from "react";

const PAGE_BG = "#EDE8DF";

interface Props {
  isSticky: boolean;
  left: React.ReactNode;
  right: string;
}

export default function StickyBreadcrumb({ isSticky, left, right }: Props) {
  return (
    <div
      aria-hidden={!isSticky}
      style={{
        position: "fixed",
        top: "56px",        // nav is h-14 = 56px
        left: 0,
        right: 0,
        zIndex: 48,
        height: "40px",
        background: PAGE_BG,
        borderBottom: "0.5px solid rgba(201,168,76,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        opacity: isSticky ? 1 : 0,
        pointerEvents: isSticky ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {left}
      </div>
      <span style={{
        fontFamily: "monospace",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        color: "rgba(42,30,16,0.35)",
        whiteSpace: "nowrap" as const,
        userSelect: "none" as const,
        maxWidth: "40%",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}>
        {right}
      </span>
    </div>
  );
}
