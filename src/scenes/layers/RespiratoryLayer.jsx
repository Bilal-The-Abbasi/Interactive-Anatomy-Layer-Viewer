export default function RespiratoryLayer({ opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 400 900"
      width="100%"

      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", top: 0, left: 0, opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Lung gradient — pinkish-red */}
        <radialGradient id="resp-lung-grad" cx="40%" cy="35%" r="62%">
          <stop offset="0%" stopColor="#F4A7B9" />
          <stop offset="55%" stopColor="#E06080" />
          <stop offset="100%" stopColor="#B03060" />
        </radialGradient>
        <radialGradient id="resp-lung-r-grad" cx="60%" cy="35%" r="62%">
          <stop offset="0%" stopColor="#F4A7B9" />
          <stop offset="55%" stopColor="#E06080" />
          <stop offset="100%" stopColor="#B03060" />
        </radialGradient>
        {/* Trachea gradient */}
        <linearGradient id="resp-trachea-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8E6F8" />
          <stop offset="50%" stopColor="#E8F4FD" />
          <stop offset="100%" stopColor="#B0D8F0" />
        </linearGradient>
        {/* Bronchi gradient */}
        <linearGradient id="resp-bronchi-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D0EAF8" />
          <stop offset="100%" stopColor="#A8D0EC" />
        </linearGradient>
      </defs>

      {/* ═══════════════════════════
          TRACHEA (windpipe)
      ═══════════════════════════ */}
      {/* Tracheal tube */}
      <path
        d="M194,140 C193,148 193,158 193,168 C193,185 193,200 193,215
           C193,225 193,235 193,245
           L207,245 C207,235 207,225 207,215 C207,200 207,185 207,168
           C207,158 207,148 207,140Z"
        fill="url(#resp-trachea-grad)"
        stroke="#88C0DC"
        strokeWidth="0.8"
      />
      {/* Tracheal cartilage rings */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <path key={`tr${i}`}
          d={`M193,${148 + i * 10} C196,${144 + i * 10} 204,${144 + i * 10} 207,${148 + i * 10}`}
          fill="none" stroke="#88C0DC" strokeWidth="1.2" strokeLinecap="round"
        />
      ))}

      {/* ═══════════════════════════
          PRIMARY BRONCHI
      ═══════════════════════════ */}
      {/* Left main bronchus */}
      <path
        d="M193,246 C188,248 178,252 165,256 C158,258 152,260 148,263"
        fill="none"
        stroke="#A8D0EC"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M193,246 C188,248 178,252 165,256 C158,258 152,260 148,263"
        fill="none"
        stroke="#D0EAF8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Right main bronchus */}
      <path
        d="M207,246 C212,248 222,252 235,256 C242,258 248,260 252,263"
        fill="none"
        stroke="#A8D0EC"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M207,246 C212,248 222,252 235,256 C242,258 248,260 252,263"
        fill="none"
        stroke="#D0EAF8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* ═══════════════════════════
          LEFT LUNG
      ═══════════════════════════ */}
      <path
        d="M148,263
           C140,272 135,286 133,302 C131,318 132,336 134,354
           C136,372 139,390 142,406 C145,422 148,436 150,448
           C152,456 154,462 157,466
           C165,460 172,450 177,436 C182,420 184,400 184,378
           C184,356 182,334 179,312 C176,290 172,272 168,260
           C162,260 155,261 148,263Z"
        fill="url(#resp-lung-grad)"
        stroke="#C05070"
        strokeWidth="0.8"
      />
      {/* Left lung lobe fissure */}
      <path
        d="M148,300 C155,318 162,338 166,358 C170,378 172,398 172,416"
        fill="none"
        stroke="#B03060"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Left secondary bronchi */}
      <path d="M160,268 C157,285 155,305 154,325" fill="none" stroke="#A8D0EC" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M160,268 C163,290 165,312 165,335" fill="none" stroke="#A8D0EC" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M160,268 C155,300 153,330 152,360" fill="none" stroke="#A8D0EC" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* ═══════════════════════════
          RIGHT LUNG (slightly larger — 3 lobes)
      ═══════════════════════════ */}
      <path
        d="M252,263
           C260,272 265,286 267,302 C269,318 268,336 266,354
           C264,372 261,390 258,406 C255,422 252,436 250,448
           C248,456 246,462 243,466
           C235,460 228,450 223,436 C218,420 216,400 216,378
           C216,356 218,334 221,312 C224,290 228,272 232,260
           C238,260 245,261 252,263Z"
        fill="url(#resp-lung-r-grad)"
        stroke="#C05070"
        strokeWidth="0.8"
      />
      {/* Right lung fissures (2 — oblique and horizontal) */}
      <path
        d="M252,296 C245,314 240,332 238,352 C236,372 236,392 237,412"
        fill="none"
        stroke="#B03060"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M256,300 C250,304 244,306 238,306"
        fill="none"
        stroke="#B03060"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Right secondary bronchi */}
      <path d="M240,268 C243,285 245,305 246,325" fill="none" stroke="#A8D0EC" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M240,268 C237,290 235,312 235,335" fill="none" stroke="#A8D0EC" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M240,268 C245,300 247,330 248,360" fill="none" stroke="#A8D0EC" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* ═══════════════════════════
          DIAPHRAGM (dome-shaped muscle at base of lungs)
      ═══════════════════════════ */}
      <path
        d="M135,462 C148,448 168,440 200,440 C232,440 252,448 265,462"
        fill="none"
        stroke="#E8B4C0"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M135,462 C148,448 168,440 200,440 C232,440 252,448 265,462"
        fill="none"
        stroke="#F8D8E0"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* ═══════════════════════════
          LARYNX / PHARYNX (throat)
      ═══════════════════════════ */}
      <path
        d="M190,130 C188,132 187,136 187,140
           L213,140 C213,136 212,132 210,130
           C207,128 204,127 200,127 C196,127 193,128 190,130Z"
        fill="url(#resp-trachea-grad)"
        stroke="#88C0DC"
        strokeWidth="0.7"
      />
      {/* Thyroid cartilage (Adam's apple) */}
      <path
        d="M193,133 C196,130 204,130 207,133 C205,136 204,138 200,139 C196,138 195,136 193,133Z"
        fill="#B8D8F0"
        stroke="#88C0DC"
        strokeWidth="0.6"
      />
    </svg>
  );
}
