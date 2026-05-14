import { motion } from 'framer-motion'
import { useAnatomyStore } from '../store/anatomyStore'

const VIEW_MODES = [
  { id: 'front',    label: 'Anterior' },
  { id: 'rear',     label: 'Posterior' },
  { id: 'side',     label: 'Lateral' },
]

export default function TopBar() {
  const { viewMode, setViewMode, isStoryMode, endStory, activeStory, showUI } = useAnatomyStore()

  return (
    <motion.header
      className="relative z-30 flex items-center justify-between px-5 h-14 border-b border-white/5"
      style={{ background: 'rgba(2, 12, 27, 0.9)', backdropFilter: 'blur(16px)' }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <motion.div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.25)',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-base leading-none">⚕</span>
        </motion.div>
        <div>
          <h1
            className="text-sm font-bold leading-none tracking-tight"
            style={{ color: '#e2e8f0', letterSpacing: '-0.02em' }}
          >
            Anatomy Explorer
          </h1>
          <p
            className="text-xs leading-none mt-0.5"
            style={{ color: 'rgba(148,163,184,0.45)', fontSize: '9px', letterSpacing: '0.1em' }}
          >
            INTERACTIVE LAYER VIEWER
          </p>
        </div>
      </div>

      {/* Center: View Mode or Story mode label */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
        {isStoryMode ? (
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.25)',
              color: '#93c5fd',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span>{activeStory?.title || 'Story Mode'}</span>
          </motion.div>
        ) : (
          <div
            className="flex rounded-lg overflow-hidden"
            style={{ background: 'rgba(9,24,40,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {VIEW_MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className="relative px-3 py-1.5 text-xs font-medium transition-all duration-200"
                style={{
                  color: viewMode === mode.id ? '#93c5fd' : 'rgba(148,163,184,0.6)',
                  background: 'transparent',
                }}
              >
                {viewMode === mode.id && (
                  <motion.div
                    layoutId="activeView"
                    className="absolute inset-0 rounded"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{mode.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {isStoryMode && (
          <motion.button
            onClick={endStory}
            className="btn-ghost text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Exit Story
          </motion.button>
        )}

        <a
          href="https://github.com/bilal-the-abbasi/interactive-anatomy-layer-viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-xs flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.7">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs"
          style={{
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.2)',
            color: '#86efac',
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Live
        </div>
      </div>
    </motion.header>
  )
}
