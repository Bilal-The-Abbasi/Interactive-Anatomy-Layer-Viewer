import { useAnatomyStore } from '../store/anatomyStore'

export function useAnatomySearch() {
  const { searchQuery, setSearchQuery, searchResults, setSelectedPart } = useAnatomyStore()

  const selectResult = (part) => {
    setSelectedPart(part)
    setSearchQuery('')
  }

  const clear = () => setSearchQuery('')

  return { searchQuery, setSearchQuery, searchResults, selectResult, clear }
}
