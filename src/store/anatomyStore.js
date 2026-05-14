// anatomyStore.js
// Zustand v4 store for the Human Anatomy Layer Explorer.
// Manages all global UI state: active systems, selected/hovered parts,
// view mode, search, story mode progression, layer opacities, and camera.

import { create } from 'zustand';
import anatomySystems, { ANATOMY_PARTS } from '../data/anatomySystems';

// ─── Helper: build the default activeSystems map (all true) ─────────────────
const buildDefaultActiveSystems = () =>
  anatomySystems.reduce((acc, system) => {
    acc[system.id] = true;
    return acc;
  }, {});

// ─── Helper: build the default layerOpacities map (all 1.0) ─────────────────
const buildDefaultLayerOpacities = () =>
  anatomySystems.reduce((acc, system) => {
    acc[system.id] = 1.0;
    return acc;
  }, {});

// ─── Helper: search ANATOMY_PARTS by query string ───────────────────────────
// Matches against part name, systemId, description, function, and facts.
const computeSearchResults = (query) => {
  if (!query || query.trim() === '') return [];

  const normalized = query.trim().toLowerCase();

  return ANATOMY_PARTS.filter((part) => {
    const inName = part.name.toLowerCase().includes(normalized);
    const inSystem = part.systemId.toLowerCase().includes(normalized);
    const inDescription = part.description.toLowerCase().includes(normalized);
    const inFunction = part.function.toLowerCase().includes(normalized);
    const inFacts = part.facts.some((fact) =>
      fact.toLowerCase().includes(normalized)
    );
    const inRelated = part.relatedSystems.some((s) =>
      s.toLowerCase().includes(normalized)
    );

    return inName || inSystem || inDescription || inFunction || inFacts || inRelated;
  });
};

// ─── Camera target presets for named view modes ──────────────────────────────
const VIEW_MODE_CAMERA_TARGETS = {
  front: { x: 0, y: 0, z: 0 },
  side:  { x: 0, y: 0, z: 0 },
  rear:  { x: 0, y: 0, z: 0 },
  free:  { x: 0, y: 0, z: 0 },
};

