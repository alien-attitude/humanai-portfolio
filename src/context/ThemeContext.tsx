import {useEffect, useState, createContext, useContext, ReactNode} from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
export function ThemeProvider({ children }: {children: ReactNode;}) {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const stored = (typeof window !== 'undefined' &&
    localStorage.getItem('vee-theme')) as Theme | null;
    const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: Theme = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('vee-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}>
      
      {children}
    </ThemeContext.Provider>);

}
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}