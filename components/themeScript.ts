/**
 * Applied before first paint so a dark-mode reader never sees a white flash.
 * Kept inline and tiny on purpose: it has to run synchronously in <head>, and
 * it cannot depend on React. Shared by both root layouts so the two languages
 * toggle the same `dark` class on the same key.
 */
export const themeScript = `(()=>{try{var s=localStorage.getItem("pc-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;
