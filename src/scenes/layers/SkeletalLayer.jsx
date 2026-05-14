export default function SkeletalLayer({ opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 400 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main bone gradient — ivory to warm tan */}
        <linearGradient id="skel-bone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F2E8" />
          <stop offset="50%" stopColor="#E8E4D0" />
          <stop offset="100%" stopColor="#D4CEB8" />
        </linearGradient>

        {/* Long bone shaft gradient — gives cylindrical depth */}
        <linearGradient id="skel-shaft-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8C4B0" />
          <stop offset="25%" stopColor="#E8E4D0" />
          <stop offset="55%" stopColor="#F5F2E8" />
          <stop offset="100%" stopColor="#B8B098" />
        </linearGradient>

        {/* Left-side shaft — light on inner face */}
        <linearGradient id="skel-shaft-l-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8B098" />
          <stop offset="35%" stopColor="#E8E4D0" />
          <stop offset="65%" stopColor="#F5F2E8" />
          <stop offset="100%" stopColor="#C8C4B0" />
        </linearGradient>

        {/* Epiphysis radial gradient — sphere look for bone ends */}
        <radialGradient id="skel-epiphysis-grad" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F5F2E8" />
          <stop offset="55%" stopColor="#E0DBC4" />
          <stop offset="100%" stopColor="#B8B098" />
        </radialGradient>

        {/* Skull dome gradient */}
        <radialGradient id="skel-skull-grad" cx="42%" cy="36%" r="58%">
          <stop offset="0%" stopColor="#F5F2E8" />
          <stop offset="60%" stopColor="#E8E4D0" />
          <stop offset="100%" stopColor="#C8C4B0" />
        </radialGradient>

        {/* Pelvis gradient */}
        <linearGradient id="skel-pelvis-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D0" />
          <stop offset="100%" stopColor="#C8C4B0" />
        </linearGradient>

        {/* Rib gradient */}
        <linearGradient id="skel-rib-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D0" />
          <stop offset="100%" stopColor="#D0CCBA" />
        </linearGradient>

        {/* Cartilage */}
        <linearGradient id="skel-cart-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8D4C0" />
          <stop offset="100%" stopColor="#C8C4B0" />
        </linearGradient>

        {/* Patella radial */}
        <radialGradient id="skel-patella-grad" cx="40%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#F0EDD8" />
          <stop offset="100%" stopColor="#C0BC A8" />
        </radialGradient>

        {/* Foot bone gradient */}
        <linearGradient id="skel-foot-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D0" />
          <stop offset="100%" stopColor="#D0CCBA" />
        </linearGradient>
      </defs>

      {/* ═══════════════════════════════════════════════════════
          SKULL — CRANIUM
      ═══════════════════════════════════════════════════════ */}
      {/* Main cranial dome */}
      <path
        d="M200,18
           C224,18 244,28 256,44 C268,60 272,78 268,96
           C264,110 256,120 248,126
           C244,130 238,133 232,135
           C228,137 220,139 214,140
           C208,141 204,141 200,141
           C196,141 192,141 186,140
           C180,139 172,137 168,135
           C162,133 156,130 152,126
           C144,120 136,110 132,96
           C128,78 132,60 144,44
           C156,28 176,18 200,18Z"
        fill="url(#skel-skull-grad)"
        stroke="#B8B098"
        strokeWidth="1"
      />

      {/* Coronal suture */}
      <path
        d="M148,52 C158,56 168,54 178,56 C184,57 190,58 196,58
           C202,58 208,57 214,56 C224,54 234,56 244,52"
        fill="none"
        stroke="#C8C4B0"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Sagittal suture (top midline) */}
      <path
        d="M200,20 C200,30 200,40 200,52 C200,56 200,58 200,60"
        fill="none"
        stroke="#C8C4B0"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Temporal bone boundary left */}
      <path
        d="M140,80 C144,72 150,66 154,70 C152,80 148,90 144,96"
        fill="none"
        stroke="#C8C4B0"
        strokeWidth="0.7"
      />
      {/* Temporal bone boundary right */}
      <path
        d="M260,80 C256,72 250,66 246,70 C248,80 252,90 256,96"
        fill="none"
        stroke="#C8C4B0"
        strokeWidth="0.7"
      />

      {/* Orbit sockets (eye openings) */}
      <ellipse cx="182" cy="82" rx="18" ry="14" fill="#3A3628" stroke="#B8B098" strokeWidth="0.8" />
      <ellipse cx="218" cy="82" rx="18" ry="14" fill="#3A3628" stroke="#B8B098" strokeWidth="0.8" />

      {/* Orbit rims (bony edges) */}
      <path d="M164,82 C164,72 172,68 182,68 C192,68 200,72 200,82"
        fill="none" stroke="#D4CEB8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M200,82 C200,72 208,68 218,68 C228,68 236,72 236,82"
        fill="none" stroke="#D4CEB8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Nasal cavity (triangular opening) */}
      <path
        d="M194,100 C196,104 198,108 200,110 C202,108 204,104 206,100
           C204,98 202,97 200,97 C198,97 196,98 194,100Z"
        fill="#3A3628"
        stroke="#B8B098"
        strokeWidth="0.6"
      />

      {/* Nasal bridge */}
      <path d="M196,88 C197,92 198,96 200,98 C202,96 203,92 204,88"
        fill="none" stroke="#C8C4B0" strokeWidth="0.8" />

      {/* Zygomatic arches (cheekbones) */}
      <path
        d="M164,88 C158,88 150,92 148,98 C146,104 150,110 156,112"
        fill="none"
        stroke="#D4CEB8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M236,88 C242,88 250,92 252,98 C254,104 250,110 244,112"
        fill="none"
        stroke="#D4CEB8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Maxilla (upper jaw region) */}
      <path
        d="M180,112 C184,116 190,118 200,119 C210,118 216,116 220,112"
        fill="none"
        stroke="#D4CEB8"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* MANDIBLE — separate from cranium */}
      <path
        d="M172,124
           C168,126 164,130 162,136 C160,142 161,148 163,153
           C166,158 170,160 176,162 C182,164 190,165 200,165
           C210,165 218,164 224,162 C230,160 234,158 237,153
           C239,148 240,142 238,136 C236,130 232,126 228,124
           C220,121 212,120 200,120
           C188,120 180,121 172,124Z"
        fill="url(#skel-bone-grad)"
        stroke="#B8B098"
        strokeWidth="0.8"
      />
      {/* Mandible chin prominence */}
      <path d="M190,162 C194,167 200,168 206,162"
        fill="none" stroke="#C8C4B0" strokeWidth="1" strokeLinecap="round" />
      {/* Mandible rami (vertical parts) */}
      <path d="M172,124 C170,118 168,114 168,110 C168,106 170,102 172,100"
        fill="none" stroke="#C8C4B0" strokeWidth="1" strokeLinecap="round" />
      <path d="M228,124 C230,118 232,114 232,110 C232,106 230,102 228,100"
        fill="none" stroke="#C8C4B0" strokeWidth="1" strokeLinecap="round" />

      {/* Tooth row suggestion */}
      <path d="M178,120 C184,122 192,123 200,123 C208,123 216,122 222,120"
        fill="none" stroke="#B8B098" strokeWidth="0.6" strokeDasharray="2,1.5" />

      {/* ═══════════════════════════════════════════════════════
          VERTEBRAL COLUMN — spine segments
      ═══════════════════════════════════════════════════════ */}
      {/* C1-C7 cervical (neck region, y=140-168) */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={`c${i}`}
          x={194}
          y={140 + i * 4.2}
          width={12}
          height={3.5}
          rx={1.2}
          fill="url(#skel-bone-grad)"
          stroke="#B8B098"
          strokeWidth="0.5"
        />
      ))}

      {/* T1-T12 thoracic (y=168-310) — slightly wider */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <rect
          key={`t${i}`}
          x={192}
          y={170 + i * 11.5}
          width={16}
          height={9}
          rx={1.5}
          fill="url(#skel-bone-grad)"
          stroke="#B8B098"
          strokeWidth="0.5"
        />
      ))}

      {/* L1-L5 lumbar (y=310-460) — widest */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={`l${i}`}
          x={190}
          y={312 + i * 20}
          width={20}
          height={16}
          rx={2}
          fill="url(#skel-bone-grad)"
          stroke="#B8B098"
          strokeWidth="0.6"
        />
      ))}

      {/* Sacrum (fused, trapezoidal block at y=412-462) */}
      <path
        d="M190,414 C188,420 187,430 187,442 C187,454 188,462 190,466
           L210,466 C212,462 213,454 213,442 C213,430 212,420 210,414Z"
        fill="url(#skel-bone-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />
      {/* Sacral fusion lines */}
      <path d="M187,426 L213,426" fill="none" stroke="#C8C4B0" strokeWidth="0.5" />
      <path d="M187,438 L213,438" fill="none" stroke="#C8C4B0" strokeWidth="0.5" />
      <path d="M187,450 L213,450" fill="none" stroke="#C8C4B0" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          CLAVICLES — S-curved bones
      ═══════════════════════════════════════════════════════ */}
      {/* Left clavicle */}
      <path
        d="M192,175
           C186,174 178,174 168,176
           C158,178 148,182 138,186
           C132,188 124,192 118,194"
        fill="none"
        stroke="#E8E4D0"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M192,175
           C186,174 178,174 168,176
           C158,178 148,182 138,186
           C132,188 124,192 118,194"
        fill="none"
        stroke="#B8B098"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Left clavicle surface highlight */}
      <path
        d="M192,174
           C186,173 178,173 168,175
           C158,177 148,181 138,185
           C132,187 124,191 118,193"
        fill="none"
        stroke="#F5F2E8"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Right clavicle */}
      <path
        d="M208,175
           C214,174 222,174 232,176
           C242,178 252,182 262,186
           C268,188 276,192 282,194"
        fill="none"
        stroke="#E8E4D0"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M208,175
           C214,174 222,174 232,176
           C242,178 252,182 262,186
           C268,188 276,192 282,194"
        fill="none"
        stroke="#B8B098"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M208,174
           C214,173 222,173 232,175
           C242,177 252,181 262,185
           C268,187 276,191 282,193"
        fill="none"
        stroke="#F5F2E8"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* ═══════════════════════════════════════════════════════
          SCAPULAE — shoulder blades (outline visible at shoulders)
      ═══════════════════════════════════════════════════════ */}
      {/* Left scapula outline */}
      <path
        d="M118,194 C114,204 112,220 114,238 C116,252 120,262 126,268
           C134,258 138,242 138,224 C138,210 136,200 132,194Z"
        fill="none"
        stroke="#C8C4B0"
        strokeWidth="1"
        strokeDasharray="3,2"
        opacity="0.7"
      />
      {/* Left scapula acromion */}
      <path d="M118,194 C112,192 106,192 102,196"
        fill="none" stroke="#D4CEB8" strokeWidth="2" strokeLinecap="round" />

      {/* Right scapula outline */}
      <path
        d="M282,194 C286,204 288,220 286,238 C284,252 280,262 274,268
           C266,258 262,242 262,224 C262,210 264,200 268,194Z"
        fill="none"
        stroke="#C8C4B0"
        strokeWidth="1"
        strokeDasharray="3,2"
        opacity="0.7"
      />
      <path d="M282,194 C288,192 294,192 298,196"
        fill="none" stroke="#D4CEB8" strokeWidth="2" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════════
          STERNUM — 3 segments
      ═══════════════════════════════════════════════════════ */}
      {/* Manubrium */}
      <path
        d="M191,172 C188,174 187,180 187,186 C187,193 189,198 192,200
           L208,200 C211,198 213,193 213,186 C213,180 212,174 209,172Z"
        fill="url(#skel-bone-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />
      {/* Sternal body */}
      <path
        d="M192,202 C190,204 189,212 189,224 C189,240 190,258 191,272
           C191,282 192,290 193,296
           L207,296 C208,290 209,282 209,272
           C210,258 211,240 211,224 C211,212 210,204 208,202Z"
        fill="url(#skel-bone-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />
      {/* Sternal midline */}
      <path d="M200,172 L200,296" fill="none" stroke="#D4CEB8" strokeWidth="0.5" />
      {/* Xiphoid process */}
      <path
        d="M196,298 C196,302 198,308 200,310 C202,308 204,302 204,298Z"
        fill="url(#skel-bone-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />

      {/* ═══════════════════════════════════════════════════════
          RIBS — 12 pairs arcing from spine to sternum
      ═══════════════════════════════════════════════════════ */}

      {/* Rib attachment data: [ySpine, xSternLeft, xSternRight, yStern, arcDepth, isFloat] */}
      {[
        [178, 187, 213, 185, 26, false],
        [189, 185, 215, 196, 32, false],
        [200, 183, 217, 210, 38, false],
        [212, 181, 219, 225, 42, false],
        [223, 178, 222, 240, 46, false],
        [234, 175, 225, 256, 50, false],
        [246, 172, 228, 272, 52, false],
        [257, 170, 230, 288, 54, false],
        [268, 155, 245, 305, 55, true],  // floating start
        [280, 150, 250, 320, 52, true],
        [291, 148, 252, 336, 46, true],
        [302, 148, 252, 350, 38, true],
      ].map(([y, xL, xR, ySt, arc, isFloat], i) => (
        <g key={`rib-${i}`}>
          {/* Left rib */}
          <path
            d={`M ${192} ${y} C ${192 - arc * 0.6} ${y - 4} ${xL - arc * 0.8} ${ySt - 8} ${xL} ${ySt}`}
            fill="none"
            stroke="#D4CEB8"
            strokeWidth={isFloat ? 3 : 4}
            strokeLinecap="round"
            opacity={isFloat ? 0.7 : 0.9}
          />
          <path
            d={`M ${192} ${y} C ${192 - arc * 0.6} ${y - 4} ${xL - arc * 0.8} ${ySt - 8} ${xL} ${ySt}`}
            fill="none"
            stroke="#F5F2E8"
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.5}
          />
          {/* Right rib */}
          <path
            d={`M ${208} ${y} C ${208 + arc * 0.6} ${y - 4} ${xR + arc * 0.8} ${ySt - 8} ${xR} ${ySt}`}
            fill="none"
            stroke="#D4CEB8"
            strokeWidth={isFloat ? 3 : 4}
            strokeLinecap="round"
            opacity={isFloat ? 0.7 : 0.9}
          />
          <path
            d={`M ${208} ${y} C ${208 + arc * 0.6} ${y - 4} ${xR + arc * 0.8} ${ySt - 8} ${xR} ${ySt}`}
            fill="none"
            stroke="#F5F2E8"
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.5}
          />
        </g>
      ))}

      {/* ═══════════════════════════════════════════════════════
          PELVIS — ilium, pubic symphysis, acetabula
      ═══════════════════════════════════════════════════════ */}
      {/* Left ilium wing */}
      <path
        d="M190,412
           C180,408 165,406 152,408 C139,410 132,416 130,424
           C128,432 131,442 138,450
           C146,458 156,462 165,462
           C172,462 178,460 182,456
           C185,450 187,440 188,428 C189,420 190,416 190,412Z"
        fill="url(#skel-pelvis-grad)"
        stroke="#B8B098"
        strokeWidth="0.8"
      />
      {/* Left iliac crest highlight */}
      <path d="M190,412 C180,408 165,406 152,408 C139,410 132,416 130,424"
        fill="none" stroke="#F5F2E8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right ilium wing */}
      <path
        d="M210,412
           C220,408 235,406 248,408 C261,410 268,416 270,424
           C272,432 269,442 262,450
           C254,458 244,462 235,462
           C228,462 222,460 218,456
           C215,450 213,440 212,428 C211,420 210,416 210,412Z"
        fill="url(#skel-pelvis-grad)"
        stroke="#B8B098"
        strokeWidth="0.8"
      />
      <path d="M210,412 C220,408 235,406 248,408 C261,410 268,416 270,424"
        fill="none" stroke="#F5F2E8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Pubic symphysis */}
      <path
        d="M182,458 C184,464 188,470 194,474 C196,476 198,477 200,477
           C202,477 204,476 206,474 C212,470 216,464 218,458
           C212,462 206,464 200,464 C194,464 188,462 182,458Z"
        fill="url(#skel-pelvis-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />

      {/* Left acetabulum (hip socket) */}
      <circle cx="154" cy="458" r="12" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.8" />
      <circle cx="154" cy="458" r="7" fill="#3A3628" stroke="#B8B098" strokeWidth="0.5" />

      {/* Right acetabulum */}
      <circle cx="246" cy="458" r="12" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.8" />
      <circle cx="246" cy="458" r="7" fill="#3A3628" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          LEFT HUMERUS
      ═══════════════════════════════════════════════════════ */}
      {/* Humeral head (ball) */}
      <ellipse cx="110" cy="202" rx="14" ry="12" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.8" />
      {/* Shaft */}
      <path
        d="M104,210 C102,230 100,260 98,290 C96,316 94,334 93,345
           C95,348 99,350 104,350 C109,350 113,348 115,345
           C116,334 116,316 116,290 C116,260 116,230 116,210Z"
        fill="url(#skel-shaft-l-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />
      {/* Distal humerus (elbow end) */}
      <ellipse cx="104" cy="352" rx="13" ry="8" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.7" />
      {/* Medial/lateral epicondyle bumps */}
      <ellipse cx="95" cy="350" rx="6" ry="4" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />
      <ellipse cx="113" cy="350" rx="6" ry="4" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          RIGHT HUMERUS
      ═══════════════════════════════════════════════════════ */}
      <ellipse cx="290" cy="202" rx="14" ry="12" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.8" />
      <path
        d="M296,210 C298,230 300,260 302,290 C304,316 306,334 307,345
           C305,348 301,350 296,350 C291,350 287,348 285,345
           C284,334 284,316 284,290 C284,260 284,230 284,210Z"
        fill="url(#skel-shaft-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />
      <ellipse cx="296" cy="352" rx="13" ry="8" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.7" />
      <ellipse cx="305" cy="350" rx="6" ry="4" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />
      <ellipse cx="287" cy="350" rx="6" ry="4" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          LEFT RADIUS + ULNA
      ═══════════════════════════════════════════════════════ */}
      {/* Ulna (inner/medial, larger at elbow) */}
      <path
        d="M94,354 C92,370 90,392 89,414 C88,436 88,458 89,480 C89,488 90,492 90,494
           C93,496 96,496 99,494 C99,492 99,488 99,480
           C99,458 99,436 99,414 C99,392 100,370 102,354Z"
        fill="url(#skel-shaft-l-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />
      {/* Olecranon (elbow bump) */}
      <ellipse cx="96" cy="352" rx="7" ry="5" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />

      {/* Radius (outer/thumb side) */}
      <path
        d="M110,356 C109,372 108,394 107,416 C107,438 107,460 108,482 C108,490 109,494 110,496
           C113,497 117,497 119,496 C120,494 120,490 120,482
           C120,460 120,438 119,416 C118,394 117,372 115,356Z"
        fill="url(#skel-shaft-l-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />
      {/* Radial head at elbow */}
      <ellipse cx="113" cy="354" rx="6" ry="4" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════════════════════
          RIGHT RADIUS + ULNA
      ═══════════════════════════════════════════════════════ */}
      <path
        d="M306,354 C308,370 310,392 311,414 C312,436 312,458 311,480 C311,488 310,492 310,494
           C307,496 304,496 301,494 C301,492 301,488 301,480
           C301,458 301,436 301,414 C301,392 300,370 298,354Z"
        fill="url(#skel-shaft-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />
      <ellipse cx="304" cy="352" rx="7" ry="5" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />

      <path
        d="M290,356 C291,372 292,394 293,416 C293,438 293,460 292,482 C292,490 291,494 290,496
           C287,497 283,497 281,496 C280,494 280,490 280,482
           C280,460 280,438 281,416 C282,394 283,372 285,356Z"
        fill="url(#skel-shaft-grad)"
        stroke="#B8B098"
        strokeWidth="0.6"
      />
      <ellipse cx="287" cy="354" rx="6" ry="4" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════════════════════
          LEFT HAND — carpals, metacarpals, phalanges
      ═══════════════════════════════════════════════════════ */}
      {/* Carpal cluster (wrist bones) */}
      <ellipse cx="105" cy="502" rx="18" ry="8" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.6" />
      {/* Carpal row lines */}
      <path d="M88,500 C94,504 100,506 105,506 C110,506 116,504 122,500"
        fill="none" stroke="#C8C4B0" strokeWidth="0.5" />

      {/* Metacarpals (5 bones) */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 82 + i * 10;
        return (
          <rect key={`lmc${i}`} x={x} y={510} width={7} height={22} rx={2}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.5" />
        );
      })}

      {/* Proximal phalanges */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 83 + i * 10;
        const h = i === 0 ? 12 : 14;
        return (
          <rect key={`lpp${i}`} x={x} y={534} width={6} height={h} rx={1.5}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
        );
      })}

      {/* Middle phalanges (no thumb) */}
      {[1, 2, 3, 4].map((i) => {
        const x = 83 + i * 10;
        return (
          <rect key={`lmp${i}`} x={x} y={550} width={6} height={10} rx={1.5}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
        );
      })}

      {/* Distal phalanges */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 83 + i * 10;
        const y = i === 0 ? 548 : 562;
        return (
          <path key={`ldp${i}`}
            d={`M${x},${y} L${x + 6},${y} L${x + 5},${y + 8} C${x + 5},${y + 10} ${x + 4},${y + 11} ${x + 3},${y + 11} C${x + 2},${y + 11} ${x + 1},${y + 10} ${x + 1},${y + 8}Z`}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
        );
      })}

      {/* ═══════════════════════════════════════════════════════
          RIGHT HAND
      ═══════════════════════════════════════════════════════ */}
      <ellipse cx="295" cy="502" rx="18" ry="8" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.6" />
      <path d="M312,500 C306,504 300,506 295,506 C290,506 284,504 278,500"
        fill="none" stroke="#C8C4B0" strokeWidth="0.5" />

      {[0, 1, 2, 3, 4].map((i) => {
        const x = 278 + i * 10;
        return (
          <rect key={`rmc${i}`} x={x} y={510} width={7} height={22} rx={2}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.5" />
        );
      })}

      {[0, 1, 2, 3, 4].map((i) => {
        const x = 279 + i * 10;
        const h = i === 0 ? 12 : 14;
        return (
          <rect key={`rpp${i}`} x={x} y={534} width={6} height={h} rx={1.5}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
        );
      })}

      {[1, 2, 3, 4].map((i) => {
        const x = 279 + i * 10;
        return (
          <rect key={`rmp${i}`} x={x} y={550} width={6} height={10} rx={1.5}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
        );
      })}

      {[0, 1, 2, 3, 4].map((i) => {
        const x = 279 + i * 10;
        const y = i === 0 ? 548 : 562;
        return (
          <path key={`rdp${i}`}
            d={`M${x},${y} L${x + 6},${y} L${x + 5},${y + 8} C${x + 5},${y + 10} ${x + 4},${y + 11} ${x + 3},${y + 11} C${x + 2},${y + 11} ${x + 1},${y + 10} ${x + 1},${y + 8}Z`}
            fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
        );
      })}

      {/* ═══════════════════════════════════════════════════════
          LEFT FEMUR
      ═══════════════════════════════════════════════════════ */}
      {/* Femoral head (ball into acetabulum) */}
      <ellipse cx="154" cy="470" rx="10" ry="10" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.8" />
      {/* Greater trochanter */}
      <ellipse cx="144" cy="476" rx="8" ry="6" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />

      {/* Femoral shaft — angled inward toward knee */}
      <path
        d="M150,482
           C148,506 147,532 147,558 C147,584 148,610 150,634 C151,642 152,648 152,652
           C156,656 162,658 167,656 C168,650 169,642 170,634
           C172,610 172,584 171,558 C170,532 168,506 166,482Z"
        fill="url(#skel-shaft-l-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />

      {/* Distal femur (knee end) */}
      <ellipse cx="158" cy="654" rx="18" ry="10" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.7" />
      {/* Medial and lateral condyles */}
      <ellipse cx="148" cy="656" rx="8" ry="6" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />
      <ellipse cx="168" cy="656" rx="8" ry="6" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          RIGHT FEMUR
      ═══════════════════════════════════════════════════════ */}
      <ellipse cx="246" cy="470" rx="10" ry="10" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.8" />
      <ellipse cx="256" cy="476" rx="8" ry="6" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />

      <path
        d="M250,482
           C252,506 253,532 253,558 C253,584 252,610 250,634 C249,642 248,648 248,652
           C244,656 238,658 233,656 C232,650 231,642 230,634
           C228,610 228,584 229,558 C230,532 232,506 234,482Z"
        fill="url(#skel-shaft-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />

      <ellipse cx="242" cy="654" rx="18" ry="10" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.7" />
      <ellipse cx="252" cy="656" rx="8" ry="6" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />
      <ellipse cx="232" cy="656" rx="8" ry="6" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          PATELLAE (kneecaps)
      ═══════════════════════════════════════════════════════ */}
      {/* Left patella — diamond shape */}
      <path
        d="M156,648 C150,650 146,656 148,662 C150,668 156,672 163,670
           C170,668 174,662 172,656 C170,650 163,646 156,648Z"
        fill="url(#skel-epiphysis-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />
      {/* Right patella */}
      <path
        d="M244,648 C250,650 254,656 252,662 C250,668 244,672 237,670
           C230,668 226,662 228,656 C230,650 237,646 244,648Z"
        fill="url(#skel-epiphysis-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />

      {/* ═══════════════════════════════════════════════════════
          LEFT TIBIA + FIBULA
      ═══════════════════════════════════════════════════════ */}
      {/* Tibial plateau (proximal) */}
      <ellipse cx="160" cy="666" rx="16" ry="7" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.7" />

      {/* Tibia shaft */}
      <path
        d="M148,670
           C148,690 149,714 150,738 C151,762 152,780 152,792
           C156,794 160,795 164,793
           C165,780 166,762 166,738 C166,714 165,690 164,670Z"
        fill="url(#skel-shaft-l-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />
      {/* Tibial tuberosity (bump below knee) */}
      <ellipse cx="155" cy="674" rx="5" ry="4" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />

      {/* Fibula (thin lateral bone) */}
      <path
        d="M170,672
           C170,692 170,716 170,740 C170,762 170,778 170,790
           C173,791 176,791 178,790
           C178,778 178,762 177,740 C176,716 175,692 174,672Z"
        fill="url(#skel-shaft-l-grad)"
        stroke="#B8B098"
        strokeWidth="0.5"
      />

      {/* Distal tibia / medial malleolus */}
      <ellipse cx="155" cy="793" rx="10" ry="5" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />
      {/* Lateral malleolus (fibula end) */}
      <ellipse cx="174" cy="793" rx="5" ry="4" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          RIGHT TIBIA + FIBULA
      ═══════════════════════════════════════════════════════ */}
      <ellipse cx="240" cy="666" rx="16" ry="7" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.7" />

      <path
        d="M252,670
           C252,690 251,714 250,738 C249,762 248,780 248,792
           C244,794 240,795 236,793
           C235,780 234,762 234,738 C234,714 235,690 236,670Z"
        fill="url(#skel-shaft-grad)"
        stroke="#B8B098"
        strokeWidth="0.7"
      />
      <ellipse cx="245" cy="674" rx="5" ry="4" fill="#D4CEB8" stroke="#B8B098" strokeWidth="0.5" />

      <path
        d="M230,672
           C230,692 230,716 230,740 C230,762 230,778 230,790
           C227,791 224,791 222,790
           C222,778 222,762 223,740 C224,716 225,692 226,672Z"
        fill="url(#skel-shaft-grad)"
        stroke="#B8B098"
        strokeWidth="0.5"
      />

      <ellipse cx="245" cy="793" rx="10" ry="5" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.6" />
      <ellipse cx="226" cy="793" rx="5" ry="4" fill="url(#skel-epiphysis-grad)" stroke="#B8B098" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════════════════════
          LEFT FOOT — tarsals, metatarsals, phalanges
      ═══════════════════════════════════════════════════════ */}
      {/* Calcaneus (heel) */}
      <ellipse cx="148" cy="802" rx="16" ry="9" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.7" />
      {/* Talus */}
      <ellipse cx="158" cy="797" rx="10" ry="7" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.6" />
      {/* Navicular / cuboid cluster */}
      <ellipse cx="162" cy="800" rx="8" ry="5" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.5" />

      {/* Metatarsals */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x1 = 127 + i * 9;
        const x2 = 133 + i * 9;
        const angle = -10 + i * 3;
        return (
          <line key={`lmt${i}`}
            x1={x1} y1={810} x2={x2} y2={796}
            stroke="#D4CEB8" strokeWidth={4} strokeLinecap="round"
          />
        );
      })}

      {/* Toe phalanges (simplified) */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 124 + i * 9;
        return (
          <g key={`ltoe${i}`}>
            <rect x={x} y={812} width={6} height={8} rx={2}
              fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
            {i > 0 && (
              <rect x={x} y={822} width={6} height={6} rx={1.5}
                fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
            )}
          </g>
        );
      })}

      {/* ═══════════════════════════════════════════════════════
          RIGHT FOOT
      ═══════════════════════════════════════════════════════ */}
      <ellipse cx="252" cy="802" rx="16" ry="9" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.7" />
      <ellipse cx="242" cy="797" rx="10" ry="7" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.6" />
      <ellipse cx="238" cy="800" rx="8" ry="5" fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.5" />

      {[0, 1, 2, 3, 4].map((i) => {
        const x1 = 273 - i * 9;
        const x2 = 267 - i * 9;
        return (
          <line key={`rmt${i}`}
            x1={x1} y1={810} x2={x2} y2={796}
            stroke="#D4CEB8" strokeWidth={4} strokeLinecap="round"
          />
        );
      })}

      {[0, 1, 2, 3, 4].map((i) => {
        const x = 270 - i * 9;
        return (
          <g key={`rtoe${i}`}>
            <rect x={x} y={812} width={6} height={8} rx={2}
              fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
            {i > 0 && (
              <rect x={x} y={822} width={6} height={6} rx={1.5}
                fill="url(#skel-bone-grad)" stroke="#B8B098" strokeWidth="0.4" />
            )}
          </g>
        );
      })}
    </svg>
  );
}
