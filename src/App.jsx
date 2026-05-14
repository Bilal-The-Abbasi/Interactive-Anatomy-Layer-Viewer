import { Suspense } from 'react'
import { motion } from 'framer-motion'
import TopBar from './components/TopBar'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import LoadingScreen from './components/LoadingScreen'
import StoryModePanel from './components/StoryModePanel'
import HoverTooltip from './components/HoverTooltip'
import AnatomyViewer from './scenes/AnatomyViewer'
import { useAnatomyStore } from './store/anatomyStore'

function ViewerHint() {
  const { selectedPart, isStoryMode } = useAnatomyStore()
  if (selectedPart || isStoryMode) return null

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 pointer-events-none z-20 float-hint"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
        style={{
          background: 'rgba(2,10,22,0.8)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: 'rgba(148,163,184,0.5)',
          backdropFilter: 'blur(8px)',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-blue-400"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        Drag to rotate · Scroll to zoom · Click to explore
      </div>
    </motion.div>
  )
}

export default function App() {
  const { isLoading } = useAnatomyStore()

  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: '#020c1b' }}>
      <LoadingScreen />

      {!isLoading && (
        <motion.div
          className="flex flex-col flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top navigation bar */}
          <TopBar />

          {/* Main content area */}
          <div className="flex flex-1 overflow-hidden relative">
            {/* Left sidebar */}
            <LeftSidebar />

            {/* Center: 3D Anatomy Viewer */}
            <main className="relative flex-1 overflow-hidden canvas-bg">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full">
                    <motion.div
                      className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                }
              >
                <AnatomyViewer />
              </Suspense>

              {/* Floating UI overlays */}
              <HoverTooltip />
              <ViewerHint />
              <StoryModePanel />
            </main>

            {/* Right sidebar */}
            <RightSidebar />
          </div>
        </motion.div>
      )}
    </div>
  )
}
