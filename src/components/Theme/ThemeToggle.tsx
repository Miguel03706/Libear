import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
    setMounted(true)
  }, [])

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

export default ThemeToggle
