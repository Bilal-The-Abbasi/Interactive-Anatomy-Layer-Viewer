import { motion, AnimatePresence } from 'framer-motion'
import { useAnatomyStore } from '../store/anatomyStore'
import anatomySystems from '../data/anatomySystems'

export default function HoverTooltip() {
  const { hoveredPart } = useAnatomyStore()
  const system = hoveredPart ? anatomySystems.find((s) => s.id === hoveredPart.systemId) : null

  return (
    <AnimatePresence>
      {hoveredPart && (
        <motion.div
          className="absolute bottom-24 left-1/2 pointer-events-none z-20"
          style={{ transform: 'translateX(-50%)' }}
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
            style={{
              background: 'rgba(2,10,22,0.92)',
              backdropFilter: 'blur(12px)',
              border: system ? `1px solid rgba(${hexToRgb(system.color)}, 0.3)` : '1px solid rgba(255,255,255,0.1)',
              boxShadow: system ? `0 0 20px rgba(${hexToRgb(system.color)}, 0.15)` : 'none',
            }}
          >
            {system && (
              <span className="text-base">{system.icon}</span>
            )}
            <span style={{ color: '#f1f5f9' }}>{hoveredPart.name}</span>
            {system && (
              <span className="text-xs" style={{ color: system.color }}>
                {system.name}
              </span>
            )}
          </div>
          {/* Arrow */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid rgba(2,10,22,0.92)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '59, 130, 246'
}
