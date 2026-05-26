const GOLD = "#C9A84C";
const DARK = "#2A1E10";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(201,168,76,0.12)",
        padding: "2rem 2rem",
        textAlign: "center",
        background: "transparent",
      }}
    >
      <p
        style={{
          fontFamily: "'Raleway', system-ui, sans-serif",
          fontWeight: 300,
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.35)",
        }}
      >
        Art Through the Ages
      </p>
    </footer>
  );
}
