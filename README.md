# Interactive Anatomy Layer Viewer

> A professional, interactive 3D human anatomy education platform built with React Three Fiber.

**Live Demo:** [https://anatomy-viewer-olive.vercel.app](https://anatomy-viewer-olive.vercel.app)

---

## Overview

The Interactive Anatomy Layer Viewer is a web-based anatomy education tool that renders the complete human body as a set of independently controllable 3D layers. Each body system — skin, skeleton, muscles, circulatory, nervous, respiratory, digestive, and lymphatic — is loaded as a separate GLB model and can be toggled, isolated, and adjusted in real time.

This project is designed for healthcare education, nursing students, anatomy learners, and AI-powered education portfolios.

---

## Features

| Feature | Description |
|---|---|
| **8 Anatomy System Layers** | Skin, Skeleton, Muscles, Circulatory, Nervous, Respiratory, Digestive, Lymphatic |
| **GLB Model Loading** | All systems loaded via `useGLTF` with `@react-three/drei` |
| **Opacity Sliders** | Per-layer opacity control (0–100%) with smooth transitions |
| **Isolate Mode** | Focus on a single system; others fade to near-transparent |
| **Smooth Fade Transitions** | Frame-accurate lerp-based opacity animation |
| **Camera Presets** | Front / Side / Rear / Free orbit controls |
| **Hover & Click Info** | Click any structure to view name, function, and anatomical facts |
| **Loading Progress Bar** | Animated GLB loading indicator with percentage |
| **Missing Model Fallback** | Graceful error boundary if a model file is unavailable |
| **Story Mode** | Guided educational narratives through body systems |
| **Search** | Full-text search across all anatomical structures |
| **Bloom Post-Processing** | Medical visualization glow effect |
| **Ambient Particles** | Subtle floating particle atmosphere |
| **Responsive Layout** | Works on desktop and tablet viewports |

---

## GLB Model Files

All models are located in `public/models/anatomy/` and were procedurally generated using Python + trimesh in anatomical position (Y-up, front-facing, arms slightly abducted, palms forward). All models share the same coordinate space, scale, and origin point.

| File | System | Description |
|---|---|---|
| `skin.glb` | Integumentary | Full-body skin envelope |
| `skeleton.glb` | Skeletal | Complete bony skeleton with 206 bones approximated |
| `muscles.glb` | Muscular | Major muscle groups (deltoid, pectorals, quads, etc.) |
| `circulatory.glb` | Cardiovascular | Heart, aorta, major arteries and veins |
| `nervous.glb` | Nervous | Brain, spinal cord, major nerve plexuses |
| `respiratory.glb` | Respiratory | Lungs, trachea, bronchi, diaphragm |
| `digestive.glb` | Digestive | Stomach, liver, intestines, pancreas |
| `lymphatic.glb` | Lymphatic | Lymph nodes, thoracic duct, spleen, thymus |
| `organs.glb` | Composite | Key organs combined (brain, heart, lungs, liver, kidneys) |
| `full-body-reference.glb` | Reference | Semi-transparent skin + skeleton + heart overlay |

**Model style:** Polished abstract medical visualization. Not intended as a clinical reference.  
**License:** Procedurally generated — original work, free for educational and portfolio use.

---

## Tech Stack

- **React 18** + **Vite 5**
- **React Three Fiber** (`@react-three/fiber`) — WebGL renderer
- **@react-three/drei** — `useGLTF`, `Html`, `OrbitControls`, `useProgress`
- **@react-three/postprocessing** — Bloom effect
- **Three.js** — 3D engine
- **Zustand** — Global state management
- **Framer Motion** — UI animations
- **Tailwind CSS** — Utility-first styling
- **Python + trimesh** — GLB model generation pipeline

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Bilal-The-Abbasi/Interactive-Anatomy-Layer-Viewer.git
cd Interactive-Anatomy-Layer-Viewer

# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

---

## Project Structure

```
├── public/
│   └── models/
│       └── anatomy/          # GLB model files (10 files, ~1.7 MB total)
├── src/
│   ├── components/           # UI panels (TopBar, LeftSidebar, RightSidebar, etc.)
│   ├── data/                 # Anatomy system definitions and story modes
│   ├── hooks/                # Custom React hooks
│   ├── scenes/               # Three.js scene components
│   │   ├── HumanFigure.jsx   # GLB model loader and layer manager
│   │   ├── AnatomyViewer.jsx # Canvas + post-processing setup
│   │   ├── CameraRig.jsx     # Camera presets and orbit controls
│   │   └── SceneLighting.jsx # Lighting rig
│   ├── store/                # Zustand anatomy store
│   └── utils/                # Colour utilities
└── vercel.json               # Vercel deployment config
```

---

## Educational Use Notice

This application is designed for **educational and portfolio purposes only**. The 3D anatomy models are procedurally generated abstract visualizations intended to illustrate body system concepts. They are **not medically accurate** and should not be used for clinical decision-making, diagnosis, or medical training requiring anatomical precision.

---

## Attribution & License

- **GLB Models:** Procedurally generated using Python + [trimesh](https://trimesh.org/) — original work by the project author. Free to use for educational and non-commercial purposes.
- **UI Framework:** React Three Fiber (MIT), Three.js (MIT), Framer Motion (MIT), Zustand (MIT), Tailwind CSS (MIT)
- **Anatomy Data:** Educational descriptions written for this project

---

## Deployment

Deployed on [Vercel](https://vercel.com). To deploy your own instance:

```bash
npm install -g vercel
vercel deploy --prod
```
