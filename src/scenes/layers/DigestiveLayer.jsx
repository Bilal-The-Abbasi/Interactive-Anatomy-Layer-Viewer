export default function DigestiveLayer({ opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 400 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity, background: 'transparent' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* ── Liver ── */}
        <linearGradient id="dig-liver-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0521C" />
          <stop offset="55%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6E4A0E" />
        </linearGradient>
        <linearGradient id="dig-liver-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9A5018" />
          <stop offset="100%" stopColor="#7A4E12" />
        </linearGradient>
        <radialGradient id="dig-liver-hi" cx="28%" cy="24%" r="52%">
          <stop offset="0%" stopColor="#C87830" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0" />
        </radialGradient>

        {/* ── Stomach ── */}
        <linearGradient id="dig-stomach" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8912A" />
          <stop offset="55%" stopColor="#C67C3A" />
          <stop offset="100%" stopColor="#A86020" />
        </linearGradient>
        <radialGradient id="dig-stomach-hi" cx="32%" cy="28%" r="55%">
          <stop offset="0%" stopColor="#F4A840" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C67C3A" stopOpacity="0" />
        </radialGradient>

        {/* ── Esophagus ── */}
        <linearGradient id="dig-esoph" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8A882" />
          <stop offset="100%" stopColor="#D49070" />
        </linearGradient>

        {/* ── Gallbladder ── */}
        <linearGradient id="dig-gb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8DB044" />
          <stop offset="100%" stopColor="#7A9E3C" />
        </linearGradient>

        {/* ── Pancreas ── */}
        <linearGradient id="dig-panc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A07C" />
          <stop offset="100%" stopColor="#C9956B" />
        </linearGradient>

        {/* ── Duodenum ── */}
        <linearGradient id="dig-duo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4924F" />
          <stop offset="100%" stopColor="#C07840" />
        </linearGradient>

        {/* ── Small intestine ── */}
        <linearGradient id="dig-si" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C08A" />
          <stop offset="100%" stopColor="#D4A76A" />
        </linearGradient>
        <radialGradient id="dig-si-hi" cx="40%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#F0D0A0" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#D4A76A" stopOpacity="0" />
        </radialGradient>

        {/* ── Large intestine ── */}
        <linearGradient id="dig-li" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4924F" />
          <stop offset="100%" stopColor="#B87A45" />
        </linearGradient>
        <linearGradient id="dig-li-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4924F" />
          <stop offset="100%" stopColor="#B87A45" />
        </linearGradient>
      </defs>

      {/* ═══════════════════════════════════════════════════
          ESOPHAGUS — narrow tube, center chest, y=168→260
      ═══════════════════════════════════════════════════ */}
      <rect
        x="197" y="168" width="6" height="92"
        rx="3" ry="3"
        fill="url(#dig-esoph)"
        stroke="#C08060" strokeWidth="0.6"
      />
      {/* Longitudinal mucosal folds */}
      <line x1="199" y1="172" x2="199" y2="256" stroke="#C08060" strokeWidth="0.45" opacity="0.7" />
      <line x1="202" y1="172" x2="202" y2="256" stroke="#C08060" strokeWidth="0.45" opacity="0.7" />
      {/* Annular mucosal folds */}
      {[186, 200, 214, 228, 242].map((y, i) => (
        <path key={i}
          d={`M197,${y} C198,${y + 2} 201,${y + 2} 203,${y}`}
          fill="none" stroke="#C08060" strokeWidth="0.5" opacity="0.6"
        />
      ))}

      {/* ═══════════════════════════════════════════════════
          PANCREAS — diagonal, behind stomach, render first
          Head: x≈205-230, y≈315-330 | Tail: left to x≈163, y≈308
      ═══════════════════════════════════════════════════ */}
      <path
        d="M163,311 C171,307 182,308 192,311 C200,313 210,317 220,321
           C226,323 232,325 232,328 C230,332 224,332 217,330
           C208,327 198,322 190,319 C180,317 170,315 163,317
           C160,316 160,313 163,311Z"
        fill="url(#dig-panc)"
        stroke="#B08060" strokeWidth="0.5"
        opacity="0.72"
      />
      {/* Pancreatic duct suggestion */}
      <path
        d="M168,314 C180,313 195,315 210,319 C220,322 228,325 230,327"
        fill="none" stroke="#A07050" strokeWidth="0.6" strokeDasharray="2,2" opacity="0.5"
      />

      {/* ═══════════════════════════════════════════════════
          LARGE INTESTINE — framing colon, render below SI
      ═══════════════════════════════════════════════════ */}

      {/* RECTUM — center, bottom pelvis */}
      <path
        d="M194,452 C192,458 191,466 192,475 C193,481 196,484 200,484
           C204,484 207,481 208,475 C209,466 208,458 206,452
           C204,448 202,446 200,446 C198,446 196,448 194,452Z"
        fill="url(#dig-li)"
        stroke="#9E6830" strokeWidth="0.8"
      />
      {/* Rectal wall folds */}
      <path d="M194,460 C196,462 204,462 206,460" fill="none" stroke="#9E6830" strokeWidth="0.55" opacity="0.7" />
      <path d="M193,470 C196,472 204,472 207,470" fill="none" stroke="#9E6830" strokeWidth="0.55" opacity="0.7" />

      {/* SIGMOID COLON — lower-left, curving into rectum */}
      <path
        d="M159,432 C156,437 153,442 156,447 C159,452 166,452 173,449
           C181,445 187,441 193,446 C197,449 194,453 194,453"
        fill="none"
        stroke="url(#dig-li)" strokeWidth="11"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M159,432 C156,437 153,442 156,447 C159,452 166,452 173,449
           C181,445 187,441 193,446 C197,449 194,453 194,453"
        fill="none"
        stroke="#9E6830" strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* DESCENDING COLON — left side, going down x≈148-160 */}
      <path
        d="M151,363 C150,377 149,394 149,410 C149,421 151,429 159,432"
        fill="none"
        stroke="url(#dig-li-v)" strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M151,363 C150,377 149,394 149,410 C149,421 151,429 159,432"
        fill="none"
        stroke="#9E6830" strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Descending haustra */}
      {[376, 391, 406, 420].map((y, i) => (
        <path key={i} d={`M148,${y} C150,${y}`} fill="none" stroke="#9E6830" strokeWidth="0.65" />
      ))}

      {/* SPLENIC FLEXURE — top-left corner */}
      <path
        d="M156,351 C153,355 151,359 151,363"
        fill="none"
        stroke="url(#dig-li)" strokeWidth="12"
        strokeLinecap="round"
      />

      {/* TRANSVERSE COLON — across top y≈340-360 */}
      <path
        d="M245,349 C231,346 216,344 200,345 C185,346 170,348 156,351"
        fill="none"
        stroke="url(#dig-li)" strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M245,349 C231,346 216,344 200,345 C185,346 170,348 156,351"
        fill="none"
        stroke="#9E6830" strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Transverse haustra */}
      {[221, 206, 191, 175].map((x, i) => (
        <path key={i} d={`M${x},345 C${x},352`} fill="none" stroke="#9E6830" strokeWidth="0.65" />
      ))}

      {/* HEPATIC FLEXURE — top-right corner */}
      <path
        d="M249,361 C249,357 247,353 245,349"
        fill="none"
        stroke="url(#dig-li)" strokeWidth="12"
        strokeLinecap="round"
      />

      {/* ASCENDING COLON — right side, going up x≈240-252 */}
      <path
        d="M250,432 C251,418 252,400 252,382 C251,372 250,366 249,361"
        fill="none"
        stroke="url(#dig-li-v)" strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M250,432 C251,418 252,400 252,382 C251,372 250,366 249,361"
        fill="none"
        stroke="#9E6830" strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Ascending haustra */}
      {[383, 397, 411, 425].map((y, i) => (
        <path key={i} d={`M246,${y} C253,${y}`} fill="none" stroke="#9E6830" strokeWidth="0.65" />
      ))}

      {/* CECUM — pear-shaped base of ascending colon, lower right */}
      <ellipse
        cx="249" cy="438"
        rx="9" ry="8"
        fill="url(#dig-li)"
        stroke="#9E6830" strokeWidth="0.8"
      />

      {/* APPENDIX — small blind-ended tube off cecum */}
      <path
        d="M255,443 C259,447 262,451 261,455 C260,458 257,458 255,455"
        fill="none"
        stroke="#B87A45" strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M255,443 C259,447 262,451 261,455 C260,458 257,458 255,455"
        fill="none"
        stroke="#9E6830" strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* ═══════════════════════════════════════════════════
          SMALL INTESTINE — tightly coiled, x≈155-245, y≈350-455
      ═══════════════════════════════════════════════════ */}
      {/* Background soft mass fill */}
      <ellipse cx="200" cy="407" rx="47" ry="53" fill="#DFB678" opacity="0.28" />

      {/* Coiled loops, bottom to top, overlapping for 2.5D depth */}
      {/* Row 5 — bottommost */}
      <ellipse cx="181" cy="450" rx="21" ry="8.5" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />
      <ellipse cx="217" cy="447" rx="19" ry="8.5" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />

      {/* Row 4 */}
      <ellipse cx="186" cy="436" rx="24" ry="9" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />
      <ellipse cx="216" cy="433" rx="22" ry="9" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />

      {/* Row 3 */}
      <ellipse cx="181" cy="419" rx="24" ry="10" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />
      <ellipse cx="216" cy="416" rx="22" ry="10" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />

      {/* Row 2 */}
      <ellipse cx="184" cy="400" rx="23" ry="10" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />
      <ellipse cx="215" cy="397" rx="21" ry="10" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />

      {/* Row 1 */}
      <ellipse cx="184" cy="381" rx="22" ry="9.5" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />
      <ellipse cx="214" cy="378" rx="20" ry="9.5" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />

      {/* Row 0 — upper connector loops */}
      <ellipse cx="188" cy="363" rx="20" ry="8.5" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />
      <ellipse cx="213" cy="361" rx="18" ry="8.5" fill="url(#dig-si)" stroke="#C09050" strokeWidth="0.75" />

      {/* Highlight overlays for perceived depth */}
      <ellipse cx="181" cy="419" rx="16" ry="6" fill="url(#dig-si-hi)" opacity="0.5" />
      <ellipse cx="216" cy="416" rx="14" ry="6" fill="url(#dig-si-hi)" opacity="0.5" />
      <ellipse cx="184" cy="400" rx="15" ry="5.5" fill="url(#dig-si-hi)" opacity="0.45" />
      <ellipse cx="181" cy="450" rx="14" ry="4.5" fill="url(#dig-si-hi)" opacity="0.38" />

      {/* ═══════════════════════════════════════════════════
          DUODENUM — C-shaped loop from pylorus around pancreas head
      ═══════════════════════════════════════════════════ */}
      <path
        d="M211,318 C221,317 233,319 239,326 C243,331 243,338 239,343
           C235,348 227,349 219,348 C215,347 212,345 212,343"
        fill="none"
        stroke="url(#dig-duo)" strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M211,318 C221,317 233,319 239,326 C243,331 243,338 239,343
           C235,348 227,349 219,348 C215,347 212,345 212,343"
        fill="none"
        stroke="#906030" strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* ═══════════════════════════════════════════════════
          STOMACH — J-shaped pouch
          Fundus: upper-left x≈155-195 y≈265-300
          Body curves to y≈330
          Pylorus exits right toward duodenum x≈210 y≈315
      ═══════════════════════════════════════════════════ */}
      {/* Greater curvature / main body */}
      <path
        d="M160,272
           C156,278 154,287 155,297
           C156,310 160,322 167,331
           C173,338 180,341 186,340
           C193,339 200,333 205,323
           C209,315 211,318 211,318
           C206,315 200,313 195,315
           C188,317 183,322 180,331
           C176,325 172,314 171,302
           C170,290 171,278 176,271
           C170,268 164,268 160,272Z"
        fill="url(#dig-stomach)"
        stroke="#9E6020" strokeWidth="0.8"
      />
      {/* Fundus — upper-left bulge */}
      <path
        d="M160,272 C157,266 157,260 160,257 C164,254 172,254 178,257
           C185,261 190,268 192,275
           C183,272 175,270 167,270 C163,270 161,271 160,272Z"
        fill="url(#dig-stomach)"
        stroke="#9E6020" strokeWidth="0.8"
      />
      {/* Lesser curvature body */}
      <path
        d="M178,257 C184,254 192,254 197,257 C202,260 204,266 202,274
           C200,283 196,291 192,300
           C189,308 186,316 185,324
           C181,332 177,340 172,338
           C167,334 163,326 162,314
           C160,302 161,288 165,276
           C168,268 173,260 178,257Z"
        fill="url(#dig-stomach)"
        stroke="#9E6020" strokeWidth="0.8"
      />
      {/* Stomach mucosal highlight */}
      <ellipse cx="177" cy="280" rx="16" ry="22" fill="url(#dig-stomach-hi)" opacity="0.62" />
      {/* Rugae folds */}
      <path d="M163,288 C171,286 181,287 189,289" fill="none" stroke="#AE7030" strokeWidth="0.65" />
      <path d="M163,299 C171,297 181,298 188,300" fill="none" stroke="#AE7030" strokeWidth="0.65" />
      <path d="M163,310 C171,308 180,309 187,311" fill="none" stroke="#AE7030" strokeWidth="0.65" />
      {/* Pyloric antrum taper */}
      <path d="M188,323 C196,319 205,318 211,318" fill="none" stroke="#9E6020" strokeWidth="1.2" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════
          LIVER — large right lobe, smaller left lobe
          Right lobe: x=192-253, y=260-335
          Left lobe:  x=163-203, y=265-310
      ═══════════════════════════════════════════════════ */}
      {/* Right lobe */}
      <path
        d="M192,263
           C203,260 216,260 229,263
           C240,267 250,274 253,284
           C255,293 252,305 248,315
           C244,323 237,331 228,335
           C219,337 210,336 202,332
           C196,328 193,322 192,315
           C191,304 192,289 192,277
           C192,270 192,265 192,263Z"
        fill="url(#dig-liver-r)"
        stroke="#6B4810" strokeWidth="0.8"
      />
      {/* Left lobe */}
      <path
        d="M192,263
           C186,261 178,261 170,264
           C163,267 158,274 158,282
           C158,292 162,304 168,310
           C174,315 181,316 188,313
           C191,311 192,306 192,298
           C192,283 192,271 192,263Z"
        fill="url(#dig-liver-l)"
        stroke="#6B4810" strokeWidth="0.8"
      />
      {/* Surface highlights */}
      <ellipse cx="219" cy="283" rx="22" ry="18" fill="url(#dig-liver-hi)" opacity="0.72" />
      <ellipse cx="173" cy="279" rx="11" ry="10" fill="url(#dig-liver-hi)" opacity="0.5" />
      {/* Interlobar fissure */}
      <path d="M192,263 C192,281 192,301 192,316" fill="none" stroke="#6B4810" strokeWidth="0.8" strokeDasharray="3,2" />
      {/* Inferior liver border */}
      <path d="M158,282 C168,309 186,317 202,317 C219,317 239,309 253,286"
        fill="none" stroke="#6B4810" strokeWidth="0.65" />
      {/* Hepatic capsule vessel branching */}
      <path d="M215,270 C220,278 224,288 222,298" fill="none" stroke="#7A5012" strokeWidth="0.6" opacity="0.55" />
      <path d="M230,275 C233,284 232,295 228,302" fill="none" stroke="#7A5012" strokeWidth="0.6" opacity="0.55" />

      {/* ═══════════════════════════════════════════════════
          GALLBLADDER — pear shape tucked under right liver lobe
          x≈218-232, y≈327-348
      ═══════════════════════════════════════════════════ */}
      <path
        d="M222,329 C220,332 218,336 218,340 C218,344 220,347 224,348
           C227,349 231,347 233,343 C235,339 234,334 231,330
           C229,327 224,326 222,329Z"
        fill="url(#dig-gb)"
        stroke="#5A7820" strokeWidth="0.7"
      />
      {/* Fundus highlight */}
      <ellipse cx="225" cy="338" rx="5" ry="7" fill="#9AC050" opacity="0.55" />
      {/* Cystic duct connecting to liver */}
      <path d="M224,329 C223,325 221,320 220,316" fill="none" stroke="#5A7820" strokeWidth="1.2" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════════════
          ESOPHAGOGASTRIC JUNCTION
      ═══════════════════════════════════════════════════ */}
      <ellipse cx="200" cy="258" rx="5" ry="4" fill="#D08060" opacity="0.65" />
    </svg>
  );
}
