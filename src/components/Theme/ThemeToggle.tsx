import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  function isDark() {
    return theme === 'dark'
  }

  return (
    <button
      className='focus:outline-none transition-all'
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label='Theme toggle'
    >
      {isDark() ? <>claro</> : <>escuro</>}
    </button>
  )
}
