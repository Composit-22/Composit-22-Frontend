import { createContext, useState } from "react";

const DarkContext = createContext();

export const DarkModeProvider = (props) => {

  const [theme, setTheme] = useState({ mode: 'light' });

  const toggleTheme = (newTheme) => {
    setTheme({
      ...theme,
      mode: newTheme
    });
  }

  if (localStorage) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== theme.mode && savedTheme === 'dark') {
      toggleTheme(savedTheme)
    }
  }

  const switchThemeOnClick = () => {
    if (theme.mode === 'dark') {
      localStorage.setItem("theme", "light");
      toggleTheme('light');
      console.log("Light mode activated");
    } else {
      localStorage.setItem("theme", "dark");
      toggleTheme('dark');
      console.log("Dark mode activated");
    }
  };

  return (
    <DarkContext.Provider value={{ theme, switchThemeOnClick }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkContext;