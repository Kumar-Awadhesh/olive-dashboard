import { createContext, useEffect, useState } from "react";


export const DashboardContext = createContext();

export const ContextProvider = ({ children }) => {
    const [showProduct, setShowProduct] = useState(true);
  



    return (
        <DashboardContext.Provider value={{ showProduct, setShowProduct }}>{children}</DashboardContext.Provider>
    )
}