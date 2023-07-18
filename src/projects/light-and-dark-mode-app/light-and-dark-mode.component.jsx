import Blog from "../components/blog/blog.component";

import { ThemeContext } from "../../context/theme-context/theme-context";
import { useContext } from "react";
const LightAndDarkMode = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const getPageStyles = () => {
        if (theme === 'dark') {
          return {
            backgroundColor: 'black',
            color: 'white',
            height: "100vh"
          };
        } else {
          return {
            backgroundColor: 'white',
            color: 'black',
            height: "100vh"
          };
        }
      };

  return (
    <div style={getPageStyles() }>
        <Blog theme={theme} handleClick= {toggleTheme}/>
    </div>
  )
}

export default LightAndDarkMode;