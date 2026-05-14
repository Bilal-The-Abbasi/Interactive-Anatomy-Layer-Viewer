export default function CirculatoryLayer({ opacity = 1 }) {
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
        {/* Heart radial gradient */}
        <radialGradient id="circ-heartGrad" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#EF5350" />
          <stop offset="45%" stopColor="#C62828" />
          <stop offset="100%" stopColor="#7B1010" />
        </radialGradient>

        {/* Artery horizontal gradient */}
        <linearGradient id="circ-arteryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#E74C3C" />
        </linearGradient>

        {/* Aorta vertical gradient */}
        <linearGradient id="circ-aortaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EF5350" />
          <stop offset="50%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>

        {/* Vein gradient */}
        <linearGradient id="circ-veinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>

        {/* Vein vertical */}
        <linearGradient id="circ-veinVertGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3949AB" />
          <stop offset="100%" stopColor="#1A237E" />
        </linearGradient>

        {/* Pulmonary gradient (slightly lighter red) */}
        <linearGradient id="circ-pulmonaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EF9A9A" />
          <stop offset="100%" stopColor="#EF5350" />
        </linearGradient>

        {/* Glow filter for arteries */}
        <filter id="circ-arteryGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.8" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="1 0 0 0 0.6   0 0 0 0 0   0 0 0 0 0   0 0 0 0.6 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow filter for veins */}
        <filter id="circ-veinGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0.1   0 0 0 0 0.1   1 0 0 0 0.6   0 0 0 0.5 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Heart glow */}
        <filter id="circ-heartGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="1 0 0 0 0.5   0 0 0 0 0   0 0 0 0 0   0 0 0 0.7 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===================== HEART ===================== */}
      <g filter="url(#circ-heartGlow)">
        {/* Pericardial outline (subtle) */}
        <ellipse cx="199" cy="278" rx="30" ry="36"
          fill="none" stroke="#7B1010" strokeWidth="1" opacity="0.4" />

        {/* Right ventricle */}
        <path
          d="M 205 250 C 218 250 228 258 230 270 C 232 282 228 296 220 305 C 214 312 207 316 202 314 L 198 310 C 204 304 208 295 208 284 C 208 272 204 262 200 257 Z"
          fill="url(#circ-heartGrad)"
          stroke="#7B1010"
          strokeWidth="0.8"
          opacity="0.88"
        />
        {/* Left ventricle (dominant) */}
        <path
          d="M 200 248 C 190 248 180 255 177 267 C 174 280 176 295 182 306 C 186 314 192 320 198 318 C 204 316 210 310 212 302 C 208 295 205 284 205 272 C 205 260 204 252 200 248 Z"
          fill="url(#circ-heartGrad)"
          stroke="#7B1010"
          strokeWidth="0.8"
          opacity="0.95"
        />
        {/* Right atrium */}
        <ellipse cx="214" cy="256" rx="16" ry="15"
          fill="#C62828" stroke="#7B1010" strokeWidth="0.8" opacity="0.9" />
        {/* Left atrium */}
        <ellipse cx="193" cy="253" rx="14" ry="13"
          fill="#C62828" stroke="#7B1010" strokeWidth="0.8" opacity="0.9" />

        {/* Interventricular sulcus */}
        <path d="M 202 250 C 202 268 201 286 199 312"
          fill="none" stroke="#8B0000" strokeWidth="1.5" opacity="0.65" />

        {/* Heart apex */}
        <path d="M 184 308 Q 191 322 198 318 Q 205 322 212 308"
          fill="#B71C1C" stroke="#7B1010" strokeWidth="0.8" opacity="0.9" />

        {/* Right coronary artery */}
        <path d="M 202 252 C 218 256 224 268 222 280 C 220 292 212 302 204 308"
          fill="none" stroke="#E53935" strokeWidth="1.8" opacity="0.85" />
        {/* Left coronary artery - LAD */}
        <path d="M 200 252 C 184 256 180 270 181 282 C 182 294 188 306 196 312"
          fill="none" stroke="#E53935" strokeWidth="1.8" opacity="0.85" />
        {/* Circumflex branch */}
        <path d="M 200 252 C 192 248 184 250 180 256 C 176 262 178 272 184 278"
          fill="none" stroke="#EF5350" strokeWidth="1.2" opacity="0.7" />
      </g>

      {/* ===================== AORTA + ARCH ===================== */}
      <g filter="url(#circ-arteryGlow)">

        {/* Ascending aorta from left ventricle */}
        <path d="M 196 250 C 195 238 196 228 198 218"
          fill="none" stroke="url(#circ-aortaGrad)"
          strokeWidth="8" strokeLinecap="round" />

        {/* Aortic arch — sweeps up and to the right */}
        <path d="M 198 218 C 198 208 202 202 210 199 C 218 196 228 199 233 207 C 238 215 235 226 226 231"
          fill="none" stroke="#E53935"
          strokeWidth="8" strokeLinecap="round" />

        {/* Descending thoracic aorta — slightly left of spine */}
        <path d="M 226 231 C 227 245 226 260 225 278 C 224 308 222 338 221 368 C 220 398 219 428 218 458 C 217 472 216 484 215 492"
          fill="none" stroke="url(#circ-aortaGrad)"
          strokeWidth="7" strokeLinecap="round" />

        {/* ===== ARCH BRANCHES ===== */}

        {/* Brachiocephalic trunk (first from arch, right side) */}
        <path d="M 212 203 C 213 194 215 185 217 175 C 218 167 218 160 218 152"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* Right common carotid from brachiocephalic → up through neck into head */}
        <path d="M 218 152 C 217 143 215 134 213 124 C 211 115 209 106 208 97 C 207 89 207 82 207 76"
          fill="none" stroke="#E74C3C"
          strokeWidth="4" strokeLinecap="round" />

        {/* Right subclavian → right shoulder */}
        <path d="M 218 152 C 227 150 238 150 250 152 C 261 154 272 158 283 162 C 291 166 299 170 306 172"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* Left common carotid (second arch branch) → up through neck */}
        <path d="M 220 201 C 217 192 214 183 212 174 C 210 165 208 157 207 148 C 206 139 205 130 204 121 C 203 112 202 104 201 96 C 200 88 200 82 199 76"
          fill="none" stroke="#E74C3C"
          strokeWidth="4" strokeLinecap="round" />

        {/* Left subclavian (third arch branch) → left shoulder */}
        <path d="M 225 218 C 218 216 210 215 202 215 C 193 215 183 217 174 220 C 163 223 152 226 141 228 C 132 230 123 231 116 231"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* ===== RIGHT ARM ARTERIES ===== */}
        {/* Right brachial artery */}
        <path d="M 306 172 C 315 177 322 186 327 197 C 332 208 334 222 335 237 C 336 252 335 267 333 281 C 331 293 328 303 325 312"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* Right radial artery */}
        <path d="M 325 312 C 329 326 332 341 334 357 C 336 372 337 387 337 401 C 337 413 336 424 335 433"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" strokeLinecap="round" />

        {/* Right ulnar artery */}
        <path d="M 325 312 C 320 327 317 343 316 359 C 315 374 316 388 318 401 C 319 412 321 422 322 432"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" strokeLinecap="round" />

        {/* Right palmar arch */}
        <path d="M 335 433 C 332 438 327 441 321 441 C 316 441 322 432 322 432"
          fill="none" stroke="#E74C3C"
          strokeWidth="2" strokeLinecap="round" />

        {/* ===== LEFT ARM ARTERIES ===== */}
        {/* Left brachial artery */}
        <path d="M 116 231 C 107 236 99 245 93 256 C 87 267 83 281 81 295 C 79 309 79 323 81 336 C 83 347 86 357 90 365"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* Left radial artery */}
        <path d="M 90 365 C 86 379 83 394 81 409 C 79 422 79 434 79 444"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" strokeLinecap="round" />

        {/* Left ulnar artery */}
        <path d="M 90 365 C 94 380 97 395 98 410 C 99 423 99 435 98 445"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" strokeLinecap="round" />

        {/* Left palmar arch */}
        <path d="M 79 444 C 82 449 87 452 92 452 C 97 452 98 445 98 445"
          fill="none" stroke="#E74C3C"
          strokeWidth="2" strokeLinecap="round" />

        {/* ===== ILIAC BIFURCATION ===== */}
        {/* Left common iliac */}
        <path d="M 215 492 C 212 498 208 502 203 504 C 198 506 193 505 188 503"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* Right common iliac */}
        <path d="M 215 492 C 218 498 221 502 225 505 C 229 508 234 510 238 511"
          fill="none" stroke="#E74C3C"
          strokeWidth="5" strokeLinecap="round" />

        {/* ===== RIGHT LEG ARTERIES ===== */}
        {/* Right femoral artery */}
        <path d="M 238 511 C 240 522 241 535 241 550 C 241 565 240 580 239 595 C 238 610 237 624 236 637 C 235 647 234 654 233 660"
          fill="none" stroke="#E74C3C"
          strokeWidth="4" strokeLinecap="round" />

        {/* Right popliteal → anterior tibial */}
        <path d="M 233 660 C 235 672 237 686 238 700 C 239 715 238 730 236 743 C 234 755 232 765 230 773 C 228 780 226 785 225 789"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" strokeLinecap="round" />

        {/* Right posterior tibial */}
        <path d="M 233 660 C 231 673 230 687 230 702 C 230 718 231 733 232 746 C 233 758 234 769 234 777"
          fill="none" stroke="#E74C3C"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* ===== LEFT LEG ARTERIES ===== */}
        {/* Left femoral artery */}
        <path d="M 188 503 C 186 514 184 527 183 542 C 182 557 182 572 182 587 C 182 602 183 616 183 629 C 184 639 184 648 184 655"
          fill="none" stroke="#E74C3C"
          strokeWidth="4" strokeLinecap="round" />

        {/* Left popliteal → anterior tibial */}
        <path d="M 184 655 C 181 667 179 681 178 695 C 177 710 178 725 179 738 C 180 750 182 761 184 770 C 185 778 186 784 187 789"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" strokeLinecap="round" />

        {/* Left posterior tibial */}
        <path d="M 184 655 C 186 668 187 683 187 698 C 187 714 186 729 185 743 C 184 755 183 767 182 776"
          fill="none" stroke="#E74C3C"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* ===== PULMONARY VESSELS ===== */}
        {/* Pulmonary trunk from right ventricle */}
        <path d="M 208 252 C 210 244 214 239 219 236 C 224 233 230 233 235 237"
          fill="none" stroke="url(#circ-pulmonaryGrad)"
          strokeWidth="5" strokeLinecap="round" />

        {/* Right pulmonary artery */}
        <path d="M 235 237 C 242 236 250 237 257 240 C 263 243 268 248 270 254"
          fill="none" stroke="url(#circ-pulmonaryGrad)"
          strokeWidth="4" strokeLinecap="round" />

        {/* Left pulmonary artery */}
        <path d="M 219 236 C 213 235 206 235 200 237 C 194 239 188 243 185 249"
          fill="none" stroke="url(#circ-pulmonaryGrad)"
          strokeWidth="4" strokeLinecap="round" />

        {/* ===== INTERCOSTAL ARTERIES ===== */}
        {[292, 312, 332, 352, 372, 392].map((y, i) => (
          <g key={i}>
            <path d={`M 225 ${y} C 232 ${y - 2} 240 ${y - 3} 248 ${y - 2}`}
              fill="none" stroke="#E74C3C" strokeWidth="1.8" opacity="0.65" />
            <path d={`M 225 ${y} C 218 ${y - 2} 210 ${y - 3} 202 ${y - 2}`}
              fill="none" stroke="#E74C3C" strokeWidth="1.8" opacity="0.65" />
          </g>
        ))}

        {/* Celiac trunk */}
        <path d="M 219 458 C 214 458 207 459 200 461 C 194 463 188 466 184 469"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" opacity="0.85" strokeLinecap="round" />

        {/* Superior mesenteric artery */}
        <path d="M 219 470 C 213 471 206 472 200 474 C 193 477 187 481 183 485"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" opacity="0.8" strokeLinecap="round" />

        {/* Right renal artery */}
        <path d="M 220 443 C 228 443 237 444 244 447"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" opacity="0.8" strokeLinecap="round" />

        {/* Left renal artery */}
        <path d="M 220 446 C 212 446 204 447 197 449"
          fill="none" stroke="#E74C3C"
          strokeWidth="3" opacity="0.8" strokeLinecap="round" />
      </g>

      {/* ===================== VEINS ===================== */}
      <g filter="url(#circ-veinGlow)">

        {/* Superior vena cava */}
        <path d="M 213 248 C 215 238 217 227 218 216 C 219 205 219 195 218 185 C 217 174 215 163 213 152"
          fill="none" stroke="#3949AB"
          strokeWidth="6" strokeLinecap="round" />

        {/* Inferior vena cava */}
        <path d="M 214 262 C 216 278 217 296 218 316 C 219 338 219 360 218 382 C 217 404 216 426 215 448 C 214 464 214 478 213 492"
          fill="none" stroke="url(#circ-veinVertGrad)"
          strokeWidth="6" strokeLinecap="round" />

        {/* ===== JUGULAR VEINS ===== */}
        {/* Right internal jugular */}
        <path d="M 213 152 C 214 142 214 132 213 122 C 212 112 210 103 209 94 C 208 87 207 81 207 75"
          fill="none" stroke="#5C6BC0"
          strokeWidth="3.5" strokeLinecap="round" />

        {/* Left internal jugular */}
        <path d="M 198 152 C 198 142 198 132 198 122 C 198 112 197 103 196 94 C 195 87 195 81 195 75"
          fill="none" stroke="#5C6BC0"
          strokeWidth="3.5" strokeLinecap="round" />

        {/* ===== SUBCLAVIAN VEINS ===== */}
        {/* Right subclavian */}
        <path d="M 213 152 C 224 150 236 149 248 151 C 260 153 271 157 282 161 C 291 165 299 168 306 170"
          fill="none" stroke="#5C6BC0"
          strokeWidth="4" strokeLinecap="round" />

        {/* Left subclavian */}
        <path d="M 198 152 C 188 150 177 149 166 151 C 155 153 144 157 134 160 C 125 163 118 166 112 168"
          fill="none" stroke="#5C6BC0"
          strokeWidth="4" strokeLinecap="round" />

        {/* ===== RIGHT ARM VEINS ===== */}
        {/* Right brachial vein */}
        <path d="M 306 170 C 315 175 322 184 327 195 C 332 206 334 220 335 235 C 336 250 335 265 333 279 C 331 291 328 301 325 310"
          fill="none" stroke="#5C6BC0"
          strokeWidth="4" strokeLinecap="round" />

        {/* Right cephalic vein */}
        <path d="M 325 310 C 329 324 333 338 335 353 C 337 368 337 382 336 396 C 335 408 334 419 333 429"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* Right basilic vein */}
        <path d="M 325 310 C 320 325 317 340 316 355 C 315 370 316 384 318 397 C 319 408 321 419 322 429"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* ===== LEFT ARM VEINS ===== */}
        {/* Left brachial vein */}
        <path d="M 112 168 C 103 173 95 182 89 193 C 83 204 79 218 77 232 C 75 246 75 260 77 273 C 79 285 83 295 87 303"
          fill="none" stroke="#5C6BC0"
          strokeWidth="4" strokeLinecap="round" />

        {/* Left cephalic vein */}
        <path d="M 87 303 C 83 317 80 332 78 347 C 76 362 75 376 75 390 C 75 402 76 414 77 424"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* Left basilic vein */}
        <path d="M 87 303 C 91 318 94 333 95 348 C 96 363 95 377 94 390 C 93 401 91 412 90 423"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* ===== ILIAC VEINS ===== */}
        {/* Left iliac vein */}
        <path d="M 213 492 C 210 497 206 501 201 503 C 196 505 191 505 186 503"
          fill="none" stroke="#3949AB"
          strokeWidth="4.5" strokeLinecap="round" />

        {/* Right iliac vein */}
        <path d="M 213 492 C 216 497 220 501 224 504 C 228 507 233 509 237 510"
          fill="none" stroke="#3949AB"
          strokeWidth="4.5" strokeLinecap="round" />

        {/* ===== RIGHT LEG VEINS ===== */}
        {/* Right femoral vein */}
        <path d="M 237 510 C 239 521 240 534 240 549 C 239 564 238 579 237 594 C 236 609 235 623 234 636 C 233 646 232 653 231 659"
          fill="none" stroke="#3949AB"
          strokeWidth="3.5" strokeLinecap="round" />

        {/* Right great saphenous */}
        <path d="M 231 659 C 234 671 236 685 237 699 C 238 714 237 729 235 742 C 233 754 231 764 229 773 C 227 780 225 785 223 789"
          fill="none" stroke="#3949AB"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* Right popliteal vein */}
        <path d="M 231 659 C 229 672 228 686 228 701 C 228 716 229 731 230 744 C 231 756 232 767 232 775"
          fill="none" stroke="#3949AB"
          strokeWidth="2" strokeLinecap="round" />

        {/* ===== LEFT LEG VEINS ===== */}
        {/* Left femoral vein */}
        <path d="M 186 503 C 184 514 182 527 181 542 C 180 557 180 572 181 587 C 182 602 183 616 183 629 C 184 639 184 648 184 656"
          fill="none" stroke="#3949AB"
          strokeWidth="3.5" strokeLinecap="round" />

        {/* Left great saphenous */}
        <path d="M 184 656 C 181 668 179 682 178 696 C 177 711 178 726 179 739 C 181 751 183 762 185 771 C 186 779 187 785 188 789"
          fill="none" stroke="#3949AB"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* Left popliteal vein */}
        <path d="M 184 656 C 186 669 187 683 187 698 C 187 713 186 728 185 741 C 184 753 183 764 183 773"
          fill="none" stroke="#3949AB"
          strokeWidth="2" strokeLinecap="round" />

        {/* Azygos vein (right para-aortic) */}
        <path d="M 220 265 C 221 288 222 312 222 336 C 222 360 221 384 220 408 C 219 428 219 444 219 456"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2" opacity="0.65" strokeLinecap="round" />

        {/* Hepatic portal vein */}
        <path d="M 216 435 C 212 438 207 441 201 443 C 195 445 190 444 186 442 C 182 440 180 436 179 432"
          fill="none" stroke="#5C6BC0"
          strokeWidth="3" opacity="0.8" strokeLinecap="round" />

        {/* Right renal vein */}
        <path d="M 216 447 C 224 447 232 448 240 450"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />

        {/* Left renal vein */}
        <path d="M 216 450 C 208 450 200 451 193 453"
          fill="none" stroke="#5C6BC0"
          strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />

        {/* Pulmonary veins entering left atrium */}
        <path d="M 183 252 C 184 249 186 246 189 245 C 192 244 194 245 196 247"
          fill="none" stroke="#5C6BC0"
          strokeWidth="3" strokeLinecap="round" />
        <path d="M 186 260 C 187 257 189 254 192 252 C 195 251 197 252 198 254"
          fill="none" stroke="#5C6BC0"
          strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
