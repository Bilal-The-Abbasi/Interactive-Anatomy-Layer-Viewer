import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useAnatomyStore } from '../store/anatomyStore'

export default function StoryModePanel() {
  const {
    isStoryMode,
    activeStory,
    activeStoryStep,
    nextStoryStep,
    prevStoryStep,
    endStory,
    setSelectedPart,
  } = useAnatomyStore()

  const step = activeStory?.steps?.[activeStoryStep]
  const totalSteps = activeStory?.steps?.length || 0
  const isLast = activeStoryStep === totalSteps - 1
  const isFirst = activeStoryStep === 0
  const progress = totalSteps > 0 ? ((activeStoryStep + 1) / totalSteps) * 100 : 0

  // Auto-highlight focused anatomy part
  useEffect(() => {
    if (step?.focusPartId) {
      // We'll just clear selected part so it doesn't interfere
      // In a full implementation, we'd focus the camera on the part
    }
  }, [step])

  return (
    <AnimatePresence>
      {isStoryMode && activeStory && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-lg px-4"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(2,10,22,0.92)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.1)',
            }}
          >
            {/* Progress bar */}
            <div className="h-0.5 w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <motion.div
                className="h-full"
                style={{ background: 'linear-gradient(to right, #3b82f6, #22d3ee)' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            {/* Step content */}
            <div className="px-5 py-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{activeStory.icon}</span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest" style={{ color: 'rgba(148,163,184,0.45)' }}>
                      Step {activeStoryStep + 1} of {totalSteps}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>
                      {activeStory.title}
                    </p>
                  </div>
                </div>
                <button
                  onClick={endStory}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  ×
                </button>
              </div>

              {/* Step title + narration */}
              <AnimatePresence mode="wait">
                {step && (
                  <motion.div
                    key={activeStoryStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <h3
                      className="text-base font-bold mb-2"
                      style={{ color: '#f1f5f9', letterSpacing: '-0.01em' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(203,213,225,0.7)' }}>
                      {step.narration}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                {/* Step dots */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === activeStoryStep ? 20 : 6,
                        height: 6,
                        background:
                          i === activeStoryStep
                            ? '#3b82f6'
                            : i < activeStoryStep
                            ? 'rgba(59,130,246,0.4)'
                            : 'rgba(255,255,255,0.12)',
                      }}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  {!isFirst && (
                    <motion.button
                      onClick={prevStoryStep}
                      className="btn-ghost text-xs px-3 py-1.5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ← Previous
                    </motion.button>
                  )}
                  <motion.button
                    onClick={isLast ? endStory : nextStoryStep}
                    className="btn-primary text-xs px-4 py-1.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: isLast ? 'rgba(34,197,94,0.15)' : 'rgba(59,130,246,0.2)',
                      borderColor: isLast ? 'rgba(34,197,94,0.35)' : 'rgba(59,130,246,0.4)',
                      color: isLast ? '#86efac' : '#93c5fd',
                    }}
                  >
                    {isLast ? 'Complete ✓' : 'Next →'}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
