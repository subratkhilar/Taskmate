import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg'
export const Header = () =>{
    const [theme, setTheme] = useState(JSON.stringify(localStorage.getItem('taskList')) || "medium")

   

    useEffect(()=>{
        localStorage.setItem("theme",JSON.stringify(theme))
        document.documentElement.removeAttribute("class")
        document.documentElement.classList.add(theme);
    },[theme]);

    return (
        <header>
            <div className='logo'>
            <img src={Logo} alt=""/>
            <span>Taskmate</span>
            </div>
           
            <div className='themeSelector'>
                <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "medium"}></span>
            </div>
        </header>
    );
}