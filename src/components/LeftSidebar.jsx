import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnatomyStore } from '../store/anatomyStore'
import anatomySystems from '../data/anatomySystems'
import storyModes from '../data/storyModes'

function SystemToggle({ system }) {
  const { activeSystems, toggleSystem, layerOpacities, setLayerOpacity, isolatedSystem, isolateSystem } =
    useAnatomyStore()

  const isActive = activeSystems[system.id]
  const opacity = layerOpacities[system.id] ?? 1
  const isIsolated = isolatedSystem === system.id

  return (
    <motion.div
      className="group rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: isActive
          ? `linear-gradient(135deg, rgba(${hexToRgb(system.color)}, 0.06) 0%, rgba(9,24,40,0.5) 100%)`
          : 'rgba(9,24,40,0.4)',
        border: isActive
          ? `1px solid rgba(${hexToRgb(system.color)}, 0.2)`
          : '1px solid rgba(255,255,255,0.04)',
      }}
      layout
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        {/* Color dot + toggle */}
        <button
          onClick={() => toggleSystem(system.id)}
          className="relative flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            background: isActive
              ? `rgba(${hexToRgb(system.color)}, 0.15)`
              : 'rgba(255,255,255,0.04)',
            border: isActive
              ? `1px solid rgba(${hexToRgb(system.color)}, 0.35)`
              : '1px solid rgba(255,255,255,0.08)',
          }}
          title={isActive ? `Hide ${system.name}` : `Show ${system.name}`}
        >
          <span className="text-base leading-none">{system.icon}</span>
          {!isActive && (
            <motion.div
              className="absolute inset-0 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ background: 'rgba(2,12,27,0.6)' }}
            >
              <div className="w-4 h-px" style={{ background: 'rgba(148,163,184,0.4)', transform: 'rotate(-45deg)' }} />
            </motion.div>
          )}
        </button>

        {/* Name and description */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span
              className="text-sm font-medium truncate"
              style={{ color: isActive ? '#e2e8f0' : 'rgba(148,163,184,0.4)' }}
            >
              {system.name}
            </span>
            {/* Isolate button */}
            <button
              onClick={() => isolateSystem(isIsolated ? null : system.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs px-1.5 py-0.5 rounded"
              style={{
                background: isIsolated ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)',
                color: isIsolated ? '#93c5fd' : 'rgba(148,163,184,0.6)',
                border: isIsolated ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(255,255,255,0.08)',
              }}
              title="Isolate this system"
            >
              {isIsolated ? 'Isolated' : 'Isolate'}
            </button>
          </div>

          {/* Opacity slider */}
          {isActive && (
            <motion.div
              className="mt-1.5 flex items-center gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.05"
                value={opacity}
                onChange={(e) => setLayerOpacity(system.id, parseFloat(e.target.value))}
                className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, rgba(${hexToRgb(system.color)},0.7) 0%, rgba(${hexToRgb(system.color)},0.7) ${opacity * 100}%, rgba(255,255,255,0.08) ${opacity * 100}%, rgba(255,255,255,0.08) 100%)`,
                  WebkitAppearance: 'none',
                }}
              />
              <span className="text-xs font-mono w-8 text-right" style={{ color: 'rgba(148,163,184,0.4)' }}>
                {Math.round(opacity * 100)}%
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function SearchBar() {
  const { searchQuery, setSearchQuery, searchResults, setSelectedPart } = useAnatomyStore()
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef()

  return (
    <div className="relative">
      <motion.div
        className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-200"
        style={{
          background: 'rgba(9,24,40,0.8)',
          border: isFocused ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: isFocused ? '0 0 20px rgba(59,130,246,0.1)' : 'none',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          style={{ color: isFocused ? '#60a5fa' : 'rgba(148,163,184,0.4)', flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search anatomy..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-600"
          style={{ color: '#e2e8f0' }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-slate-600 hover:text-slate-400 transition-colors"
          >
            ×
          </button>
        )}
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isFocused && searchQuery && searchResults.length > 0 && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden z-50"
            style={{
              background: 'rgba(5,15,30,0.97)',
              border: '1px solid rgba(59,130,246,0.2)',
              backdropFilter: 'blur(16px)',
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {searchResults.slice(0, 6).map((part, i) => (
              <motion.button
                key={part.id}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-150 hover:bg-white/5"
                onClick={() => {
                  setSelectedPart(part)
                  setSearchQuery('')
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs flex-shrink-0"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  {anatomySystems.find((s) => s.id === part.systemId)?.icon || '●'}
                </div>
                <div>
                  <p className="text-sm text-slate-200 font-medium">{part.name}</p>
                  <p className="text-xs text-slate-500 capitalize">{part.systemId} system</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
        {isFocused && searchQuery && searchResults.length === 0 && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-1 rounded-xl px-4 py-3 text-sm"
            style={{
              background: 'rgba(5,15,30,0.97)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: 'rgba(148,163,184,0.5)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No results for "{searchQuery}"
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StoryCard({ story, index }) {
  const { startStory, isStoryMode, activeStory } = useAnatomyStore()
  const isActive = isStoryMode && activeStory?.id === story.id

  return (
    <motion.button
      className="w-full text-left rounded-xl p-3 transition-all duration-200 group"
      style={{
        background: isActive
          ? `rgba(${hexToRgb(story.color || '#3b82f6')}, 0.12)`
          : 'rgba(9,24,40,0.5)',
        border: isActive
          ? `1px solid rgba(${hexToRgb(story.color || '#3b82f6')}, 0.3)`
          : '1px solid rgba(255,255,255,0.05)',
      }}
      onClick={() => startStory(story)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="flex items-start gap-2.5">
        <span className="text-xl leading-none mt-0.5">{story.icon}</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-200 leading-snug">{story.title}</p>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{story.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: `rgba(${hexToRgb(story.color || '#3b82f6')}, 0.1)`,
                color: story.color || '#60a5fa',
                border: `1px solid rgba(${hexToRgb(story.color || '#3b82f6')}, 0.2)`,
              }}
            >
              {story.steps?.length || 0} steps
            </span>
            <span className="text-xs text-slate-600">~{story.duration}s</span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '59, 130, 246'
}

export default function LeftSidebar() {
  const [activeTab, setActiveTab] = useState('layers')
  const { activeSystems, isStoryMode } = useAnatomyStore()

  const activeCount = Object.values(activeSystems).filter(Boolean).length
  const tabs = [
    { id: 'layers', label: 'Layers' },
    { id: 'stories', label: 'Stories' },
  ]

  return (
    <motion.aside
      className="relative z-20 flex flex-col w-72 border-r border-white/5 overflow-hidden"
      style={{ background: 'rgba(2,12,27,0.85)', backdropFilter: 'blur(16px)' }}
      initial={{ x: -288, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
    >
      {/* Sidebar header + tabs */}
      <div className="flex-shrink-0 px-4 pt-4 pb-0">
        <SearchBar />

        <div className="flex mt-4 rounded-lg overflow-hidden" style={{ background: 'rgba(9,24,40,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex-1 py-2 text-xs font-medium transition-all duration-200"
              style={{ color: activeTab === tab.id ? '#93c5fd' : 'rgba(148,163,184,0.5)' }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="sidebarTab"
                  className="absolute inset-0"
                  style={{ background: 'rgba(59,130,246,0.12)', borderBottom: '1px solid rgba(59,130,246,0.3)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <AnimatePresence mode="wait">
          {activeTab === 'layers' && (
            <motion.div
              key="layers"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-mono uppercase tracking-widest" style={{ color: 'rgba(148,163,184,0.35)' }}>
                  Anatomical Systems
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  {activeCount}/{anatomySystems.length}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {anatomySystems.map((system) => (
                  <SystemToggle key={system.id} system={system} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'stories' && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'rgba(148,163,184,0.35)' }}>
                Guided Experiences
              </p>
              <div className="flex flex-col gap-2">
                {storyModes.map((story, i) => (
                  <StoryCard key={story.id} story={story} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer hint */}
      <div
        className="flex-shrink-0 px-4 py-3 border-t border-white/5"
        style={{ background: 'rgba(2,12,27,0.5)' }}
      >
        <p className="text-xs text-center" style={{ color: 'rgba(148,163,184,0.3)' }}>
          Click any structure to explore
        </p>
      </div>
    </motion.aside>
  )
}
