export default function SkinLayer({ opacity = 1 }) {
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
        {/* Main body gradient — warm peach, top-left to bottom-right */}
        <linearGradient id="skin-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C4A2" />
          <stop offset="40%" stopColor="#D4A57E" />
          <stop offset="100%" stopColor="#B8845C" />
        </linearGradient>

        {/* Lighter highlight gradient for front-facing planes */}
        <linearGradient id="skin-highlight-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EDD0B0" />
          <stop offset="100%" stopColor="#C8996E" />
        </linearGradient>

        {/* Shadow gradient for limb sides */}
        <linearGradient id="skin-shadow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8845C" />
          <stop offset="100%" stopColor="#C4956E" />
        </linearGradient>

        {/* Face gradient */}
        <radialGradient id="skin-face-grad" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#EDD0B0" />
          <stop offset="70%" stopColor="#D4A57E" />
          <stop offset="100%" stopColor="#C4956E" />
        </radialGradient>

        {/* Hair gradient */}
        <radialGradient id="skin-hair-grad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#5C3D1E" />
          <stop offset="100%" stopColor="#3B2510" />
        </radialGradient>

        {/* Knee gradient */}
        <radialGradient id="skin-knee-grad" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#DDB894" />
          <stop offset="100%" stopColor="#C4956E" />
        </radialGradient>

        {/* Left arm gradient */}
        <linearGradient id="skin-left-arm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8845C" />
          <stop offset="40%" stopColor="#D4A57E" />
          <stop offset="100%" stopColor="#C4956E" />
        </linearGradient>

        {/* Right arm gradient */}
        <linearGradient id="skin-right-arm-grad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#B8845C" />
          <stop offset="40%" stopColor="#D4A57E" />
          <stop offset="100%" stopColor="#C4956E" />
        </linearGradient>

        {/* Torso front gradient */}
        <linearGradient id="skin-torso-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DDB894" />
          <stop offset="50%" stopColor="#D4A57E" />
          <stop offset="100%" stopColor="#C4956E" />
        </linearGradient>

        {/* Leg gradient */}
        <linearGradient id="skin-leg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A57E" />
          <stop offset="100%" stopColor="#C0906A" />
        </linearGradient>
      </defs>

      {/* ═══════════════════════════════════════
          HAIR — dark cap on top of head
      ═══════════════════════════════════════ */}
      <ellipse cx="200" cy="54" rx="57" ry="38" fill="url(#skin-hair-grad)" />
      {/* Hair side wisps */}
      <path
        d="M144,62 C138,50 140,38 148,30 C150,44 149,56 144,62Z"
        fill="#3B2510"
      />
      <path
        d="M256,62 C262,50 260,38 252,30 C250,44 251,56 256,62Z"
        fill="#3B2510"
      />

      {/* ═══════════════════════════════════════
          HEAD
      ═══════════════════════════════════════ */}
      <ellipse
        cx="200"
        cy="78"
        rx="56"
        ry="62"
        fill="url(#skin-face-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* Ears */}
      <ellipse cx="145" cy="82" rx="9" ry="13" fill="#C8996E" stroke="#B8845C" strokeWidth="0.5" />
      <path d="M149,75 C152,78 152,86 149,89" fill="none" stroke="#B0815A" strokeWidth="1" />
      <ellipse cx="255" cy="82" rx="9" ry="13" fill="#C8996E" stroke="#B8845C" strokeWidth="0.5" />
      <path d="M251,75 C248,78 248,86 251,89" fill="none" stroke="#B0815A" strokeWidth="1" />

      {/* ═══════════════════════════════════════
          FACIAL FEATURES
      ═══════════════════════════════════════ */}
      {/* Brow ridges (subtle) */}
      <path d="M172,62 C180,58 188,57 196,58" fill="none" stroke="#C0906A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M228,62 C220,58 212,57 204,58" fill="none" stroke="#C0906A" strokeWidth="1.2" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="182" cy="72" rx="11" ry="7" fill="#2C1810" />
      <ellipse cx="218" cy="72" rx="11" ry="7" fill="#2C1810" />
      {/* Iris */}
      <ellipse cx="182" cy="72" rx="7" ry="5.5" fill="#3D5A80" />
      <ellipse cx="218" cy="72" rx="7" ry="5.5" fill="#3D5A80" />
      {/* Pupil */}
      <ellipse cx="182" cy="72" rx="3.5" ry="3.5" fill="#0A0A0A" />
      <ellipse cx="218" cy="72" rx="3.5" ry="3.5" fill="#0A0A0A" />
      {/* Eye highlight */}
      <ellipse cx="185" cy="70" rx="1.5" ry="1" fill="white" />
      <ellipse cx="221" cy="70" rx="1.5" ry="1" fill="white" />
      {/* Upper eyelid lines */}
      <path d="M171,69 C176,64 188,64 193,69" fill="none" stroke="#3B2510" strokeWidth="1.2" />
      <path d="M207,69 C212,64 224,64 229,69" fill="none" stroke="#3B2510" strokeWidth="1.2" />
      {/* Lower eyelid lines */}
      <path d="M171,75 C176,78 188,78 193,75" fill="none" stroke="#C0906A" strokeWidth="0.7" />
      <path d="M207,75 C212,78 224,78 229,75" fill="none" stroke="#C0906A" strokeWidth="0.7" />

      {/* Nose */}
      <path
        d="M200,78 C199,85 196,90 192,94 C194,96 200,97 208,94 C204,90 201,85 200,78Z"
        fill="#C8906A"
        stroke="#B8845C"
        strokeWidth="0.5"
      />
      {/* Nostrils */}
      <ellipse cx="194" cy="95" rx="4" ry="2.5" fill="#A87050" />
      <ellipse cx="206" cy="95" rx="4" ry="2.5" fill="#A87050" />

      {/* Lips */}
      {/* Upper lip */}
      <path
        d="M188,105 C192,101 196,100 200,101 C204,100 208,101 212,105 C208,107 204,108 200,107.5 C196,108 192,107 188,105Z"
        fill="#C07060"
        stroke="#A85848"
        strokeWidth="0.5"
      />
      {/* Lower lip */}
      <path
        d="M188,105 C192,112 196,114 200,113.5 C204,114 208,112 212,105 C208,108 204,109 200,108.5 C196,109 192,108 188,105Z"
        fill="#D08070"
        stroke="#A85848"
        strokeWidth="0.5"
      />
      {/* Lip center line */}
      <path d="M188,105 C194,106 206,106 212,105" fill="none" stroke="#A85848" strokeWidth="0.6" />

      {/* Philtrum */}
      <path d="M197,98 C198,101 200,101 202,98" fill="none" stroke="#C0906A" strokeWidth="0.7" />

      {/* Chin dimple */}
      <path d="M197,122 C199,124 201,122" fill="none" stroke="#C0906A" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════
          NECK
      ═══════════════════════════════════════ */}
      <path
        d="M178,138 C176,142 175,150 175,158 C175,163 176,168 178,168
           L222,168 C224,168 225,163 225,158 C225,150 224,142 222,138Z"
        fill="url(#skin-highlight-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />
      {/* Sternocleidomastoid suggestion on neck */}
      <path d="M186,140 C184,148 182,158 181,168" fill="none" stroke="#C0906A" strokeWidth="0.8" />
      <path d="M214,140 C216,148 218,158 219,168" fill="none" stroke="#C0906A" strokeWidth="0.8" />

      {/* ═══════════════════════════════════════
          LEFT ARM
      ═══════════════════════════════════════ */}
      <path
        d="M90,192
           C88,210 84,240 82,280 C80,310 80,328 82,345
           C80,365 78,410 78,450 C78,465 78,478 78,490
           C82,492 88,494 97,495
           C100,490 104,475 108,460 C112,440 114,420 116,400
           C118,370 120,355 120,345
           C122,325 124,300 126,270 C128,248 130,230 130,222
           C118,218 104,208 90,192Z"
        fill="url(#skin-left-arm-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          RIGHT ARM
      ═══════════════════════════════════════ */}
      <path
        d="M310,192
           C312,210 316,240 318,280 C320,310 320,328 318,345
           C320,365 322,410 322,450 C322,465 322,478 322,490
           C318,492 312,494 303,495
           C300,490 296,475 292,460 C288,440 286,420 284,400
           C282,370 280,355 280,345
           C278,325 276,300 274,270 C272,248 270,230 270,222
           C282,218 296,208 310,192Z"
        fill="url(#skin-right-arm-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          LEFT HAND
      ═══════════════════════════════════════ */}
      <path
        d="M78,490 C76,498 75,508 75,518
           C74,524 74,530 75,534
           C76,538 78,541 80,542
           C78,544 76,547 76,550
           C76,554 78,557 81,558
           C82,556 83,554 84,550
           C84,554 85,557 87,558
           C89,558 91,556 91,552
           C91,556 92,558 94,558
           C96,558 98,556 98,552
           C98,555 100,558 102,558
           C104,557 106,554 106,550
           C107,546 107,540 107,534
           C108,528 108,520 107,512
           C107,504 106,498 105,492
           C99,491 91,491 78,490Z"
        fill="url(#skin-highlight-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />
      {/* Finger separation lines */}
      <path d="M81,542 C80,535 79,525 79,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M87,542 C87,535 87,525 87,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M94,542 C94,535 94,525 94,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M101,542 C101,535 101,525 101,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════
          RIGHT HAND
      ═══════════════════════════════════════ */}
      <path
        d="M322,490 C324,498 325,508 325,518
           C326,524 326,530 325,534
           C324,538 322,541 320,542
           C322,544 324,547 324,550
           C324,554 322,557 319,558
           C318,556 317,554 316,550
           C316,554 315,557 313,558
           C311,558 309,556 309,552
           C309,556 308,558 306,558
           C304,558 302,556 302,552
           C302,555 300,558 298,558
           C296,557 294,554 294,550
           C293,546 293,540 293,534
           C292,528 292,520 293,512
           C293,504 294,498 295,492
           C301,491 309,491 322,490Z"
        fill="url(#skin-highlight-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />
      {/* Finger separation lines */}
      <path d="M319,542 C320,535 321,525 321,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M313,542 C313,535 313,525 313,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M306,542 C306,535 306,525 306,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M299,542 C299,535 299,525 299,516" fill="none" stroke="#C0906A" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════
          TORSO
      ═══════════════════════════════════════ */}
      <path
        d="M178,168
           C165,172 148,180 130,192 C118,202 110,214 130,222
           C132,222 134,223 137,225
           C140,232 141,248 142,268
           C141,290 140,310 140,330
           C141,344 142,352 143,360
           C144,378 145,400 146,420
           C147,438 148,452 148,462
           C196,462 204,462 252,462
           C252,452 253,438 254,420
           C255,400 256,378 257,360
           C258,352 259,344 260,330
           C260,310 259,290 258,268
           C259,248 260,232 263,225
           C266,223 268,222 270,222
           C290,214 282,202 270,192
           C252,180 235,172 222,168
           Z"
        fill="url(#skin-torso-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          CLAVICLE LINES
      ═══════════════════════════════════════ */}
      <path
        d="M178,175 C186,174 194,173 200,173 C206,173 214,174 222,175"
        fill="none"
        stroke="#C0906A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Left clavicle */}
      <path
        d="M178,175 C168,178 155,182 140,188"
        fill="none"
        stroke="#C0906A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Right clavicle */}
      <path
        d="M222,175 C232,178 245,182 260,188"
        fill="none"
        stroke="#C0906A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Sternum line */}
      <path
        d="M200,178 C200,200 200,230 200,265 C200,310 200,350 200,395"
        fill="none"
        stroke="#C0906A"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="4,3"
      />

      {/* Pectoral suggestion — left */}
      <path
        d="M178,195 C172,200 165,210 163,220 C161,230 163,240 170,245 C180,250 192,248 200,244
           C200,230 200,210 200,196
           C193,195 185,194 178,195Z"
        fill="#D8AA80"
        opacity="0.5"
      />
      {/* Pectoral suggestion — right */}
      <path
        d="M222,195 C228,200 235,210 237,220 C239,230 237,240 230,245 C220,250 208,248 200,244
           C200,230 200,210 200,196
           C207,195 215,194 222,195Z"
        fill="#D8AA80"
        opacity="0.5"
      />

      {/* Rib cage boundary (subtle arc) */}
      <path
        d="M145,290 C155,310 172,325 200,328 C228,325 245,310 255,290"
        fill="none"
        stroke="#C0906A"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Navel */}
      <ellipse cx="200" cy="395" rx="5" ry="4" fill="none" stroke="#B8845C" strokeWidth="1.2" />
      <ellipse cx="200" cy="395" rx="2.5" ry="2" fill="#B8845C" opacity="0.6" />

      {/* Abdominal linea alba suggestion */}
      <path
        d="M200,265 C200,310 200,355 200,390"
        fill="none"
        stroke="#C8A070"
        strokeWidth="0.6"
      />

      {/* ═══════════════════════════════════════
          LEFT THIGH
      ═══════════════════════════════════════ */}
      <path
        d="M148,462
           C144,478 142,500 142,525
           C141,548 141,572 143,596
           C144,618 146,636 148,652
           C155,654 162,655 165,652
           C168,636 172,616 176,596
           C180,572 184,548 188,525
           C192,500 194,478 196,462
           Z"
        fill="url(#skin-leg-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          RIGHT THIGH
      ═══════════════════════════════════════ */}
      <path
        d="M252,462
           C256,478 258,500 258,525
           C259,548 259,572 257,596
           C256,618 254,636 252,652
           C245,654 238,655 235,652
           C232,636 228,616 224,596
           C220,572 216,548 212,525
           C208,500 206,478 204,462
           Z"
        fill="url(#skin-leg-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          LEFT KNEE CAP
      ═══════════════════════════════════════ */}
      <ellipse cx="156" cy="652" rx="18" ry="14" fill="url(#skin-knee-grad)" stroke="#C4956E" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════
          RIGHT KNEE CAP
      ═══════════════════════════════════════ */}
      <ellipse cx="244" cy="652" rx="18" ry="14" fill="url(#skin-knee-grad)" stroke="#C4956E" strokeWidth="0.5" />

      {/* ═══════════════════════════════════════
          LEFT SHIN
      ═══════════════════════════════════════ */}
      <path
        d="M148,652
           C148,664 148,680 149,700
           C150,720 151,745 152,765
           C152,775 152,782 152,788
           C158,790 165,791 170,790
           C172,782 174,772 176,758
           C178,740 180,718 181,695
           C182,674 182,660 182,652
           Z"
        fill="url(#skin-leg-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          RIGHT SHIN
      ═══════════════════════════════════════ */}
      <path
        d="M252,652
           C252,664 252,680 251,700
           C250,720 249,745 248,765
           C248,775 248,782 248,788
           C242,790 235,791 230,790
           C228,782 226,772 224,758
           C222,740 220,718 219,695
           C218,674 218,660 218,652
           Z"
        fill="url(#skin-leg-grad)"
        stroke="#C4956E"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════
          LEFT FOOT
      ═══════════════════════════════════════ */}
      <ellipse cx="152" cy="798" rx="32" ry="13" fill="url(#skin-highlight-grad)" stroke="#C4956E" strokeWidth="0.5" transform="rotate(-6,152,798)" />
      {/* Toe lines */}
      <path d="M125,800 C128,807 132,810 136,808" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M128,796 C130,803 134,806 138,804" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M132,793 C133,800 137,803 141,801" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M137,791 C138,798 141,800 145,799" fill="none" stroke="#C0906A" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════
          RIGHT FOOT
      ═══════════════════════════════════════ */}
      <ellipse cx="248" cy="798" rx="32" ry="13" fill="url(#skin-highlight-grad)" stroke="#C4956E" strokeWidth="0.5" transform="rotate(6,248,798)" />
      {/* Toe lines */}
      <path d="M275,800 C272,807 268,810 264,808" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M272,796 C270,803 266,806 262,804" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M268,793 C267,800 263,803 259,801" fill="none" stroke="#C0906A" strokeWidth="0.6" />
      <path d="M263,791 C262,798 259,800 255,799" fill="none" stroke="#C0906A" strokeWidth="0.6" />

      {/* ═══════════════════════════════════════
          SHOULDER ROUNDNESS — caps over arm/torso join
      ═══════════════════════════════════════ */}
      {/* Left shoulder cap */}
      <ellipse cx="108" cy="196" rx="24" ry="20" fill="#D4A57E" stroke="#C4956E" strokeWidth="0.4" />
      {/* Right shoulder cap */}
      <ellipse cx="292" cy="196" rx="24" ry="20" fill="#D4A57E" stroke="#C4956E" strokeWidth="0.4" />
    </svg>
  );
}
