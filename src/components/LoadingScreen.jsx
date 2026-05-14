import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useAnatomyStore } from '../store/anatomyStore'

const LAYERS = [
  { label: 'Skeletal System', color: '#e8e4d0', delay: 0 },
  { label: 'Muscular Layer', color: '#c0392b', delay: 0.15 },
  { label: 'Circulatory System', color: '#e53935', delay: 0.3 },
  { label: 'Nervous System', color: '#4fc3f7', delay: 0.45 },
  { label: 'Respiratory System', color: '#81d4fa', delay: 0.6 },
  { label: 'Digestive System', color: '#ff8f00', delay: 0.75 },
  { label: 'Lymphatic System', color: '#66bb6a', delay: 0.9 },
  { label: 'Skin Layer', color: '#d4a899', delay: 1.05 },
]

export default function LoadingScreen() {
  const { isLoading, setLoading } = useAnatomyStore()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200)
    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: '#020c1b' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 65%)',
            }}
          />

          {/* Logo / Title */}
          <motion.div
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <motion.div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(59,130,246,0.15)',
                  border: '1px solid rgba(59,130,246,0.3)',
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-2xl">⚕</span>
              </motion.div>
              <div>
                <h1
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: '#e2e8f0', letterSpacing: '-0.02em' }}
                >
                  Anatomy Explorer
                </h1>
                <p className="text-xs font-mono" style={{ color: 'rgba(148,163,184,0.5)' }}>
                  INTERACTIVE LAYER VIEWER
                </p>
              </div>
            </div>
          </motion.div>

          {/* Animated body silhouette */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
              {/* Head */}
              <motion.circle
                cx="40" cy="18" r="14"
                stroke="rgba(59,130,246,0.4)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              {/* Torso */}
              <motion.rect
                x="22" y="36" width="36" height="60" rx="8"
                stroke="rgba(59,130,246,0.3)"
                strokeWidth="1"
                fill="rgba(59,130,246,0.04)"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: '40px 36px' }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              {/* Left arm */}
              <motion.rect
                x="6" y="40" width="14" height="44" rx="7"
                stroke="rgba(59,130,246,0.25)"
                strokeWidth="1"
                fill="none"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: '13px 40px' }}
                transition={{ duration: 0.7, delay: 0.7 }}
              />
              {/* Right arm */}
              <motion.rect
                x="60" y="40" width="14" height="44" rx="7"
                stroke="rgba(59,130,246,0.25)"
                strokeWidth="1"
                fill="none"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: '67px 40px' }}
                transition={{ duration: 0.7, delay: 0.7 }}
              />
              {/* Left leg */}
              <motion.rect
                x="24" y="100" width="14" height="56" rx="7"
                stroke="rgba(59,130,246,0.25)"
                strokeWidth="1"
                fill="none"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: '31px 100px' }}
                transition={{ duration: 0.9, delay: 0.9 }}
              />
              {/* Right leg */}
              <motion.rect
                x="42" y="100" width="14" height="56" rx="7"
                stroke="rgba(59,130,246,0.25)"
                strokeWidth="1"
                fill="none"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: '49px 100px' }}
                transition={{ duration: 0.9, delay: 0.9 }}
              />
              {/* Heart pulse */}
              <motion.circle
                cx="36" cy="58" r="5"
                fill="rgba(229,57,53,0.6)"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
              />
            </svg>

            {/* Scan line effect */}
            <motion.div
              className="absolute left-0 right-0 h-px"
              style={{ background: 'rgba(59,130,246,0.5)', boxShadow: '0 0 8px rgba(59,130,246,0.8)' }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </motion.div>

          {/* Layer loading indicators */}
          <div className="flex flex-col gap-2 w-64">
            {LAYERS.map((layer, i) => (
              <motion.div
                key={layer.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: layer.delay + 0.5 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: layer.color }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: layer.delay }}
                />
                <div className="flex-1 h-px" style={{ background: `${layer.color}20` }}>
                  <motion.div
                    className="h-full"
                    style={{ background: layer.color }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: layer.delay + 0.6 }}
                  />
                </div>
                <span
                  className="text-xs font-mono"
                  style={{ color: 'rgba(148,163,184,0.5)', fontSize: '10px' }}
                >
                  {layer.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Status text */}
          <motion.p
            className="mt-8 text-xs font-mono"
            style={{ color: 'rgba(148,163,184,0.4)' }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing anatomical systems...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
