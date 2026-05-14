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
        {/* Right lung radial gradient — deeper blue-gray on edges */}
        <radialGradient id="resp-rightLungGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E1F5FE" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#B3E5FC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0.7" />
        </radialGradient>

        {/* Left lung radial gradient */}
        <radialGradient id="resp-leftLungGrad" cx="65%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E1F5FE" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#B3E5FC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0.7" />
        </radialGradient>

        {/* Airway vertical gradient */}
        <linearGradient id="resp-airwayVertGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0288D1" />
          <stop offset="100%" stopColor="#01579B" />
        </linearGradient>

        {/* Bronchial tree gradient */}
        <linearGradient id="resp-bronchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#29B6F6" />
          <stop offset="100%" stopColor="#0288D1" />
        </linearGradient>

        {/* Diaphragm gradient */}
        <linearGradient id="resp-diaphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#81D4FA" />
          <stop offset="100%" stopColor="#4FC3F7" />
        </linearGradient>

        {/* Soft lung texture glow */}
        <filter id="resp-lungGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0.2   0.6 0 0 0 0.85   1 0 0 0 1   0 0 0 0.35 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Airway glow */}
        <filter id="resp-airwayGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0   0.4 0 0 0 0.7   1 0 0 0 1   0 0 0 0.5 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Diaphragm filter */}
        <filter id="resp-diaphGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===================== NASAL CAVITY ===================== */}
      <g filter="url(#resp-airwayGlow)" opacity="0.7">
        {/* Nasal passages */}
        <ellipse cx="196" cy="54" rx="5" ry="7"
          fill="none" stroke="#0288D1" strokeWidth="1.5" />
        <ellipse cx="204" cy="54" rx="5" ry="7"
          fill="none" stroke="#0288D1" strokeWidth="1.5" />
        {/* Septum suggestion */}
        <line x1="200" y1="48" x2="200" y2="62"
          stroke="#0288D1" strokeWidth="1.2" opacity="0.8" />
        {/* Turbinate curves */}
        <path d="M 192 52 C 193 54 193 57 192 59"
          fill="none" stroke="#29B6F6" strokeWidth="1" opacity="0.7" />
        <path d="M 208 52 C 207 54 207 57 208 59"
          fill="none" stroke="#29B6F6" strokeWidth="1" opacity="0.7" />
      </g>

      {/* ===================== PHARYNX + LARYNX ===================== */}
      <g filter="url(#resp-airwayGlow)">
        {/* Pharynx — narrowing throat passage */}
        <path d="M 194 128 C 193 135 192 143 192 152 C 192 158 193 163 194 168"
          fill="none" stroke="#0288D1"
          strokeWidth="5" strokeLinecap="round" />
        <path d="M 206 128 C 207 135 208 143 208 152 C 208 158 207 163 206 168"
          fill="none" stroke="#0288D1"
          strokeWidth="5" strokeLinecap="round" />
        {/* Pharynx fill */}
        <rect x="193" y="128" width="14" height="41"
          fill="#29B6F6" opacity="0.3" rx="3" />

        {/* Larynx — slightly wider with cartilage suggestion */}
        <path d="M 191 168 C 190 172 190 177 191 182"
          fill="none" stroke="#0288D1"
          strokeWidth="6" strokeLinecap="round" />
        <path d="M 209 168 C 210 172 210 177 209 182"
          fill="none" stroke="#0288D1"
          strokeWidth="6" strokeLinecap="round" />
        <rect x="190" y="168" width="20" height="14"
          fill="#29B6F6" opacity="0.35" rx="3" />
        {/* Vocal cord suggestion */}
        <path d="M 192 174 C 196 172 204 172 208 174"
          fill="none" stroke="#0288D1" strokeWidth="1.2" opacity="0.8" />
        {/* Thyroid cartilage outline */}
        <path d="M 189 168 C 188 162 190 157 194 154 C 198 151 202 151 206 154 C 210 157 212 162 211 168"
          fill="none" stroke="#4FC3F7" strokeWidth="1.2" opacity="0.7" />
      </g>

      {/* ===================== TRACHEA ===================== */}
      <g filter="url(#resp-airwayGlow)">
        {/* Trachea walls */}
        <path d="M 191 182 C 190 196 190 210 190 224 C 190 232 190 238 191 244"
          fill="none" stroke="url(#resp-airwayVertGrad)"
          strokeWidth="7" strokeLinecap="round" />
        <path d="M 209 182 C 210 196 210 210 210 224 C 210 232 210 238 209 244"
          fill="none" stroke="url(#resp-airwayVertGrad)"
          strokeWidth="7" strokeLinecap="round" />
        {/* Tracheal lumen fill */}
        <rect x="191" y="182" width="18" height="62"
          fill="#B3E5FC" opacity="0.4" />

        {/* Tracheal cartilage rings (7 corrugation lines) */}
        {[188, 196, 204, 212, 220, 228, 236].map((y, i) => (
          <path key={i}
            d={`M 190 ${y} C 193 ${y - 2} 197 ${y - 3} 200 ${y - 3} C 203 ${y - 3} 207 ${y - 2} 210 ${y}`}
            fill="none" stroke="#0288D1"
            strokeWidth="2.5" strokeLinecap="round" opacity="0.8"
          />
        ))}
      </g>

      {/* ===================== RIGHT LUNG ===================== */}
      <g filter="url(#resp-lungGlow)">
        {/* Right lung body — 3 lobes, concave inner edge (cardiac notch) */}
        <path
          d="M 200 178 C 210 175 222 174 232 176 C 243 178 253 184 258 192
             C 263 201 263 212 261 225 C 265 238 267 254 267 272
             C 268 292 267 314 265 336 C 263 356 260 376 257 394
             C 254 410 251 424 248 434
             C 242 438 234 440 226 440 C 218 440 211 438 205 434
             C 203 428 201 420 200 412
             Z"
          fill="url(#resp-rightLungGrad)"
          stroke="#4FC3F7"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {/* Right lung fissures — suggesting 3 lobes */}
        {/* Oblique (major) fissure */}
        <path d="M 252 192 C 256 210 260 230 262 252 C 264 272 262 292 258 310 C 254 326 248 340 242 352"
          fill="none" stroke="#0288D1"
          strokeWidth="1.2" opacity="0.5" strokeDasharray="5,3" />
        {/* Horizontal (minor) fissure */}
        <path d="M 262 252 C 254 252 244 251 234 250 C 226 249 218 248 212 247"
          fill="none" stroke="#0288D1"
          strokeWidth="1" opacity="0.45" strokeDasharray="4,3" />

        {/* Right lung lobular texture (faint internal lines) */}
        <g opacity="0.18" stroke="#0288D1" strokeWidth="0.8" fill="none">
          <path d="M 220 195 C 225 205 228 218 228 232 C 228 245 225 256 221 264" />
          <path d="M 235 198 C 242 210 246 226 246 244 C 246 260 242 275 237 287" />
          <path d="M 250 210 C 255 224 258 242 257 260 C 256 276 252 290 246 302" />
          <path d="M 215 280 C 220 294 224 310 224 328 C 224 344 220 358 215 370" />
          <path d="M 232 292 C 238 308 240 326 239 344 C 238 360 234 374 228 384" />
          <path d="M 248 308 C 252 324 252 342 249 358 C 246 372 240 384 232 392" />
        </g>
      </g>

      {/* ===================== LEFT LUNG ===================== */}
      <g filter="url(#resp-lungGlow)">
        {/* Left lung body — 2 lobes, cardiac notch on right side */}
        <path
          d="M 200 178 C 190 175 178 174 168 176 C 157 178 147 184 142 192
             C 137 201 137 212 139 225 C 135 238 133 254 133 272
             C 132 292 133 314 135 336 C 137 356 140 376 143 394
             C 146 410 149 424 152 434
             C 158 438 166 440 174 440 C 182 440 189 438 195 434
             C 197 428 199 420 200 412
             Z"
          fill="url(#resp-leftLungGrad)"
          stroke="#4FC3F7"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {/* Left lung oblique (major) fissure only — 2 lobes */}
        <path d="M 148 192 C 144 210 140 230 138 252 C 136 272 138 292 142 310 C 146 326 152 340 158 352"
          fill="none" stroke="#0288D1"
          strokeWidth="1.2" opacity="0.5" strokeDasharray="5,3" />

        {/* Left lung lobular texture */}
        <g opacity="0.18" stroke="#0288D1" strokeWidth="0.8" fill="none">
          <path d="M 180 195 C 175 205 172 218 172 232 C 172 245 175 256 179 264" />
          <path d="M 165 198 C 158 210 154 226 154 244 C 154 260 158 275 163 287" />
          <path d="M 150 210 C 145 224 142 242 143 260 C 144 276 148 290 154 302" />
          <path d="M 185 280 C 180 294 176 310 176 328 C 176 344 180 358 185 370" />
          <path d="M 168 292 C 162 308 160 326 161 344 C 162 360 166 374 172 384" />
          <path d="M 152 308 C 148 324 148 342 151 358 C 154 372 160 384 168 392" />
        </g>
      </g>

      {/* ===================== BRONCHIAL TREE ===================== */}
      <g filter="url(#resp-airwayGlow)">
        {/* Carina (Y-bifurcation) */}
        <ellipse cx="200" cy="244" rx="4" ry="3"
          fill="#0288D1" opacity="0.9" />

        {/* ===== RIGHT PRIMARY BRONCHUS ===== */}
        <path d="M 200 244 C 208 244 216 246 222 250 C 228 254 231 260 231 266"
          fill="none" stroke="url(#resp-bronchGrad)"
          strokeWidth="7" strokeLinecap="round" />

        {/* Right upper lobe bronchus */}
        <path d="M 222 250 C 228 246 235 244 241 244 C 247 244 252 246 254 250"
          fill="none" stroke="#29B6F6"
          strokeWidth="4.5" strokeLinecap="round" />

        {/* Right middle lobe bronchus */}
        <path d="M 231 266 C 237 266 244 268 248 272 C 252 276 253 282 252 288"
          fill="none" stroke="#29B6F6"
          strokeWidth="4" strokeLinecap="round" />

        {/* Right lower lobe bronchus */}
        <path d="M 231 266 C 232 278 233 292 233 307 C 233 320 232 332 230 342"
          fill="none" stroke="#29B6F6"
          strokeWidth="5" strokeLinecap="round" />

        {/* Right secondary bronchi — upper lobe segmental */}
        <path d="M 254 250 C 260 246 265 248 267 253 C 269 258 267 264 263 268"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 254 250 C 258 256 260 264 258 272 C 256 278 252 282 247 284"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.8" strokeLinecap="round" />

        {/* Right secondary bronchi — middle lobe */}
        <path d="M 252 288 C 257 288 262 290 264 295 C 266 300 264 306 260 309"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 252 288 C 255 295 255 303 252 310 C 249 316 244 319 239 319"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.5" strokeLinecap="round" />

        {/* Right lower lobe secondary bronchi */}
        <path d="M 230 342 C 235 350 239 360 240 372 C 241 382 239 392 234 400"
          fill="none" stroke="#4FC3F7"
          strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 230 342 C 226 352 223 364 223 376 C 223 386 226 396 230 404"
          fill="none" stroke="#4FC3F7"
          strokeWidth="3" strokeLinecap="round" />

        {/* Right tertiary bronchioles */}
        <path d="M 263 268 C 267 276 268 286 266 296 C 264 304 259 310 254 314"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 247 284 C 252 290 255 298 254 308 C 253 316 249 323 244 327"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 260 309 C 263 316 263 325 261 333 C 259 340 255 346 250 349"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 234 400 C 237 408 237 416 234 422 C 231 427 226 430 221 430"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 230 404 C 228 413 226 422 225 430"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.2" strokeLinecap="round" />

        {/* ===== LEFT PRIMARY BRONCHUS ===== */}
        <path d="M 200 244 C 192 244 184 246 178 250 C 172 254 169 260 169 266"
          fill="none" stroke="url(#resp-bronchGrad)"
          strokeWidth="7" strokeLinecap="round" />

        {/* Left upper lobe bronchus */}
        <path d="M 178 250 C 172 246 165 244 159 244 C 153 244 148 246 146 250"
          fill="none" stroke="#29B6F6"
          strokeWidth="4.5" strokeLinecap="round" />

        {/* Left lower lobe bronchus */}
        <path d="M 169 266 C 168 278 167 292 167 307 C 167 320 168 332 170 342"
          fill="none" stroke="#29B6F6"
          strokeWidth="5" strokeLinecap="round" />

        {/* Left secondary — upper lobe segmental */}
        <path d="M 146 250 C 140 246 135 248 133 253 C 131 258 133 264 137 268"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 146 250 C 142 256 140 264 142 272 C 144 278 148 282 153 284"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.8" strokeLinecap="round" />

        {/* Left lower lobe secondary bronchi */}
        <path d="M 170 342 C 165 350 161 360 160 372 C 159 382 161 392 166 400"
          fill="none" stroke="#4FC3F7"
          strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 170 342 C 174 352 177 364 177 376 C 177 386 174 396 170 404"
          fill="none" stroke="#4FC3F7"
          strokeWidth="3" strokeLinecap="round" />

        {/* Left tertiary bronchioles */}
        <path d="M 137 268 C 133 276 132 286 134 296 C 136 304 141 310 146 314"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 153 284 C 148 290 145 298 146 308 C 147 316 151 323 156 327"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 166 400 C 163 408 163 416 166 422 C 169 427 174 430 179 430"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 170 404 C 172 413 174 422 175 430"
          fill="none" stroke="#81D4FA"
          strokeWidth="1.2" strokeLinecap="round" />

        {/* Fine bronchiole peripheral endings — right lung */}
        {[
          [262, 330], [255, 355], [246, 376], [240, 395],
          [253, 314], [261, 298], [264, 278],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.5" fill="#B3E5FC" opacity="0.6" />
            <circle cx={x} cy={y} r="4.5" fill="none" stroke="#81D4FA" strokeWidth="0.8" opacity="0.35" />
          </g>
        ))}

        {/* Fine bronchiole peripheral endings — left lung */}
        {[
          [138, 330], [145, 355], [154, 376], [160, 395],
          [147, 314], [139, 298], [136, 278],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.5" fill="#B3E5FC" opacity="0.6" />
            <circle cx={x} cy={y} r="4.5" fill="none" stroke="#81D4FA" strokeWidth="0.8" opacity="0.35" />
          </g>
        ))}
      </g>

      {/* ===================== DIAPHRAGM ===================== */}
      <g filter="url(#resp-diaphGlow)">
        {/* Diaphragm dome — arches upward to center */}
        <path
          d="M 142 448 C 148 438 158 432 170 430 C 182 428 192 428 200 425
             C 208 428 218 428 230 430 C 242 432 252 438 258 448"
          fill="none"
          stroke="url(#resp-diaphGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Diaphragm body fill (semi-transparent) */}
        <path
          d="M 142 448 C 148 438 158 432 170 430 C 182 428 192 428 200 425
             C 208 428 218 428 230 430 C 242 432 252 438 258 448
             L 258 456 C 252 452 242 446 230 444 C 218 442 208 442 200 445
             C 192 442 182 442 170 444 C 158 446 148 452 142 456 Z"
          fill="#4FC3F7"
          opacity="0.35"
        />

        {/* Central tendon suggestion */}
        <ellipse cx="200" cy="430" rx="18" ry="8"
          fill="#81D4FA" opacity="0.45"
          stroke="#29B6F6" strokeWidth="1" />

        {/* Diaphragm muscle fiber lines (bilateral) */}
        <path d="M 200 426 C 192 428 182 432 172 438 C 164 443 156 449 150 455"
          fill="none" stroke="#4FC3F7" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" />
        <path d="M 200 426 C 208 428 218 432 228 438 C 236 443 244 449 250 455"
          fill="none" stroke="#4FC3F7" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" />
        <path d="M 200 427 C 190 430 178 434 168 440 C 160 445 154 451 149 457"
          fill="none" stroke="#4FC3F7" strokeWidth="0.9" opacity="0.4" strokeLinecap="round" />
        <path d="M 200 427 C 210 430 222 434 232 440 C 240 445 246 451 251 457"
          fill="none" stroke="#4FC3F7" strokeWidth="0.9" opacity="0.4" strokeLinecap="round" />

        {/* Aortic hiatus indication */}
        <path d="M 197 436 C 199 434 201 434 203 436"
          fill="none" stroke="#29B6F6" strokeWidth="1.5" opacity="0.7" />

        {/* Esophageal hiatus */}
        <path d="M 196 430 C 198 428 202 428 204 430"
          fill="none" stroke="#29B6F6" strokeWidth="1.2" opacity="0.6" />
      </g>
    </svg>
  );
}
