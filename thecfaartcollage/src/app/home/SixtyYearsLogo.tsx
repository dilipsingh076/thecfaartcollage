const SixtyYearsLogo = () => (
  <svg viewBox="0 0 80 60" className="w-32 mb-8">
    <g>
      {/* Outer Arc - Yellow */}
      <path
        d="M 12 48 A 32 32 0 0 1 64 28"
        fill="none"
        stroke="#F7D675"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Middle Arc - Orange */}
      <path
        d="M 18 50 A 28 28 0 0 1 58 34"
        fill="none"
        stroke="#F4A261"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Inner Arc - Light Blue */}
      <path
        d="M 24 52 A 24 24 0 0 1 52 38"
        fill="none"
        stroke="#90CDF4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Number 60 */}
      <text
        x="38"
        y="44"
        fontSize="18"
        fontWeight="bold"
        fill="#4A5568"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        60
      </text>
      
      {/* Small "YEARS" text */}
      <text
        x="52"
        y="44"
        fontSize="5"
        fill="#4A5568"
      >
        YEARS
      </text>
    </g>
  </svg>
);

export default SixtyYearsLogo; 