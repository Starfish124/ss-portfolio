/**
 * Per-project micro-animations: tiny ink pictograms, one per system.
 * Pure SVG + CSS keyframes (g-* classes in globals.css) — no JS timers.
 */

const S = {
  stroke: "#141414",
  strokeWidth: 1.5,
  fill: "none",
  strokeLinecap: "square" as const,
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="glyph h-8 w-8 shrink-0 sm:h-9 sm:w-9" aria-hidden>
      {children}
    </svg>
  );
}

export default function Glyph({ code }: { code: string }) {
  switch (code) {
    case "GT-CODE":
      // terminal prompt: chevron, growing command line, blinking caret
      return (
        <Frame>
          <path d="M6 11l5 5-5 5" {...S} />
          <rect x="14" y="20" width="11" height="1.6" fill={S.stroke} className="g-type" />
          <rect x="14" y="12" width="3.4" height="4.5" fill={S.stroke} className="blink" />
        </Frame>
      );
    case "GT-ASSURE":
      // finding drafted, then the human check draws in
      return (
        <Frame>
          <rect x="7" y="5" width="18" height="22" {...S} />
          <line x1="11" y1="11" x2="21" y2="11" {...S} opacity={0.45} />
          <line x1="11" y1="15" x2="21" y2="15" {...S} opacity={0.45} />
          <path d="M11 21l3.5 3.5L22 17" {...S} className="g-draw" />
        </Frame>
      );
    case "GLASSBOX":
      // wireframe box with a scanline passing through — you can see inside
      return (
        <Frame>
          <path d="M16 4l10 5.5v13L16 28 6 22.5v-13L16 4z" {...S} />
          <path d="M6 9.5L16 15l10-5.5M16 15v13" {...S} opacity={0.45} />
          <line x1="4" y1="16" x2="28" y2="16" {...S} className="g-sweep" />
        </Frame>
      );
    case "BLUEPRINT":
      // two lanes separating from one data layer
      return (
        <Frame>
          <path d="M4 16l12-6 12 6-12 6-12-6z" {...S} />
          <path d="M4 10l12-6 12 6-12 6-12-6z" {...S} className="g-lift" opacity={0.8} />
          <path d="M4 22l12-6 12 6-12 6-12-6z" {...S} className="g-sink" opacity={0.5} />
        </Frame>
      );
    case "DAEMON-OS":
      // HUD reticle: corner brackets + pinch dot
      return (
        <Frame>
          <path d="M5 10V5h5M22 5h5v5M27 22v5h-5M10 27H5v-5" {...S} />
          <circle cx="16" cy="16" r="2.2" fill={S.stroke} className="g-pulse" />
        </Frame>
      );
    case "DAEMON-DECK":
      // CRT terminal: screen, refresh beam, prompt cursor
      return (
        <Frame>
          <rect x="4" y="6" width="24" height="20" {...S} />
          <line x1="6" y1="12" x2="26" y2="12" {...S} opacity={0.6} className="g-sweep-sm" />
          <rect x="8" y="20" width="4" height="2" fill={S.stroke} className="blink" />
        </Frame>
      );
    case "JARVIS":
      // voice: equalizer bars
      return (
        <Frame>
          {[8, 13.5, 19, 24.5].map((x, i) => (
            <rect
              key={x}
              x={x - 1}
              y="8"
              width="2"
              height="16"
              fill={S.stroke}
              className="g-bar"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </Frame>
      );
    case "HIT-COCKPIT":
      // reconciliation: two ledger bars slide into alignment
      return (
        <Frame>
          <line x1="6" y1="10" x2="26" y2="10" {...S} opacity={0.45} />
          <rect x="6" y="14" width="12" height="3" fill={S.stroke} className="g-align-a" />
          <rect x="14" y="20" width="12" height="3" fill={S.stroke} opacity={0.55} className="g-align-b" />
          <line x1="6" y1="27" x2="26" y2="27" {...S} opacity={0.45} />
        </Frame>
      );
    case "STRIDE":
      // content cards cascading toward publish
      return (
        <Frame>
          <rect x="5" y="9" width="16" height="12" {...S} opacity={0.35} />
          <rect x="8" y="12" width="16" height="12" {...S} opacity={0.6} />
          <rect x="11" y="15" width="16" height="12" {...S} className="g-slide" />
        </Frame>
      );
    case "CPI-MOTOR":
      // a chip pulsing inside a browser window — the model lives in the tab
      return (
        <Frame>
          <rect x="4" y="6" width="24" height="20" {...S} />
          <line x1="4" y1="11" x2="28" y2="11" {...S} opacity={0.6} />
          <rect x="12" y="15" width="8" height="7" fill={S.stroke} className="g-pulse" />
          <path d="M14 15v-2m4 2v-2m-4 11v-2m4 2v-2m-6-5h-2m14 0h-2m-10 3h-2m14 0h-2" {...S} />
        </Frame>
      );
    case "PI-NETRUNNER":
      // tiny TFT with a live pixel and signal ticks
      return (
        <Frame>
          <rect x="5" y="8" width="22" height="16" {...S} />
          <rect x="9" y="12" width="3" height="3" fill={S.stroke} className="blink" />
          {[17, 20.5, 24].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1={21 - (i + 1) * 2.6}
              x2={x}
              y2="21"
              {...S}
              className="g-bar"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </Frame>
      );
    default:
      return (
        <Frame>
          <rect x="8" y="8" width="16" height="16" {...S} />
        </Frame>
      );
  }
}