// ─── Zustand store definition ────────────────────────────────────────────────
const useAnatomyStore = create((set, get) => ({
  // ── State ──────────────────────────────────────────────────────────────────

  /** Maps each system id to a boolean indicating visibility. */
  activeSystems: buildDefaultActiveSystems(),

  /** The currently selected anatomy part object, or null. */
  selectedPart: null,

  /** The currently hovered anatomy part object, or null. */
  hoveredPart: null,

  /**
   * Current camera view mode.
   * One of: 'front' | 'side' | 'rear' | 'free'
   */
  viewMode: 'front',

  /** Current search query string. */
  searchQuery: '',

  /**
   * Array of ANATOMY_PARTS objects matching the current searchQuery.
   * Empty array when searchQuery is blank.
   */
  searchResults: [],

  /** Whether story mode is currently active. */
  isStoryMode: false,

  /** The active story object (from storyModes.js), or null. */
  activeStory: null,

  /** Zero-based index of the current story step. */
  activeStoryStep: 0,

  /** Whether the 3D scene is still loading assets. */
  isLoading: true,

  /**
   * Maps each system id to an opacity value between 0.0 and 1.0.
   * Starts at 1.0 (fully opaque) for all systems.
   */
  layerOpacities: buildDefaultLayerOpacities(),

  /**
   * When non-null, only this system is rendered at full opacity;
   * all others are dimmed or hidden. Set to null to clear isolation.
   */
  isolatedSystem: null,

  /**
   * The 3D point the camera looks at / orbits around.
   * Resets when view mode changes.
   */
  cameraTarget: { x: 0, y: 0, z: 0 },

  /** Whether the overlay UI (panels, controls) is visible. */
  showUI: true,

  // ── Actions ────────────────────────────────────────────────────────────────

  /**
   * Toggle the visibility of a single anatomy system.
   * @param {string} systemId - ID of the system to toggle.
   */
  toggleSystem: (systemId) =>
    set((state) => ({
      activeSystems: {
        ...state.activeSystems,
        [systemId]: !state.activeSystems[systemId],
      },
    })),

  /**
   * Set the selected anatomy part (or clear it by passing null).
   * @param {object|null} part - An ANATOMY_PARTS entry or null.
   */
  setSelectedPart: (part) => set({ selectedPart: part }),

  /**
   * Set the hovered anatomy part (or clear it by passing null).
   * @param {object|null} part - An ANATOMY_PARTS entry or null.
   */
  setHoveredPart: (part) => set({ hoveredPart: part }),

  /**
   * Set the active view mode and reset the camera target to the
   * appropriate default for that mode.
   * @param {'front'|'side'|'rear'|'free'} mode
   */
  setViewMode: (mode) =>
    set({
      viewMode: mode,
      cameraTarget: VIEW_MODE_CAMERA_TARGETS[mode] ?? { x: 0, y: 0, z: 0 },
    }),

  /**
   * Update the search query string and recompute matching results
   * from ANATOMY_PARTS synchronously.
   * @param {string} query
   */
  setSearchQuery: (query) =>
    set({
      searchQuery: query,
      searchResults: computeSearchResults(query),
    }),

  /**
   * Begin a guided story mode session.
   * Resets step to 0 and marks story mode as active.
   * @param {object} story - A story object from storyModes.js.
   */
  startStory: (story) =>
    set({
      isStoryMode: true,
      activeStory: story,
      activeStoryStep: 0,
    }),

  /**
   * Advance to the next story step.
   * If already at the last step, ends the story automatically.
   */
  nextStoryStep: () => {
    const { activeStory, activeStoryStep } = get();

    if (!activeStory) return;

    const lastIndex = activeStory.steps.length - 1;

    if (activeStoryStep >= lastIndex) {
      // End of story — clean up
      set({
        isStoryMode: false,
        activeStory: null,
        activeStoryStep: 0,
      });
    } else {
      set({ activeStoryStep: activeStoryStep + 1 });
    }
  },

  /**
   * Go back to the previous story step.
   * Does nothing if already at step 0.
   */
  prevStoryStep: () => {
    const { activeStoryStep } = get();
    if (activeStoryStep > 0) {
      set({ activeStoryStep: activeStoryStep - 1 });
    }
  },

  /**
   * Immediately exit story mode and reset all story-related state.
   */
  endStory: () =>
    set({
      isStoryMode: false,
      activeStory: null,
      activeStoryStep: 0,
    }),

  /**
   * Set the render opacity for a specific anatomy system layer.
   * @param {string} systemId
   * @param {number} opacity - Value between 0.0 and 1.0.
   */
  setLayerOpacity: (systemId, opacity) =>
    set((state) => ({
      layerOpacities: {
        ...state.layerOpacities,
        [systemId]: Math.max(0, Math.min(1, opacity)),
      },
    })),

  /**
   * Isolate a single system for focused inspection, or pass null to
   * clear isolation and show all systems normally.
   * @param {string|null} systemId
   */
  isolateSystem: (systemId) => set({ isolatedSystem: systemId }),

  /**
   * Set whether 3D assets are still loading.
   * @param {boolean} bool
   */
  setLoading: (bool) => set({ isLoading: bool }),

  /**
   * Show or hide the overlay UI panels and controls.
   * @param {boolean} bool
   */
  setShowUI: (bool) => set({ showUI: bool }),

  // ── Derived / composite helpers ────────────────────────────────────────────
  // These are functions stored in the Zustand state object so consumers can
  // call them via get() without needing extra selectors packages.

  /**
   * Returns the current step object from the active story, or null.
   * Usage: useAnatomyStore.getState().getCurrentStoryStep()
   */
  getCurrentStoryStep: () => {
    const { activeStory, activeStoryStep } = get();
    if (!activeStory) return null;
    return activeStory.steps[activeStoryStep] ?? null;
  },

  /**
   * Returns whether a given system should be visible, taking into
   * account both activeSystems toggles and the isolatedSystem setting.
   * @param {string} systemId
   * @returns {boolean}
   */
  isSystemVisible: (systemId) => {
    const { activeSystems, isolatedSystem } = get();
    if (isolatedSystem !== null) {
      return systemId === isolatedSystem;
    }
    return activeSystems[systemId] ?? false;
  },

  /**
   * Returns the effective opacity for a given system, factoring in
   * isolation state (non-isolated systems are dimmed to 0.1 when
   * another system is isolated).
   * @param {string} systemId
   * @returns {number}
   */
  getEffectiveOpacity: (systemId) => {
    const { layerOpacities, isolatedSystem } = get();
    const base = layerOpacities[systemId] ?? 1.0;
    if (isolatedSystem !== null && systemId !== isolatedSystem) {
      return Math.min(base, 0.1);
    }
    return base;
  },
}));

export { useAnatomyStore };
export default useAnatomyStore;
