export default function BuiltForGreatBrands() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="built-for-brands-logo"
    >
      {/* Outer oval frame */}
      <ellipse
        cx="400"
        cy="200"
        rx="380"
        ry="180"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />

      {/* Middle oval frame */}
      <ellipse
        cx="400"
        cy="200"
        rx="370"
        ry="170"
        stroke="black"
        strokeWidth="1"
        fill="none"
      />

      {/* Inner oval frame */}
      <ellipse
        cx="400"
        cy="200"
        rx="360"
        ry="160"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />

      {/* Top left decorative element */}
      <g transform="translate(150, 40)">
        <line x1="0" y1="0" x2="0" y2="40" stroke="black" strokeWidth="2" />
        <line x1="0" y1="0" x2="40" y2="0" stroke="black" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="black" />
      </g>

      {/* Bottom right decorative element */}
      <g transform="translate(650, 360)">
        <line x1="0" y1="0" x2="0" y2="-40" stroke="black" strokeWidth="2" />
        <line x1="0" y1="0" x2="-40" y2="0" stroke="black" strokeWidth="2" />
        <circle cx="-20" cy="-20" r="3" fill="black" />
      </g>

      {/* Text */}
      <text
        x="400"
        y="180"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="60"
        fontWeight="400"
        letterSpacing="6"
        fill="black"
      >
        BUILT FOR
      </text>

      <text
        x="400"
        y="250"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="60"
        fontWeight="400"
        letterSpacing="6"
        fill="black"
      >
        GREAT BRANDS
      </text>
    </svg>
  );
}
