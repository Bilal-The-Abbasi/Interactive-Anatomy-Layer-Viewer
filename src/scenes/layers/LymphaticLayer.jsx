export default function LymphaticLayer({ opacity = 1 }) {
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
        {/* ── Lymph nodes ── */}
        <radialGradient id="ly-node-grad" cx="38%" cy="32%" r="58%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="60%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#388E3C" />
        </radialGradient>

        {/* ── Thoracic duct ── */}
        <linearGradient id="ly-duct-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#388E3C" />
        </linearGradient>

        {/* ── Spleen ── */}
        <radialGradient id="ly-spleen-grad" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#7BA87B" />
          <stop offset="60%" stopColor="#5C8B5C" />
          <stop offset="100%" stopColor="#3E6B3E" />
        </radialGradient>

        {/* ── Thymus ── */}
        <radialGradient id="ly-thymus-grad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#AED581" />
          <stop offset="60%" stopColor="#8BC34A" />
          <stop offset="100%" stopColor="#689F38" />
        </radialGradient>

        {/* ── Tonsils ── */}
        <radialGradient id="ly-tonsil-grad" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="100%" stopColor="#4CAF50" />
        </radialGradient>

        {/* ── Vessel glow filter ── */}
        <filter id="ly-node-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════
          LEG LYMPH VESSELS — thin dashed, inner aspect, both legs
          Ascending toward inguinal nodes
      ═══════════════════════════════════════════════════ */}
      {/* Left leg inner vessel */}
      <path
        d="M168,786 C169,760 170,730 170,700 C170,670 169,645 168,630
           C167,612 165,595 164,578 C163,560 162,542 161,522
           C160,502 160,484 161,468"
        fill="none" stroke="#81C784" strokeWidth="1.2"
        strokeDasharray="4,3" opacity="0.65"
      />
      {/* Right leg inner vessel */}
      <path
        d="M232,786 C231,760 230,730 230,700 C230,670 231,645 232,630
           C233,612 235,595 236,578 C237,560 238,542 239,522
           C240,502 240,484 239,468"
        fill="none" stroke="#81C784" strokeWidth="1.2"
        strokeDasharray="4,3" opacity="0.65"
      />

      {/* ═══════════════════════════════════════════════════
          POPLITEAL NODES — behind each knee
      ═══════════════════════════════════════════════════ */}
      {/* Left popliteal nodes */}
      {[{ cx: 160, cy: 645 }, { cx: 166, cy: 651 }, { cx: 160, cy: 657 }].map((n, i) => (
        <ellipse key={`lp-${i}`} cx={n.cx} cy={n.cy} rx="4" ry="3"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5" opacity="0.85"
        />
      ))}
      {/* Right popliteal nodes */}
      {[{ cx: 240, cy: 645 }, { cx: 234, cy: 651 }, { cx: 240, cy: 657 }].map((n, i) => (
        <ellipse key={`rp-${i}`} cx={n.cx} cy={n.cy} rx="4" ry="3"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5" opacity="0.85"
        />
      ))}

      {/* ═══════════════════════════════════════════════════
          INGUINAL NODES — groin area, bilateral
          Left: x≈145-165, y≈460-480 | Right: x≈235-255, y≈460-480
      ═══════════════════════════════════════════════════ */}
      {/* Left inguinal */}
      {[
        { cx: 149, cy: 462 }, { cx: 156, cy: 459 }, { cx: 162, cy: 464 },
        { cx: 152, cy: 472 }, { cx: 159, cy: 470 },
      ].map((n, i) => (
        <ellipse key={`li-${i}`} cx={n.cx} cy={n.cy} rx="5" ry="3.5"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5"
          filter="url(#ly-node-glow)" opacity="0.9"
        />
      ))}
      {/* Right inguinal */}
      {[
        { cx: 251, cy: 462 }, { cx: 244, cy: 459 }, { cx: 238, cy: 464 },
        { cx: 248, cy: 472 }, { cx: 241, cy: 470 },
      ].map((n, i) => (
        <ellipse key={`ri-${i}`} cx={n.cx} cy={n.cy} rx="5" ry="3.5"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5"
          filter="url(#ly-node-glow)" opacity="0.9"
        />
      ))}

      {/* Vessels from leg nodes toward pelvis */}
      <path d="M161,468 C162,457 162,448 163,442" fill="none" stroke="#81C784" strokeWidth="1.5" opacity="0.6" />
      <path d="M239,468 C238,457 238,448 237,442" fill="none" stroke="#81C784" strokeWidth="1.5" opacity="0.6" />

      {/* ═══════════════════════════════════════════════════
          PARA-AORTIC / MESENTERIC NODES — abdomen, around aorta
          y≈350-420, x≈188-212
      ═══════════════════════════════════════════════════ */}
      {[
        { cx: 192, cy: 355 }, { cx: 200, cy: 352 }, { cx: 208, cy: 355 },
        { cx: 190, cy: 368 }, { cx: 199, cy: 365 }, { cx: 209, cy: 368 },
        { cx: 193, cy: 382 }, { cx: 201, cy: 379 }, { cx: 209, cy: 382 },
        { cx: 192, cy: 396 }, { cx: 200, cy: 393 }, { cx: 208, cy: 396 },
        { cx: 191, cy: 410 }, { cx: 200, cy: 408 }, { cx: 209, cy: 410 },
        { cx: 193, cy: 422 }, { cx: 201, cy: 420 }, { cx: 209, cy: 422 },
      ].map((n, i) => (
        <ellipse key={`pa-${i}`} cx={n.cx} cy={n.cy} rx="4.5" ry="3"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.4" opacity="0.78"
        />
      ))}

      {/* ═══════════════════════════════════════════════════
          CISTERNA CHYLI — small oval, y≈450 x≈200 (start of thoracic duct)
      ═══════════════════════════════════════════════════ */}
      <ellipse cx="200" cy="450" rx="7" ry="5"
        fill="#388E3C" stroke="#2E7D32" strokeWidth="0.8" opacity="0.9"
      />

      {/* ═══════════════════════════════════════════════════
          THORACIC DUCT — main lymph collecting duct
          Ascends left of spine from cisterna chyli (y≈450) to left subclavian (y≈185)
      ═══════════════════════════════════════════════════ */}
      <path
        d="M200,450 C198,440 196,425 195,408 C194,390 193,370 193,352
           C193,332 193,312 193,292 C193,270 193,250 193,230
           C193,215 192,200 191,190 C190,184 189,180 188,176"
        fill="none"
        stroke="url(#ly-duct-grad)" strokeWidth="3"
        strokeLinecap="round"
        opacity="0.92"
      />
      {/* Terminal arch of thoracic duct curving over left subclavian */}
      <path
        d="M188,176 C186,172 184,169 182,167 C179,164 175,163 172,165
           C169,167 168,171 170,175 C172,179 176,181 180,181"
        fill="none"
        stroke="#2E7D32" strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* ═══════════════════════════════════════════════════
          RIGHT LYMPHATIC DUCT — shorter, drains right upper body
          Into right subclavian at approximately x≈215, y≈165
      ═══════════════════════════════════════════════════ */}
      <path
        d="M215,200 C215,194 215,188 215,183 C215,178 215,173 216,170
           C217,167 219,165 222,165 C225,165 228,167 229,171"
        fill="none"
        stroke="#388E3C" strokeWidth="2"
        strokeLinecap="round"
        opacity="0.78"
      />

      {/* ═══════════════════════════════════════════════════
          ARM LYMPH VESSELS — inner aspect, both arms
      ═══════════════════════════════════════════════════ */}
      {/* Left arm — inner vessel descending from axilla toward hand */}
      <path
        d="M134,235 C125,252 116,272 109,294 C103,314 99,338 97,362
           C95,386 95,410 97,430"
        fill="none" stroke="#A5D6A7" strokeWidth="1.2"
        strokeDasharray="4,3" opacity="0.6"
      />
      {/* Right arm — inner vessel */}
      <path
        d="M266,235 C275,252 284,272 291,294 C297,314 301,338 303,362
           C305,386 305,410 303,430"
        fill="none" stroke="#A5D6A7" strokeWidth="1.2"
        strokeDasharray="4,3" opacity="0.6"
      />

      {/* ═══════════════════════════════════════════════════
          AXILLARY NODES — armpits, bilateral
          Left: x≈128-135, y≈218-240 | Right: x≈265-272, y≈218-240
      ═══════════════════════════════════════════════════ */}
      {/* Left axillary */}
      {[
        { cx: 130, cy: 220 }, { cx: 128, cy: 229 }, { cx: 133, cy: 235 }, { cx: 129, cy: 240 },
      ].map((n, i) => (
        <ellipse key={`la-${i}`} cx={n.cx} cy={n.cy} rx="5.5" ry="4"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5"
          filter="url(#ly-node-glow)" opacity="0.9"
        />
      ))}
      {/* Right axillary */}
      {[
        { cx: 270, cy: 220 }, { cx: 272, cy: 229 }, { cx: 267, cy: 235 }, { cx: 271, cy: 240 },
      ].map((n, i) => (
        <ellipse key={`ra-${i}`} cx={n.cx} cy={n.cy} rx="5.5" ry="4"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5"
          filter="url(#ly-node-glow)" opacity="0.9"
        />
      ))}

      {/* Connecting vessels: axilla → thoracic duct area */}
      <path d="M130,225 C138,220 152,214 165,208 C178,202 190,196 193,190"
        fill="none" stroke="#81C784" strokeWidth="1.5" opacity="0.55" />
      <path d="M270,225 C262,220 248,214 235,208 C222,202 210,196 208,190"
        fill="none" stroke="#81C784" strokeWidth="1.5" opacity="0.55" />

      {/* Chest wall vessels collecting to thoracic duct */}
      <path d="M165,255 C170,248 178,243 185,238 C190,234 192,232 193,230"
        fill="none" stroke="#81C784" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
      <path d="M165,275 C170,268 178,263 185,258 C190,254 192,252 193,250"
        fill="none" stroke="#81C784" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
      <path d="M235,255 C230,248 222,243 215,238 C210,234 208,232 207,230"
        fill="none" stroke="#81C784" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />

      {/* ═══════════════════════════════════════════════════
          MEDIASTINAL NODES — chest center y≈240-280, x≈190-210
      ═══════════════════════════════════════════════════ */}
      {[
        { cx: 192, cy: 242 }, { cx: 200, cy: 240 }, { cx: 208, cy: 242 },
        { cx: 194, cy: 254 }, { cx: 201, cy: 252 }, { cx: 208, cy: 254 },
        { cx: 193, cy: 266 }, { cx: 200, cy: 264 }, { cx: 207, cy: 266 },
        { cx: 194, cy: 276 }, { cx: 201, cy: 274 }, { cx: 208, cy: 276 },
      ].map((n, i) => (
        <ellipse key={`med-${i}`} cx={n.cx} cy={n.cy} rx="4" ry="3"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.4" opacity="0.72"
        />
      ))}

      {/* ═══════════════════════════════════════════════════
          SPLEEN — upper-left abdomen x≈145-168, y≈270-310
          Largest lymphoid organ, oval shape
      ═══════════════════════════════════════════════════ */}
      <path
        d="M145,278 C143,283 143,290 145,297 C147,304 151,309 156,311
           C161,313 166,312 169,308 C172,304 172,298 170,292
           C168,285 164,279 159,276 C154,273 147,274 145,278Z"
        fill="url(#ly-spleen-grad)"
        stroke="#3E6B3E" strokeWidth="0.8"
        opacity="0.92"
      />
      {/* Spleen hilum and surface texture */}
      <path d="M157,280 C160,286 162,294 160,302 C159,307 157,310 155,310"
        fill="none" stroke="#3E6B3E" strokeWidth="0.7" opacity="0.6"
      />
      <ellipse cx="157" cy="291" rx="8" ry="11" fill="#7BA87B" opacity="0.3" />

      {/* ═══════════════════════════════════════════════════
          THYMUS — butterfly shape, upper chest y≈185-225
          Two lobes meeting at center x=200
      ═══════════════════════════════════════════════════ */}
      {/* Left thymic lobe */}
      <path
        d="M200,186 C196,184 189,184 184,187 C179,190 176,196 177,204
           C178,212 183,219 189,222 C194,225 199,224 200,220
           C200,210 200,198 200,186Z"
        fill="url(#ly-thymus-grad)"
        stroke="#5D8727" strokeWidth="0.7"
        opacity="0.88"
      />
      {/* Right thymic lobe */}
      <path
        d="M200,186 C204,184 211,184 216,187 C221,190 224,196 223,204
           C222,212 217,219 211,222 C206,225 201,224 200,220
           C200,210 200,198 200,186Z"
        fill="url(#ly-thymus-grad)"
        stroke="#5D8727" strokeWidth="0.7"
        opacity="0.88"
      />
      {/* Thymus lobule texture */}
      <path d="M186,195 C188,200 188,208 186,214" fill="none" stroke="#5D8727" strokeWidth="0.55" opacity="0.55" />
      <path d="M214,195 C212,200 212,208 214,214" fill="none" stroke="#5D8727" strokeWidth="0.55" opacity="0.55" />
      <ellipse cx="196" cy="204" rx="7" ry="10" fill="#AED581" opacity="0.25" />
      <ellipse cx="204" cy="204" rx="7" ry="10" fill="#AED581" opacity="0.25" />

      {/* ═══════════════════════════════════════════════════
          CERVICAL NODES — neck, bilateral
          y≈138-168
      ═══════════════════════════════════════════════════ */}
      {/* Left cervical chain */}
      {[
        { cx: 173, cy: 138 }, { cx: 170, cy: 147 }, { cx: 169, cy: 157 }, { cx: 170, cy: 166 },
      ].map((n, i) => (
        <ellipse key={`lc-${i}`} cx={n.cx} cy={n.cy} rx="5" ry="3.5"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5" opacity="0.88"
        />
      ))}
      {/* Right cervical chain */}
      {[
        { cx: 227, cy: 138 }, { cx: 230, cy: 147 }, { cx: 231, cy: 157 }, { cx: 230, cy: 166 },
      ].map((n, i) => (
        <ellipse key={`rc-${i}`} cx={n.cx} cy={n.cy} rx="5" ry="3.5"
          fill="url(#ly-node-grad)" stroke="#2E7D32" strokeWidth="0.5" opacity="0.88"
        />
      ))}
      {/* Cervical vessel connections */}
      <path d="M171,138 C172,132 174,128 176,125" fill="none" stroke="#81C784" strokeWidth="1" opacity="0.5" />
      <path d="M229,138 C228,132 226,128 224,125" fill="none" stroke="#81C784" strokeWidth="1" opacity="0.5" />
      <path d="M170,166 C172,172 175,178 178,182" fill="none" stroke="#81C784" strokeWidth="1.2" opacity="0.55" />
      <path d="M230,166 C228,172 225,178 222,182" fill="none" stroke="#81C784" strokeWidth="1.2" opacity="0.55" />

      {/* ═══════════════════════════════════════════════════
          TONSILS — throat area, bilateral
          Left: x≈188, Right: x≈212, y≈148-158
      ═══════════════════════════════════════════════════ */}
      <ellipse cx="188" cy="153" rx="5" ry="6"
        fill="url(#ly-tonsil-grad)" stroke="#388E3C" strokeWidth="0.6" opacity="0.9"
      />
      <ellipse cx="212" cy="153" rx="5" ry="6"
        fill="url(#ly-tonsil-grad)" stroke="#388E3C" strokeWidth="0.6" opacity="0.9"
      />
    </svg>
  );
}
