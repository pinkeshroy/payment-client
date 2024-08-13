import { useEffect } from "react";

const useTheme = () => {
    const CONSTANTS = {
        html: "html",
        dark: "dark",
        light: "light",
        theme: "theme",
        dataTheme: "data-theme"
    };

    const getActiveTheme = () => localStorage.getItem(CONSTANTS.theme);

    const applyTheme = () => {
        const activeTheme = getActiveTheme();
        const [htmlTag] = document.getElementsByTagName(CONSTANTS.html);
        const newTheme =
            activeTheme === CONSTANTS.light ? CONSTANTS.light : CONSTANTS.dark;
        htmlTag.setAttribute(CONSTANTS.dataTheme, newTheme);
        localStorage.setItem(CONSTANTS.theme, newTheme);
    };

    const toggleTheme = () => {
        const activeTheme = getActiveTheme();
        const [htmlTag] = document.getElementsByTagName(CONSTANTS.html);
        const newTheme =
            activeTheme === CONSTANTS.dark ? CONSTANTS.light : CONSTANTS.dark;
        htmlTag.setAttribute(CONSTANTS.dataTheme, newTheme);
        localStorage.setItem(CONSTANTS.theme, newTheme);
    };

    useEffect(() => {
        applyTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { getActiveTheme, applyTheme, toggleTheme };
};

export default useTheme;
