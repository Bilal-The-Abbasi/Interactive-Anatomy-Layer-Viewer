# Human Anatomy Layer Explorer

> An immersive, interactive 3D human anatomy exploration platform built for the next generation of medical education.

---

## Vision

The Human Anatomy Layer Explorer reimagines how people learn about the human body. Rather than static diagrams or dense textbooks, this platform delivers a cinematic, hands-on experience that progressively reveals the layers of human anatomy — from skin to skeleton, organ to nerve.

Designed to feel like a premium science museum installation, a medical-grade visualization system, and an Apple-level educational product — all at once.

---

## Key Features

### 3D Interactive Anatomy Viewer
- Procedurally generated human figure with 8 anatomical system layers
- Smooth, cinematic layer transitions powered by Framer Motion
- Bloom post-processing for authentic bioluminescent depth
- Ambient floating particles create an immersive science-lab atmosphere

### Layer System
- **Skin** · **Muscular** · **Skeletal** · **Nervous** · **Circulatory** · **Respiratory** · **Digestive** · **Lymphatic**
- Toggle each system on/off independently
- Per-layer opacity sliders for progressive reveal
- Isolate any single system for focused study

### Interactive Learning
- Click any anatomical structure for an instant educational panel
- Curated descriptions, primary functions, and fascinating facts
- Related systems cross-linking for holistic understanding
- Hover tooltips identify structures before clicking

### Guided Story Mode
- **Journey Through the Circulatory System** — trace blood from heart to capillary and back
- **Layers of the Human Body** — reveal anatomy layer-by-layer from skin to skeleton
- **The Nervous System** — explore the body's electrochemical communication network
- **The Respiratory Journey** — follow air from atmosphere to alveoli

### Intelligent Search
- Instant anatomy search across all 26+ named structures
- Results filter by name, system, description, and function
- Click a result to select the structure and open its detail panel

---

## Architecture

```
src/
├── components/          # UI components (React + Framer Motion)
│   ├── TopBar.jsx       # Navigation bar with view mode switcher
│   ├── LeftSidebar.jsx  # Layer toggles, search, guided lessons
│   ├── RightSidebar.jsx # Anatomy detail panel
│   ├── LoadingScreen.jsx
│   ├── StoryModePanel.jsx
│   ├── HoverTooltip.jsx
│   └── GlassPanel.jsx
│
├── scenes/              # React Three Fiber scene components
│   ├── AnatomyViewer.jsx # R3F Canvas wrapper with post-processing
│   ├── HumanFigure.jsx  # Procedural 3D figure (8 anatomical layers)
│   ├── CameraRig.jsx    # Camera animation + OrbitControls
│   ├── SceneLighting.jsx
│   └── AnatomyLayer.jsx
│
├── data/                # Static anatomy content
│   ├── anatomySystems.js # 8 systems + 26 anatomy parts with metadata
│   └── storyModes.js    # 4 guided learning experiences
│
├── store/               # Zustand global state
│   └── anatomyStore.js  # Single store, 14 state fields, 12 actions
│
├── hooks/
│   └── useAnatomySearch.js
│
└── utils/
    └── colorUtils.js
```

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 + Vite 5 |
| 3D Rendering | React Three Fiber + Three.js |
| Post-processing | @react-three/postprocessing (Bloom) |
| Helpers | @react-three/drei (OrbitControls, etc.) |
| Animation | Framer Motion 11 |
| State | Zustand 4 |
| Styling | Tailwind CSS 3 |
| Typography | Inter + JetBrains Mono |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/bilal-the-abbasi/interactive-anatomy-layer-viewer.git
cd interactive-anatomy-layer-viewer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` in your browser.

---

## Usage Guide

1. **Explore layers** — Use the left sidebar to toggle anatomy systems on/off. Adjust opacity sliders for progressive reveal.
2. **Isolate a system** — Hover a layer in the sidebar and click "Isolate" to focus on a single system.
3. **Click to learn** — Click any structure in the 3D viewer. The right panel populates with educational content.
4. **Search** — Type in the search box to find specific anatomy. Press Enter or click a result to focus it.
5. **Guided stories** — Navigate to the "Stories" tab in the left sidebar. Select a guided experience and follow the narrated steps.
6. **Change views** — Use the view mode switcher in the top bar. Switch between Front, Side, Rear, and Free rotate.

---

## Design System

**Color Palette (Anatomy Systems)**

| System | Color |
|--------|-------|
| Skin | `#d4a899` warm peach |
| Muscular | `#c0392b` deep crimson |
| Skeletal | `#e8e4d0` ivory bone |
| Nervous | `#4fc3f7` electric blue |
| Circulatory | `#e53935` blood red |
| Respiratory | `#81d4fa` sky blue |
| Digestive | `#ff8f00` amber |
| Lymphatic | `#66bb6a` mint green |

**Interface**
- Background: `#020c1b` deep navy
- Panels: `rgba(5, 15, 30, 0.82)` glassmorphism
- Text: `#e2e8f0` / `#94a3b8` hierarchy
- Accent: `#3b82f6` blue

---

## Future Roadmap

### Near-term
- [ ] GLTF anatomical model integration (replace procedural geometry)
- [ ] Quiz mode with anatomy identification challenges
- [ ] Voice narration for story mode using Web Speech API
- [ ] Keyboard navigation and full accessibility (WCAG AA)
- [ ] Mobile-optimized touch controls

### Medium-term
- [ ] AI anatomy tutor with natural language Q&A
- [ ] Educator dashboard with class management
- [ ] Progress tracking and completion certificates
- [ ] Multiplayer classroom mode (shared annotation)
- [ ] Exportable study summaries (PDF)

### Long-term
- [ ] WebXR / AR support for spatial anatomy overlay
- [ ] VR mode compatible with Meta Quest
- [ ] Medical school curriculum integration
- [ ] SaaS licensing for institutions
- [ ] Custom anatomy deck builder for educators
- [ ] Patient education module for clinical settings

---

## Performance Notes

- The 3D figure uses procedural Three.js geometry — no external asset loading required
- Bloom post-processing is tuned conservatively to maintain 60fps on integrated graphics
- Particle count is limited to 20 to prevent GPU pressure
- All Framer Motion animations use hardware-accelerated CSS transforms

---

*Built with care for the next generation of anatomy education.*
