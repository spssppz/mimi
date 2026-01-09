'use client'
import { createContext, useContext, useState } from 'react'

type ThemeContextType = {
	enabled: boolean
	toggle: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [enabled, setEnabled] = useState(false)

	const toggle = () => setEnabled(prev => !prev)

	return (
		<ThemeContext.Provider value={{ enabled, toggle }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
	return ctx
}
