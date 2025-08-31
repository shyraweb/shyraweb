export default function Logo({
  width = "100",
  height = "70",
  fontSizeClass = "text-[28px]",
}: {
  width?: string;
  height?: string;
  fontSizeClass?: string;
}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="primaryGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#9810fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#ed4b9b" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9810fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#ed4b9b" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9810fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#ed4b9b" stopOpacity="1" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor="#000"
              floodOpacity="0.3"
            />
          </filter>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#primaryGradient)"
          opacity="0.15"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;360 50 50"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        <g transform="translate(15, 15)" filter="url(#shadow)">
          <rect
            x="5"
            y="10"
            width="60"
            height="50"
            rx="8"
            fill="url(#primaryGradient)"
            opacity="0.9"
          />
          <rect
            x="8"
            y="13"
            width="54"
            height="44"
            rx="6"
            fill="rgba(255,255,255,0.95)"
          />

          <rect
            x="8"
            y="13"
            width="54"
            height="12"
            rx="6"
            fill="url(#textGradient)"
          />

          <circle cx="15" cy="19" r="2.5" fill="#ff5f56">
            <animate
              attributeName="r"
              values="2.5;3;2.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="23" cy="19" r="2.5" fill="#ffbd2e">
            <animate
              attributeName="r"
              values="2.5;3;2.5"
              dur="2s"
              begin="0.3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="31" cy="19" r="2.5" fill="#27ca3f">
            <animate
              attributeName="r"
              values="2.5;3;2.5"
              dur="2s"
              begin="0.6s"
              repeatCount="indefinite"
            />
          </circle>

          <g opacity="0.8">
            <rect
              x="12"
              y="30"
              width="20"
              height="6"
              rx="2"
              fill="url(#accentGradient)"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.05;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="35"
              y="30"
              width="24"
              height="6"
              rx="2"
              fill="url(#primaryGradient)"
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.05;1"
                dur="3s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="12"
              y="39"
              width="47"
              height="3"
              rx="1.5"
              fill="url(#textGradient)"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="4s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="12"
              y="45"
              width="32"
              height="3"
              rx="1.5"
              fill="url(#accentGradient)"
              opacity="0.6"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.9;0.6"
                dur="4s"
                begin="1s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="12"
              y="51"
              width="25"
              height="4"
              rx="2"
              fill="url(#primaryGradient)"
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.05;1"
                dur="3s"
                begin="1s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="40"
              y="51"
              width="19"
              height="4"
              rx="2"
              fill="url(#accentGradient)"
              opacity="0.6"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.05;1"
                dur="3s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </rect>
          </g>

          <text
            x="65"
            y="25"
            fontFamily="monospace"
            fontSize="12"
            fill="url(#primaryGradient)"
            opacity="0.6"
            filter="url(#textGlow)"
          >
            {"</>"}
          </text>
        </g>
      </svg>
      <span className={`text-text-primary font-bold ${fontSizeClass}`}>
        ShyRa Web
      </span>
    </>
  );
}
