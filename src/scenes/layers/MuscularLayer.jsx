export default function MuscularLayer({ opacity = 1 }) {
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
        {/* Primary muscle gradient — deep crimson */}
        <linearGradient id="musc-primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="50%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#922B21" />
        </linearGradient>

        {/* Highlight gradient for muscle belly peaks */}
        <linearGradient id="musc-highlight-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>

        {/* Shadow gradient for deep muscle grooves */}
        <linearGradient id="musc-shadow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7B241C" />
          <stop offset="100%" stopColor="#922B21" />
        </linearGradient>

        {/* Left pec gradient */}
        <linearGradient id="musc-left-pec-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="60%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7B241C" />
        </linearGradient>

        {/* Right pec gradient */}
        <linearGradient id="musc-right-pec-grad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="60%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7B241C" />
        </linearGradient>

        {/* Left deltoid gradient */}
        <radialGradient id="musc-left-delt-grad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="70%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7B241C" />
        </radialGradient>

        {/* Right deltoid gradient */}
        <radialGradient id="musc-right-delt-grad" cx="60%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="70%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7B241C" />
        </radialGradient>

        {/* Bicep bulge gradient */}
        <radialGradient id="musc-bicep-grad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#E74C3C" />
          <stop offset="65%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7B241C" />
        </radialGradient>

        {/* Quad gradient */}
        <linearGradient id="musc-quad-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="50%" stopColor="#A93226" />
          <stop offset="100%" stopColor="#7B241C" />
        </linearGradient>

        {/* Forearm gradient */}
        <linearGradient id="musc-forearm-l-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7B241C" />
          <stop offset="50%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#A93226" />
        </linearGradient>
        <linearGradient id="musc-forearm-r-grad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7B241C" />
          <stop offset="50%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#A93226" />
        </linearGradient>

        {/* Trapezius gradient */}
        <linearGradient id="musc-trap-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#922B21" />
        </linearGradient>

        {/* Shin/tibialis gradient */}
        <linearGradient id="musc-shin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7B241C" />
        </linearGradient>
      </defs>

      {/* ═══════════════════════════════════════════════════
          TRAPEZIUS — upper back/shoulder transition, visible front
      ═══════════════════════════════════════════════════ */}
      {/* Left trapezius upper */}
      <path
        d="M178,140 C172,148 162,158 148,168 C138,174 120,184 108,192
           C118,196 130,200 140,202 C155,188 168,176 178,168Z"
        fill="url(#musc-trap-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      {/* Right trapezius upper */}
      <path
        d="M222,140 C228,148 238,158 252,168 C262,174 280,184 292,192
           C282,196 270,200 260,202 C245,188 232,176 222,168Z"
        fill="url(#musc-trap-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />

      {/* ═══════════════════════════════════════════════════
          STERNOCLEIDOMASTOID — diagonal neck muscles
      ═══════════════════════════════════════════════════ */}
      {/* Left SCM */}
      <path
        d="M186,140 C183,148 180,155 179,162 C180,166 182,168 184,168
           C186,168 188,166 189,162 C190,155 191,148 192,140Z"
        fill="#C0392B"
        stroke="#5D1A12"
        strokeWidth="0.5"
      />
      {/* Right SCM */}
      <path
        d="M214,140 C217,148 220,155 221,162 C220,166 218,168 216,168
           C214,168 212,166 211,162 C210,155 209,148 208,140Z"
        fill="#C0392B"
        stroke="#5D1A12"
        strokeWidth="0.5"
      />
      {/* SCM insertion marks at clavicle */}
      <path
        d="M184,168 C183,172 183,175 184,178"
        fill="none"
        stroke="#7B241C"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M216,168 C217,172 217,175 216,178"
        fill="none"
        stroke="#7B241C"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* ═══════════════════════════════════════════════════
          LEFT DELTOID — rounded shoulder cap
      ═══════════════════════════════════════════════════ */}
      <path
        d="M108,192
           C100,198 94,208 92,220 C90,232 92,242 98,248
           C106,254 116,252 124,244
           C130,238 132,228 130,222
           C120,218 112,208 108,192Z"
        fill="url(#musc-left-delt-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      {/* Deltoid muscle striations */}
      <path d="M108,200 C104,210 102,220 104,230" fill="none" stroke="#7B241C" strokeWidth="0.6" opacity="0.7" />
      <path d="M116,198 C112,208 110,218 112,228" fill="none" stroke="#7B241C" strokeWidth="0.6" opacity="0.7" />

      {/* ═══════════════════════════════════════════════════
          RIGHT DELTOID
      ═══════════════════════════════════════════════════ */}
      <path
        d="M292,192
           C300,198 306,208 308,220 C310,232 308,242 302,248
           C294,254 284,252 276,244
           C270,238 268,228 270,222
           C280,218 288,208 292,192Z"
        fill="url(#musc-right-delt-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      <path d="M292,200 C296,210 298,220 296,230" fill="none" stroke="#7B241C" strokeWidth="0.6" opacity="0.7" />
      <path d="M284,198 C288,208 290,218 288,228" fill="none" stroke="#7B241C" strokeWidth="0.6" opacity="0.7" />

      {/* ═══════════════════════════════════════════════════
          LEFT PECTORALIS MAJOR — fan-shaped chest muscle
      ═══════════════════════════════════════════════════ */}
      <path
        d="M137,225
           C135,218 132,210 130,204
           C144,198 158,194 170,193
           C180,193 190,194 200,196
           C200,210 200,225 200,240
           C200,248 198,254 194,258
           C186,264 175,264 167,258
           C157,250 147,240 137,225Z"
        fill="url(#musc-left-pec-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      {/* Pec fiber lines */}
      <path d="M144,204 C158,218 168,232 172,248" fill="none" stroke="#7B241C" strokeWidth="0.7" opacity="0.6" />
      <path d="M156,198 C164,212 170,228 172,244" fill="none" stroke="#7B241C" strokeWidth="0.7" opacity="0.6" />
      <path d="M168,195 C170,208 172,222 172,238" fill="none" stroke="#7B241C" strokeWidth="0.7" opacity="0.6" />

      {/* ═══════════════════════════════════════════════════
          RIGHT PECTORALIS MAJOR
      ═══════════════════════════════════════════════════ */}
      <path
        d="M263,225
           C265,218 268,210 270,204
           C256,198 242,194 230,193
           C220,193 210,194 200,196
           C200,210 200,225 200,240
           C200,248 202,254 206,258
           C214,264 225,264 233,258
           C243,250 253,240 263,225Z"
        fill="url(#musc-right-pec-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      <path d="M256,204 C242,218 232,232 228,248" fill="none" stroke="#7B241C" strokeWidth="0.7" opacity="0.6" />
      <path d="M244,198 C236,212 230,228 228,244" fill="none" stroke="#7B241C" strokeWidth="0.7" opacity="0.6" />
      <path d="M232,195 C230,208 228,222 228,238" fill="none" stroke="#7B241C" strokeWidth="0.7" opacity="0.6" />

      {/* Sternum gap between pecs */}
      <path
        d="M200,178 L200,268"
        fill="none"
        stroke="#5D1A12"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ═══════════════════════════════════════════════════
          LINEA ALBA — vertical center line of abdomen
      ═══════════════════════════════════════════════════ */}
      <path
        d="M200,265 L200,448"
        fill="none"
        stroke="#5D1A12"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* ═══════════════════════════════════════════════════
          RECTUS ABDOMINIS — 6-pack, 3 pairs of blocks
      ═══════════════════════════════════════════════════ */}

      {/* Block pair 1 — upper abs y=268-308 */}
      {/* Left upper ab */}
      <path
        d="M183,270 C181,272 180,278 180,285 C180,292 181,298 183,302
           C186,306 190,307 194,306 C198,305 200,302 200,298
           C200,290 200,278 200,270
           C196,269 190,269 183,270Z"
        fill="url(#musc-highlight-grad)"
        stroke="#5D1A12"
        strokeWidth="0.8"
      />
      {/* Right upper ab */}
      <path
        d="M217,270 C219,272 220,278 220,285 C220,292 219,298 217,302
           C214,306 210,307 206,306 C202,305 200,302 200,298
           C200,290 200,278 200,270
           C204,269 210,269 217,270Z"
        fill="url(#musc-highlight-grad)"
        stroke="#5D1A12"
        strokeWidth="0.8"
      />

      {/* Tendinous intersection 1 */}
      <path d="M180,308 C188,310 194,310 200,310 C206,310 212,310 220,308"
        fill="none" stroke="#5D1A12" strokeWidth="1.2" strokeLinecap="round" />

      {/* Block pair 2 — mid abs y=312-350 */}
      {/* Left mid ab */}
      <path
        d="M182,312 C180,315 179,320 179,328 C179,336 180,342 182,346
           C185,350 189,351 194,350 C198,349 200,346 200,342
           C200,334 200,320 200,312
           C196,311 190,311 182,312Z"
        fill="url(#musc-highlight-grad)"
        stroke="#5D1A12"
        strokeWidth="0.8"
      />
      {/* Right mid ab */}
      <path
        d="M218,312 C220,315 221,320 221,328 C221,336 220,342 218,346
           C215,350 211,351 206,350 C202,349 200,346 200,342
           C200,334 200,320 200,312
           C204,311 210,311 218,312Z"
        fill="url(#musc-highlight-grad)"
        stroke="#5D1A12"
        strokeWidth="0.8"
      />

      {/* Tendinous intersection 2 */}
      <path d="M179,350 C188,353 194,353 200,353 C206,353 212,353 221,350"
        fill="none" stroke="#5D1A12" strokeWidth="1.2" strokeLinecap="round" />

      {/* Block pair 3 — lower abs y=354-395 */}
      {/* Left lower ab */}
      <path
        d="M181,355 C179,358 178,364 178,372 C178,382 179,390 181,395
           C184,400 188,401 193,400 C197,399 200,396 200,392
           C200,382 200,366 200,355
           C195,354 189,354 181,355Z"
        fill="url(#musc-highlight-grad)"
        stroke="#5D1A12"
        strokeWidth="0.8"
      />
      {/* Right lower ab */}
      <path
        d="M219,355 C221,358 222,364 222,372 C222,382 221,390 219,395
           C216,400 212,401 207,400 C203,399 200,396 200,392
           C200,382 200,366 200,355
           C205,354 211,354 219,355Z"
        fill="url(#musc-highlight-grad)"
        stroke="#5D1A12"
        strokeWidth="0.8"
      />

      {/* Tendinous intersection 3 / lower bound */}
      <path d="M178,400 C188,404 194,405 200,405 C206,405 212,404 222,400"
        fill="none" stroke="#5D1A12" strokeWidth="1.2" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════
          EXTERNAL OBLIQUES — flanking the abs
      ═══════════════════════════════════════════════════ */}
      {/* Left oblique */}
      <path
        d="M137,225
           C139,240 140,260 141,280
           C142,305 143,330 143,360
           C144,380 145,400 146,420
           C148,440 148,455 148,462
           C156,460 163,456 168,450
           C166,430 164,408 162,384
           C160,358 159,332 158,305
           C157,278 157,252 158,228
           C152,226 145,225 137,225Z"
        fill="url(#musc-shadow-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      {/* Left oblique fiber lines */}
      <path d="M140,240 C148,260 152,285 154,310" fill="none" stroke="#5D1A12" strokeWidth="0.6" opacity="0.8" />
      <path d="M140,270 C148,292 152,318 154,345" fill="none" stroke="#5D1A12" strokeWidth="0.6" opacity="0.8" />
      <path d="M141,305 C148,328 151,355 152,382" fill="none" stroke="#5D1A12" strokeWidth="0.6" opacity="0.8" />

      {/* Right oblique */}
      <path
        d="M263,225
           C261,240 260,260 259,280
           C258,305 257,330 257,360
           C256,380 255,400 254,420
           C252,440 252,455 252,462
           C244,460 237,456 232,450
           C234,430 236,408 238,384
           C240,358 241,332 242,305
           C243,278 243,252 242,228
           C248,226 255,225 263,225Z"
        fill="url(#musc-shadow-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      <path d="M260,240 C252,260 248,285 246,310" fill="none" stroke="#5D1A12" strokeWidth="0.6" opacity="0.8" />
      <path d="M260,270 C252,292 248,318 246,345" fill="none" stroke="#5D1A12" strokeWidth="0.6" opacity="0.8" />
      <path d="M259,305 C252,328 249,355 248,382" fill="none" stroke="#5D1A12" strokeWidth="0.6" opacity="0.8" />

      {/* ═══════════════════════════════════════════════════
          LEFT BICEPS BRACHII — front of upper arm
      ═══════════════════════════════════════════════════ */}
      <path
        d="M124,244
           C122,255 120,268 119,282 C118,296 118,310 119,322
           C120,332 121,340 122,345
           C124,348 127,349 130,348
           C132,347 134,344 134,340
           C134,328 133,314 131,298
           C129,282 127,265 126,248
           C125,246 124,245 124,244Z"
        fill="url(#musc-bicep-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      {/* Bicep peak highlight */}
      <path d="M124,270 C124,285 124,300 125,315" fill="none" stroke="#E74C3C" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════
          RIGHT BICEPS BRACHII
      ═══════════════════════════════════════════════════ */}
      <path
        d="M276,244
           C278,255 280,268 281,282 C282,296 282,310 281,322
           C280,332 279,340 278,345
           C276,348 273,349 270,348
           C268,347 266,344 266,340
           C266,328 267,314 269,298
           C271,282 273,265 274,248
           C275,246 276,245 276,244Z"
        fill="url(#musc-bicep-grad)"
        stroke="#5D1A12"
        strokeWidth="0.7"
      />
      <path d="M276,270 C276,285 276,300 275,315" fill="none" stroke="#E74C3C" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════
          LEFT BRACHIORADIALIS + FOREARM MUSCLES
      ═══════════════════════════════════════════════════ */}
      {/* Brachioradialis (outer forearm) */}
      <path
        d="M122,345
           C120,358 118,372 117,388 C116,404 115,420 115,436
           C115,448 115,462 116,476 C116,484 116,488 116,490
           C118,491 120,492 122,492
           C122,480 122,464 122,448 C122,432 122,418 122,404
           C122,388 122,370 122,355
           C122,352 122,348 122,345Z"
        fill="url(#musc-forearm-l-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      {/* Forearm flexors (inner forearm group) */}
      <path
        d="M82,345
           C81,358 80,375 79,394 C78,414 78,434 78,454 C78,468 78,480 78,490
           C84,492 90,493 96,492 C100,484 104,468 107,450
           C110,432 112,412 113,392 C114,372 115,356 116,345
           C108,344 96,344 82,345Z"
        fill="url(#musc-forearm-l-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      {/* Forearm muscle separation lines */}
      <path d="M98,346 C97,365 96,385 96,405 C96,425 97,445 98,462" fill="none" stroke="#5D1A12" strokeWidth="0.7" opacity="0.8" />
      <path d="M108,345 C107,362 107,380 107,398 C107,418 107,438 108,458" fill="none" stroke="#5D1A12" strokeWidth="0.7" opacity="0.8" />

      {/* ═══════════════════════════════════════════════════
          RIGHT BRACHIORADIALIS + FOREARM MUSCLES
      ═══════════════════════════════════════════════════ */}
      <path
        d="M278,345
           C280,358 282,372 283,388 C284,404 285,420 285,436
           C285,448 285,462 284,476 C284,484 284,488 284,490
           C282,491 280,492 278,492
           C278,480 278,464 278,448 C278,432 278,418 278,404
           C278,388 278,370 278,355
           C278,352 278,348 278,345Z"
        fill="url(#musc-forearm-r-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      <path
        d="M318,345
           C319,358 320,375 321,394 C322,414 322,434 322,454 C322,468 322,480 322,490
           C316,492 310,493 304,492 C300,484 296,468 293,450
           C290,432 288,412 287,392 C286,372 285,356 284,345
           C292,344 304,344 318,345Z"
        fill="url(#musc-forearm-r-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      <path d="M302,346 C303,365 304,385 304,405 C304,425 303,445 302,462" fill="none" stroke="#5D1A12" strokeWidth="0.7" opacity="0.8" />
      <path d="M292,345 C293,362 293,380 293,398 C293,418 293,438 292,458" fill="none" stroke="#5D1A12" strokeWidth="0.7" opacity="0.8" />

      {/* ═══════════════════════════════════════════════════
          TENSOR FASCIAE LATAE — outer hip muscle
      ═══════════════════════════════════════════════════ */}
      {/* Left TFL */}
      <path
        d="M148,462
           C146,472 144,482 143,494 C142,506 142,515 144,522
           C148,526 154,526 158,522
           C160,510 161,498 160,484 C159,472 157,464 155,458
           C153,458 151,460 148,462Z"
        fill="#922B21"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      {/* Right TFL */}
      <path
        d="M252,462
           C254,472 256,482 257,494 C258,506 258,515 256,522
           C252,526 246,526 242,522
           C240,510 239,498 240,484 C241,472 243,464 245,458
           C247,458 249,460 252,462Z"
        fill="#922B21"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* ═══════════════════════════════════════════════════
          SARTORIUS — diagonal strap from outer hip to inner knee
      ═══════════════════════════════════════════════════ */}
      {/* Left sartorius */}
      <path
        d="M155,462
           C153,476 150,496 148,518 C146,540 144,562 143,584
           C142,606 142,628 143,648 C144,652 148,654 152,653
           C154,640 156,618 158,596 C160,574 162,551 163,528
           C164,506 164,484 163,464
           C161,462 158,462 155,462Z"
        fill="#C0392B"
        stroke="#5D1A12"
        strokeWidth="0.6"
        opacity="0.9"
      />
      {/* Right sartorius */}
      <path
        d="M245,462
           C247,476 250,496 252,518 C254,540 256,562 257,584
           C258,606 258,628 257,648 C256,652 252,654 248,653
           C246,640 244,618 242,596 C240,574 238,551 237,528
           C236,506 236,484 237,464
           C239,462 242,462 245,462Z"
        fill="#C0392B"
        stroke="#5D1A12"
        strokeWidth="0.6"
        opacity="0.9"
      />

      {/* ═══════════════════════════════════════════════════
          QUADRICEPS — rectus femoris, vastus med/lat
          Fill the front of both thighs
      ═══════════════════════════════════════════════════ */}

      {/* Left Vastus Lateralis (outer quad) */}
      <path
        d="M143,462
           C140,480 138,505 137,530 C136,556 136,582 138,608
           C140,628 142,642 143,652
           C150,656 157,656 162,652
           C162,638 161,618 160,596 C158,572 157,548 157,524
           C157,500 157,480 156,462
           C152,461 148,461 143,462Z"
        fill="url(#musc-quad-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* Left Rectus Femoris (center quad) */}
      <path
        d="M163,464
           C161,480 160,500 160,522 C160,546 161,570 162,594
           C163,614 165,632 166,648 C168,652 172,654 176,652
           C178,638 180,618 182,596 C184,572 185,548 185,524
           C185,500 184,480 183,464
           C178,462 172,462 166,463
           Z"
        fill="url(#musc-quad-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* Left Vastus Medialis (inner quad, teardrop) */}
      <path
        d="M185,464
           C185,480 185,500 184,522 C183,546 182,570 180,594
           C179,614 178,632 177,648 C180,654 186,656 190,652
           C192,638 193,616 194,592 C195,568 195,544 195,520
           C195,498 196,478 196,462
           C192,462 189,463 185,464Z"
        fill="url(#musc-quad-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* Quad separation lines — left */}
      <path d="M157,476 C157,510 158,545 158,580 C158,610 159,635 160,652"
        fill="none" stroke="#5D1A12" strokeWidth="0.8" opacity="0.9" />
      <path d="M183,474 C183,508 183,542 183,576 C183,606 182,630 181,650"
        fill="none" stroke="#5D1A12" strokeWidth="0.8" opacity="0.9" />

      {/* Right Vastus Lateralis */}
      <path
        d="M257,462
           C260,480 262,505 263,530 C264,556 264,582 262,608
           C260,628 258,642 257,652
           C250,656 243,656 238,652
           C238,638 239,618 240,596 C242,572 243,548 243,524
           C243,500 243,480 244,462
           C248,461 252,461 257,462Z"
        fill="url(#musc-quad-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* Right Rectus Femoris */}
      <path
        d="M237,464
           C239,480 240,500 240,522 C240,546 239,570 238,594
           C237,614 235,632 234,648 C232,652 228,654 224,652
           C222,638 220,618 218,596 C216,572 215,548 215,524
           C215,500 216,480 217,464
           C222,462 228,462 234,463
           Z"
        fill="url(#musc-quad-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* Right Vastus Medialis */}
      <path
        d="M215,464
           C215,480 215,500 216,522 C217,546 218,570 220,594
           C221,614 222,632 223,648 C220,654 214,656 210,652
           C208,638 207,616 206,592 C205,568 205,544 205,520
           C205,498 204,478 204,462
           C208,462 211,463 215,464Z"
        fill="url(#musc-quad-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />

      {/* Quad separation lines — right */}
      <path d="M243,476 C243,510 242,545 242,580 C242,610 241,635 240,652"
        fill="none" stroke="#5D1A12" strokeWidth="0.8" opacity="0.9" />
      <path d="M217,474 C217,508 217,542 217,576 C217,606 218,630 219,650"
        fill="none" stroke="#5D1A12" strokeWidth="0.8" opacity="0.9" />

      {/* ═══════════════════════════════════════════════════
          TIBIALIS ANTERIOR — front of shin
      ═══════════════════════════════════════════════════ */}
      {/* Left tibialis */}
      <path
        d="M152,658
           C150,672 149,690 149,710 C149,730 149,752 150,770
           C150,780 151,786 152,790
           C156,792 162,792 166,790
           C166,778 166,762 165,744 C164,724 163,704 162,684
           C162,672 162,660 162,652
           C158,654 155,656 152,658Z"
        fill="url(#musc-shin-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      {/* Left tibialis anterior ridge */}
      <path d="M157,660 C156,686 155,712 155,738 C155,760 156,778 157,790"
        fill="none" stroke="#7B241C" strokeWidth="0.8" />

      {/* Right tibialis */}
      <path
        d="M248,658
           C250,672 251,690 251,710 C251,730 251,752 250,770
           C250,780 249,786 248,790
           C244,792 238,792 234,790
           C234,778 234,762 235,744 C236,724 237,704 238,684
           C238,672 238,660 238,652
           C242,654 245,656 248,658Z"
        fill="url(#musc-shin-grad)"
        stroke="#5D1A12"
        strokeWidth="0.6"
      />
      <path d="M243,660 C244,686 245,712 245,738 C245,760 244,778 243,790"
        fill="none" stroke="#7B241C" strokeWidth="0.8" />

      {/* ═══════════════════════════════════════════════════
          GASTROCNEMIUS — partly visible from front at lower leg sides
      ═══════════════════════════════════════════════════ */}
      {/* Left gastroc, medial head visible */}
      <path
        d="M178,656
           C180,668 181,684 181,702 C181,720 180,738 179,754
           C178,768 177,778 177,786
           C174,788 171,789 168,788
           C168,774 168,756 169,736 C170,716 172,696 174,678
           C175,666 177,658 178,656Z"
        fill="#922B21"
        stroke="#5D1A12"
        strokeWidth="0.6"
        opacity="0.8"
      />
      {/* Right gastroc medial head */}
      <path
        d="M222,656
           C220,668 219,684 219,702 C219,720 220,738 221,754
           C222,768 223,778 223,786
           C226,788 229,789 232,788
           C232,774 232,756 231,736 C230,716 228,696 226,678
           C225,666 223,658 222,656Z"
        fill="#922B21"
        stroke="#5D1A12"
        strokeWidth="0.6"
        opacity="0.8"
      />
    </svg>
  );
}
