import { motion, AnimatePresence } from 'framer-motion'
import { useAnatomyStore } from '../store/anatomyStore'
import anatomySystems from '../data/anatomySystems'

function RelatedSystem({ systemId }) {
  const system = anatomySystems.find((s) => s.id === systemId)
  if (!system) return null

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
      style={{
        background: `rgba(${hexToRgb(system.color)}, 0.1)`,
        border: `1px solid rgba(${hexToRgb(system.color)}, 0.2)`,
        color: system.color,
      }}
    >
      <span className="text-xs">{system.icon}</span>
      {system.name}
    </span>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '59, 130, 246'
}

function EmptyState() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {/* Animated body outline */}
      <motion.div
        className="mb-8"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
          <circle cx="30" cy="12" r="10" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
          <rect x="16" y="26" width="28" height="40" rx="8" stroke="rgba(59,130,246,0.25)" strokeWidth="1" fill="none" />
          <rect x="4" y="30" width="10" height="30" rx="5" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none" />
          <rect x="46" y="30" width="10" height="30" rx="5" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none" />
          <rect x="18" y="68" width="10" height="30" rx="5" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none" />
          <rect x="32" y="68" width="10" height="30" rx="5" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <p className="text-sm font-medium mb-2" style={{ color: 'rgba(226,232,240,0.5)' }}>
        Select a Structure
      </p>
      <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.35)' }}>
        Click on any anatomical structure in the 3D viewer to explore its details, function, and educational information.
      </p>

      <div className="mt-8 space-y-2 w-full">
        {['heart', 'brain', 'femur'].map((hint, i) => (
          <motion.div
            key={hint}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
            style={{
              background: 'rgba(9,24,40,0.5)',
              border: '1px solid rgba(255,255,255,0.04)',
              color: 'rgba(148,163,184,0.4)',
            }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(59,130,246,0.4)' }} />
            Try clicking the {hint}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function AnatomyDetail({ part }) {
  const system = anatomySystems.find((s) => s.id === part.systemId)
  const { setSelectedPart } = useAnatomyStore()

  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      key={part.id}
    >
      {/* Header */}
      <div
        className="sticky top-0 px-4 pt-4 pb-3 z-10"
        style={{
          background: 'rgba(2,12,27,0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {system && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: `rgba(${hexToRgb(system.color)}, 0.12)`,
                    color: system.color,
                    border: `1px solid rgba(${hexToRgb(system.color)}, 0.25)`,
                  }}
                >
                  {system.icon} {system.name}
                </span>
              )}
            </div>
            <h2
              className="text-xl font-bold leading-tight"
              style={{ color: '#f1f5f9', letterSpacing: '-0.02em' }}
            >
              {part.name}
            </h2>
          </div>
          <button
            onClick={() => setSelectedPart(null)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            ×
          </button>
        </div>

        {/* Glowing accent line */}
        {system && (
          <motion.div
            className="h-0.5 rounded-full"
            style={{
              background: `linear-gradient(to right, ${system.color}, transparent)`,
              boxShadow: `0 0 8px ${system.color}60`,
            }}
            layoutId="accent-line"
          />
        )}
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-5">
        {/* Description */}
        <div>
          <p
            className="text-xs font-mono uppercase tracking-widest mb-2"
            style={{ color: 'rgba(148,163,184,0.4)' }}
          >
            Overview
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,232,240,0.75)' }}>
            {part.description}
          </p>
        </div>

        {/* Function */}
        {part.function && (
          <motion.div
            className="rounded-xl p-3"
            style={{
              background: system ? `rgba(${hexToRgb(system.color)}, 0.05)` : 'rgba(9,24,40,0.5)',
              border: system ? `1px solid rgba(${hexToRgb(system.color)}, 0.15)` : '1px solid rgba(255,255,255,0.05)',
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'rgba(148,163,184,0.4)' }}>
              Primary Function
            </p>
            <p className="text-sm font-medium" style={{ color: system?.color || '#60a5fa' }}>
              {part.function}
            </p>
          </motion.div>
        )}

        {/* Facts */}
        {part.facts && part.facts.length > 0 && (
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'rgba(148,163,184,0.4)' }}>
              Key Facts
            </p>
            <div className="space-y-2">
              {part.facts.map((fact, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg p-2.5"
                  style={{ background: 'rgba(9,24,40,0.6)', border: '1px solid rgba(255,255,255,0.04)' }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{
                      background: system ? `rgba(${hexToRgb(system.color)}, 0.15)` : 'rgba(59,130,246,0.15)',
                      color: system?.color || '#60a5fa',
                    }}
                  >
                    {i + 1}
                  </motion.div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(203,213,225,0.7)' }}>
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Related Systems */}
        {part.relatedSystems && part.relatedSystems.length > 0 && (
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'rgba(148,163,184,0.4)' }}>
              Related Systems
            </p>
            <div className="flex flex-wrap gap-2">
              {part.relatedSystems.map((sysId) => (
                <RelatedSystem key={sysId} systemId={sysId} />
              ))}
            </div>
          </div>
        )}

        {/* Structural metrics */}
        <motion.div
          className="grid grid-cols-2 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'System', value: system?.name || 'Unknown' },
            { label: 'Layer', value: part.systemId?.charAt(0).toUpperCase() + part.systemId?.slice(1) || '—' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg p-2.5"
              style={{ background: 'rgba(9,24,40,0.7)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>{item.label}</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: '#cbd5e1' }}>{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function RightSidebar() {
  const { selectedPart } = useAnatomyStore()

  return (
    <motion.aside
      className="relative z-20 flex flex-col w-72 border-l border-white/5 overflow-hidden"
      style={{ background: 'rgba(2,12,27,0.85)', backdropFilter: 'blur(16px)' }}
      initial={{ x: 288, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
    >
      <AnimatePresence mode="wait">
        {selectedPart ? (
          <AnatomyDetail key={selectedPart.id} part={selectedPart} />
        ) : (
          <EmptyState key="empty" />
        )}
      </AnimatePresence>
    </motion.aside>
  )
}
