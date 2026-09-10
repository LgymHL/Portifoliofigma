import { createContext, useContext, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (e: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("gm-theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const irisXRef = useRef("50%");
  const irisYRef = useRef("50%");
  const irisRRef = useRef("150%");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gm-theme", theme);
  }, [theme]);

  const toggleTheme = (e: React.MouseEvent) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduced && "startViewTransition" in document) {
      const x = e.clientX;
      const y = e.clientY;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Largest distance from click to any corner
      const r = Math.ceil(
        Math.max(
          Math.hypot(x, y),
          Math.hypot(w - x, y),
          Math.hypot(x, h - y),
          Math.hypot(w - x, h - y),
        ),
      );

      irisXRef.current = `${x}px`;
      irisYRef.current = `${y}px`;
      irisRRef.current = `${r}px`;

      document.documentElement.style.setProperty("--iris-x", `${x}px`);
      document.documentElement.style.setProperty("--iris-y", `${y}px`);
      document.documentElement.style.setProperty("--iris-r", `${r}px`);

      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setTheme((t) => (t === "light" ? "dark" : "light"));
      });
    } else {
      setTheme((t) => (t === "light" ? "dark" : "light"));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
