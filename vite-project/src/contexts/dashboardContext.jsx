import { createContext, useState } from "react";


export const DashboardContext = createContext();

export const ContextProvider = ({children}) => {
    const [navbarBtn, setNavbarBtn] = useState(false);
    const [downloadBtn, setDownloadBtn] = useState(false);

    return(
        <DashboardContext.Provider value={{navbarBtn, setNavbarBtn, downloadBtn, setDownloadBtn}}>{children}</DashboardContext.Provider>
    )
}