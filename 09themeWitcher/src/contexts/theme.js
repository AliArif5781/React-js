import { createContext , useContext } from "react";

export const ThemeContext = createContext({        // jb apka context bana ga mean jb uski initial stage hogi wha pa bi ap kuch value da skta ho.Context jb pheli baar bana tu usma kya kya value already feed ho.
        themeMode: "light",  // har baar user ko jb bi theme set krni ho atleast default variable wha pa ho
        darkTheme: () => {},
        lightTheme:() => {},
})     

export  const ThemeProvider = ThemeContext.Provider   // ThemeProvider la kr rap kr deh ga

export default function useTheme(){   // yeh is lya banaya kabhi bi mijah ThemeContext kivalue ka excess chayeh hoga mijah tu useTheme() use kr leh ga aur jo chayeh hoga extract kr leh ga
    return useContext(ThemeContext)
}