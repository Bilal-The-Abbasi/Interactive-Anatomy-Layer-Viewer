import { motion } from 'framer-motion'

export default function GlassPanel({ children, className = '', style = {}, animate = true, ...props }) {
  const Wrapper = animate ? motion.div : 'div'

  return (
    <Wrapper
      className={`glass-panel rounded-xl overflow-hidden ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

export function GlassPanelSection({ children, className = '', label }) {
  return (
    <div className={`px-4 py-3 ${className}`}>
      {label && (
        <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'rgba(148,163,184,0.4)' }}>
          {label}
        </p>
      )}
      {children}
    </div>
  )
}
