export default function NervousLayer({ opacity = 1 }) {
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
        {/* CNS radial gradient */}
        <radialGradient id="nerv-brainGrad" cx="45%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#81D4FA" />
          <stop offset="55%" stopColor="#29B6F6" />
          <stop offset="100%" stopColor="#0277BD" />
        </radialGradient>

        {/* Cerebellum gradient */}
        <radialGradient id="nerv-cerebGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#0288D1" />
        </radialGradient>

        {/* Spinal cord gradient */}
        <linearGradient id="nerv-spinalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#29B6F6" />
          <stop offset="60%" stopColor="#0288D1" />
          <stop offset="100%" stopColor="#01579B" />
        </linearGradient>

        {/* Peripheral nerve gradient */}
        <linearGradient id="nerv-periGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#81D4FA" />
        </linearGradient>

        {/* CNS glow (cyan-electric) */}
        <filter id="nerv-cnsGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0   0.5 0 0 0 0.8   1 0 0 0 1   0 0 0 0.65 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Peripheral nerve glow (subtle) */}
        <filter id="nerv-periGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0   0.4 0 0 0 0.7   1 0 0 0 1   0 0 0 0.45 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Plexus glow */}
        <filter id="nerv-plexGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0.1   0.6 0 0 0 0.9   1 0 0 0 1   0 0 0 0.55 0"
            result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===================== BRAIN ===================== */}
      <g filter="url(#nerv-cnsGlow)">
        {/* Cerebrum — bilateral hemispheres filling head interior */}
        {/* Left hemisphere */}
        <path
          d="M 200 30 C 186 28 172 32 163 40 C 154 48 150 58 150 68
             C 150 80 154 90 160 98 C 166 106 174 112 180 116
             C 186 120 192 122 198 122
             L 200 122 Z"
          fill="url(#nerv-brainGrad)"
          stroke="#0288D1"
          strokeWidth="1.2"
          opacity="0.92"
        />
        {/* Right hemisphere */}
        <path
          d="M 200 30 C 214 28 228 32 237 40 C 246 48 250 58 250 68
             C 250 80 246 90 240 98 C 234 106 226 112 220 116
             C 214 120 208 122 202 122
             L 200 122 Z"
          fill="url(#nerv-brainGrad)"
          stroke="#0288D1"
          strokeWidth="1.2"
          opacity="0.92"
        />
        {/* Interhemispheric fissure (central sulcus) */}
        <line x1="200" y1="30" x2="200" y2="116"
          stroke="#0277BD" strokeWidth="1.8" opacity="0.7" />

        {/* Major sulci — left hemisphere */}
        <path d="M 163 55 C 170 52 178 52 185 55"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />
        <path d="M 158 70 C 166 66 175 65 183 67"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />
        <path d="M 156 84 C 164 80 173 79 181 81"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />
        <path d="M 160 97 C 168 93 176 91 183 93"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />

        {/* Major sulci — right hemisphere */}
        <path d="M 237 55 C 230 52 222 52 215 55"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />
        <path d="M 242 70 C 234 66 225 65 217 67"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />
        <path d="M 244 84 C 236 80 227 79 219 81"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />
        <path d="M 240 97 C 232 93 224 91 217 93"
          fill="none" stroke="#0277BD" strokeWidth="1" opacity="0.6" />

        {/* Cerebellum (posterior inferior) */}
        <ellipse cx="200" cy="120" rx="26" ry="14"
          fill="url(#nerv-cerebGrad)"
          stroke="#0288D1" strokeWidth="1" opacity="0.9" />
        {/* Cerebellar folia lines */}
        <path d="M 177 118 C 183 116 191 115 200 115 C 209 115 217 116 223 118"
          fill="none" stroke="#0277BD" strokeWidth="0.8" opacity="0.65" />
        <path d="M 178 122 C 184 120 192 119 200 119 C 208 119 216 120 222 122"
          fill="none" stroke="#0277BD" strokeWidth="0.8" opacity="0.65" />

        {/* Brainstem — midbrain, pons, medulla */}
        <path
          d="M 194 128 C 192 133 191 138 192 143 C 193 148 196 152 200 153 C 204 152 207 148 208 143 C 209 138 208 133 206 128 Z"
          fill="#29B6F6"
          stroke="#0288D1" strokeWidth="1" opacity="0.9"
        />

        {/* Optic nerves from brain */}
        <path d="M 193 78 C 188 82 183 86 179 90 C 176 93 174 96 173 99"
          fill="none" stroke="#4FC3F7" strokeWidth="1.5" opacity="0.75" />
        <path d="M 207 78 C 212 82 217 86 221 90 C 224 93 226 96 227 99"
          fill="none" stroke="#4FC3F7" strokeWidth="1.5" opacity="0.75" />
        {/* Optic chiasm */}
        <ellipse cx="200" cy="100" rx="8" ry="4"
          fill="#4FC3F7" opacity="0.65" />
      </g>

      {/* ===================== SPINAL CORD ===================== */}
      <g filter="url(#nerv-cnsGlow)">
        {/* Cervical spinal cord */}
        <path
          d="M 197 153 C 196 158 195 164 195 170 C 195 178 196 186 197 194 C 198 200 199 204 200 206"
          fill="none" stroke="url(#nerv-spinalGrad)"
          strokeWidth="6" strokeLinecap="round"
        />
        <path
          d="M 203 153 C 204 158 205 164 205 170 C 205 178 204 186 203 194 C 202 200 201 204 200 206"
          fill="none" stroke="url(#nerv-spinalGrad)"
          strokeWidth="6" strokeLinecap="round"
        />
        {/* Cord outline fill */}
        <path
          d="M 197 153 C 195 165 195 178 196 192 C 197 200 199 205 200 207 C 201 205 203 200 204 192 C 205 178 205 165 203 153 Z"
          fill="#29B6F6" opacity="0.55"
        />

        {/* Thoracic spinal cord */}
        <path
          d="M 200 206 C 200 220 200 240 200 262 C 200 290 200 320 200 350 C 200 365 200 378 200 390"
          fill="none" stroke="url(#nerv-spinalGrad)"
          strokeWidth="5" strokeLinecap="round"
        />

        {/* Lumbar enlargement + cauda equina */}
        <path
          d="M 200 390 C 200 402 200 415 200 428 C 200 440 201 450 202 458"
          fill="none" stroke="#0288D1"
          strokeWidth="5" strokeLinecap="round"
        />
        {/* Cauda equina filaments */}
        {[-6, -3, 0, 3, 6].map((offset, i) => (
          <path key={i}
            d={`M ${200 + offset * 0.5} 450 C ${200 + offset} 460 ${200 + offset * 1.5} 470 ${200 + offset * 2} 480`}
            fill="none" stroke="#4FC3F7"
            strokeWidth="1" opacity="0.7"
          />
        ))}
      </g>

      {/* ===================== BRACHIAL PLEXUS ===================== */}
      <g filter="url(#nerv-plexGlow)">
        {/* Right brachial plexus roots from C5-T1 (right side) */}
        <path d="M 203 160 C 210 160 218 162 225 165 C 232 168 238 172 242 176"
          fill="none" stroke="#B3E5FC"
          strokeWidth="2.5" opacity="0.9" strokeLinecap="round" />
        <path d="M 203 165 C 211 165 220 167 228 170 C 235 173 241 177 245 181"
          fill="none" stroke="#B3E5FC"
          strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <path d="M 203 170 C 212 170 221 172 229 175 C 237 178 243 182 247 187"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.8" opacity="0.8" strokeLinecap="round" />
        <path d="M 203 175 C 212 175 221 176 229 179 C 237 182 243 186 247 191"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />

        {/* Right brachial plexus trunk convergence */}
        <path d="M 242 176 C 248 178 254 182 258 187 C 262 191 264 196 264 201"
          fill="none" stroke="#4FC3F7"
          strokeWidth="3" opacity="0.85" strokeLinecap="round" />

        {/* Left brachial plexus roots from C5-T1 (left side) */}
        <path d="M 197 160 C 190 160 182 162 175 165 C 168 168 162 172 158 176"
          fill="none" stroke="#B3E5FC"
          strokeWidth="2.5" opacity="0.9" strokeLinecap="round" />
        <path d="M 197 165 C 189 165 180 167 172 170 C 165 173 159 177 155 181"
          fill="none" stroke="#B3E5FC"
          strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <path d="M 197 170 C 188 170 179 172 171 175 C 163 178 157 182 153 187"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.8" opacity="0.8" strokeLinecap="round" />
        <path d="M 197 175 C 188 175 179 176 171 179 C 163 182 157 186 153 191"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />

        {/* Left brachial plexus trunk convergence */}
        <path d="M 158 176 C 152 178 146 182 142 187 C 138 191 136 196 136 201"
          fill="none" stroke="#4FC3F7"
          strokeWidth="3" opacity="0.85" strokeLinecap="round" />
      </g>

      {/* ===================== RIGHT ARM NERVES ===================== */}
      <g filter="url(#nerv-periGlow)">
        {/* Musculocutaneous nerve — lateral bicep */}
        <path d="M 264 201 C 268 214 271 228 272 243 C 273 257 272 271 270 284 C 268 295 265 305 262 313"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2" strokeLinecap="round"
          strokeDasharray="8,3"
        />

        {/* Median nerve — central forearm to hand */}
        <path d="M 264 201 C 268 215 271 230 272 246 C 273 262 272 278 270 293 C 268 306 265 317 262 326
                 C 265 340 268 356 269 372 C 270 387 269 400 267 411 C 266 420 264 428 263 434"
          fill="none" stroke="#81D4FA"
          strokeWidth="2" strokeLinecap="round"
        />

        {/* Ulnar nerve — medial side */}
        <path d="M 264 201 C 266 215 268 230 268 246 C 268 262 266 278 264 293
                 C 262 308 260 321 259 333 C 258 348 257 364 257 380 C 257 394 258 406 260 416 C 261 424 263 431 264 436"
          fill="none" stroke="#4FC3F7"
          strokeWidth="1.8" strokeLinecap="round"
          strokeDasharray="6,3"
        />

        {/* Radial nerve — lateral and posterior */}
        <path d="M 264 201 C 270 216 274 232 276 248 C 278 264 277 280 274 294 C 272 305 268 314 265 321
                 C 268 334 272 350 275 366 C 277 380 276 393 274 404 C 272 413 270 421 269 428"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.8" strokeLinecap="round"
        />

        {/* Terminal hand branches */}
        <path d="M 263 434 C 261 438 260 442 260 446"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 264 436 C 264 440 264 444 264 448"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 266 435 C 267 439 268 443 269 447"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* ===================== LEFT ARM NERVES ===================== */}
      <g filter="url(#nerv-periGlow)">
        {/* Musculocutaneous nerve */}
        <path d="M 136 201 C 132 214 129 228 128 243 C 127 257 128 271 130 284 C 132 295 135 305 138 313"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2" strokeLinecap="round"
          strokeDasharray="8,3"
        />

        {/* Median nerve */}
        <path d="M 136 201 C 132 215 129 230 128 246 C 127 262 128 278 130 293 C 132 306 135 317 138 326
                 C 135 340 132 356 131 372 C 130 387 131 400 133 411 C 134 420 136 428 137 434"
          fill="none" stroke="#81D4FA"
          strokeWidth="2" strokeLinecap="round"
        />

        {/* Ulnar nerve */}
        <path d="M 136 201 C 134 215 132 230 132 246 C 132 262 134 278 136 293
                 C 138 308 140 321 141 333 C 142 348 143 364 143 380 C 143 394 142 406 140 416 C 139 424 137 431 136 436"
          fill="none" stroke="#4FC3F7"
          strokeWidth="1.8" strokeLinecap="round"
          strokeDasharray="6,3"
        />

        {/* Radial nerve */}
        <path d="M 136 201 C 130 216 126 232 124 248 C 122 264 123 280 126 294 C 128 305 132 314 135 321
                 C 132 334 128 350 125 366 C 123 380 124 393 126 404 C 128 413 130 421 131 428"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.8" strokeLinecap="round"
        />

        {/* Terminal hand branches */}
        <path d="M 137 434 C 139 438 140 442 140 446"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 136 436 C 136 440 136 444 136 448"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 134 435 C 133 439 132 443 131 447"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* ===================== LUMBAR + SACRAL PLEXUS ===================== */}
      <g filter="url(#nerv-plexGlow)">
        {/* Lumbar plexus roots (L1-L4) — right side */}
        <path d="M 202 385 C 210 387 218 390 225 394 C 232 398 238 403 242 408"
          fill="none" stroke="#B3E5FC"
          strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <path d="M 202 392 C 210 394 219 397 227 401 C 234 405 240 410 244 416"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.8" opacity="0.8" strokeLinecap="round" />
        <path d="M 202 399 C 211 401 220 404 228 408 C 236 412 241 417 244 422"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />

        {/* Lumbar plexus roots (L1-L4) — left side */}
        <path d="M 198 385 C 190 387 182 390 175 394 C 168 398 162 403 158 408"
          fill="none" stroke="#B3E5FC"
          strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <path d="M 198 392 C 190 394 181 397 173 401 C 166 405 160 410 156 416"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.8" opacity="0.8" strokeLinecap="round" />
        <path d="M 198 399 C 189 401 180 404 172 408 C 164 412 159 417 156 422"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.5" opacity="0.75" strokeLinecap="round" />

        {/* Sacral plexus — right */}
        <path d="M 202 428 C 211 430 220 433 228 437 C 236 441 242 446 245 452"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2" opacity="0.8" strokeLinecap="round" />
        <path d="M 202 436 C 212 438 221 441 229 446 C 237 450 242 456 244 462"
          fill="none" stroke="#4FC3F7"
          strokeWidth="1.8" opacity="0.75" strokeLinecap="round" />

        {/* Sacral plexus — left */}
        <path d="M 198 428 C 189 430 180 433 172 437 C 164 441 158 446 155 452"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2" opacity="0.8" strokeLinecap="round" />
        <path d="M 198 436 C 188 438 179 441 171 446 C 163 450 158 456 156 462"
          fill="none" stroke="#4FC3F7"
          strokeWidth="1.8" opacity="0.75" strokeLinecap="round" />
      </g>

      {/* ===================== RIGHT LEG NERVES ===================== */}
      <g filter="url(#nerv-periGlow)">
        {/* Femoral nerve — front of right thigh */}
        <path d="M 242 408 C 244 420 244 434 242 448 C 240 462 237 476 234 490
                 C 231 504 229 518 228 532 C 227 546 228 558 229 569"
          fill="none" stroke="#81D4FA"
          strokeWidth="2" strokeLinecap="round"
          strokeDasharray="7,3"
        />

        {/* Sciatic nerve — right — large, thick */}
        <path d="M 245 452 C 246 462 245 474 243 486 C 241 498 238 510 236 522
                 C 234 536 232 550 231 564 C 230 577 231 588 232 598"
          fill="none" stroke="#29B6F6"
          strokeWidth="3.5" strokeLinecap="round"
        />

        {/* Right tibial nerve (continuation of sciatic past knee) */}
        <path d="M 232 598 C 232 611 231 625 230 639 C 229 653 228 666 228 679
                 C 228 692 229 704 230 715 C 231 725 232 733 233 740"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.5" strokeLinecap="round"
        />

        {/* Right common peroneal nerve (lateral branch at knee) */}
        <path d="M 232 598 C 236 610 240 623 242 637 C 244 650 244 663 242 675
                 C 240 686 237 695 234 703"
          fill="none" stroke="#81D4FA"
          strokeWidth="2" strokeLinecap="round"
          strokeDasharray="6,3"
        />

        {/* Right sural nerve (posterior lower leg) */}
        <path d="M 233 740 C 232 752 231 763 231 773 C 231 781 232 787 233 791"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.5" strokeLinecap="round"
        />
      </g>

      {/* ===================== LEFT LEG NERVES ===================== */}
      <g filter="url(#nerv-periGlow)">
        {/* Femoral nerve — front of left thigh */}
        <path d="M 158 408 C 156 420 156 434 158 448 C 160 462 163 476 166 490
                 C 169 504 171 518 172 532 C 173 546 172 558 171 569"
          fill="none" stroke="#81D4FA"
          strokeWidth="2" strokeLinecap="round"
          strokeDasharray="7,3"
        />

        {/* Sciatic nerve — left */}
        <path d="M 155 452 C 154 462 155 474 157 486 C 159 498 162 510 164 522
                 C 166 536 168 550 169 564 C 170 577 169 588 168 598"
          fill="none" stroke="#29B6F6"
          strokeWidth="3.5" strokeLinecap="round"
        />

        {/* Left tibial nerve */}
        <path d="M 168 598 C 168 611 169 625 170 639 C 171 653 172 666 172 679
                 C 172 692 171 704 170 715 C 169 725 168 733 167 740"
          fill="none" stroke="#4FC3F7"
          strokeWidth="2.5" strokeLinecap="round"
        />

        {/* Left common peroneal nerve */}
        <path d="M 168 598 C 164 610 160 623 158 637 C 156 650 156 663 158 675
                 C 160 686 163 695 166 703"
          fill="none" stroke="#81D4FA"
          strokeWidth="2" strokeLinecap="round"
          strokeDasharray="6,3"
        />

        {/* Left sural nerve */}
        <path d="M 167 740 C 168 752 169 763 169 773 C 169 781 168 787 167 791"
          fill="none" stroke="#B3E5FC"
          strokeWidth="1.5" strokeLinecap="round"
        />
      </g>

      {/* ===================== INTERCOSTAL NERVES (thoracic) ===================== */}
      <g opacity="0.55" filter="url(#nerv-periGlow)">
        {[215, 235, 255, 275, 295, 315, 335, 355].map((y, i) => (
          <g key={i}>
            {/* Right intercostal */}
            <path
              d={`M 202 ${y} C 212 ${y - 1} 222 ${y + 1} 232 ${y + 3} C 238 ${y + 4} 244 ${y + 3} 248 ${y}`}
              fill="none" stroke="#4FC3F7" strokeWidth="1.2" strokeLinecap="round"
            />
            {/* Left intercostal */}
            <path
              d={`M 198 ${y} C 188 ${y - 1} 178 ${y + 1} 168 ${y + 3} C 162 ${y + 4} 156 ${y + 3} 152 ${y}`}
              fill="none" stroke="#4FC3F7" strokeWidth="1.2" strokeLinecap="round"
            />
          </g>
        ))}
      </g>

      {/* ===================== CRANIAL NERVES (subtle) ===================== */}
      <g opacity="0.7" filter="url(#nerv-periGlow)">
        {/* Trigeminal branches */}
        <path d="M 182 80 C 174 86 167 94 163 102"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round"
          strokeDasharray="4,2" />
        <path d="M 218 80 C 226 86 233 94 237 102"
          fill="none" stroke="#81D4FA" strokeWidth="1.2" strokeLinecap="round"
          strokeDasharray="4,2" />
        {/* Facial nerve */}
        <path d="M 178 90 C 170 96 164 104 161 112"
          fill="none" stroke="#B3E5FC" strokeWidth="1" strokeLinecap="round" />
        <path d="M 222 90 C 230 96 236 104 239 112"
          fill="none" stroke="#B3E5FC" strokeWidth="1" strokeLinecap="round" />
        {/* Vagus nerve suggestion down neck */}
        <path d="M 196 132 C 196 140 196 150 196 160"
          fill="none" stroke="#81D4FA" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray="5,2" />
        <path d="M 204 132 C 204 140 204 150 204 160"
          fill="none" stroke="#81D4FA" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray="5,2" />
      </g>
    </svg>
  );
}
