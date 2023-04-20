import { createContext, useState, useContext } from 'react';

let defaultJurisdictions = JSON.parse(localStorage.getItem("jurisdictions")) || [
  { id: 0, name: "Gerente", permissions: [0, 1, 2, 3, 4, 5]},
  { id: 1, name: "Indefinido", permissions: []}
]

const JurisdictionsContext = createContext({jurisdition:defaultJurisdictions});

export const JurisditionProvider = ({children}) => {
  const [jurisdictions, setJurisdictions] = useState(defaultJurisdictions)
  return(
    <JurisdictionsContext.Provider value={{jurisdictions, setJurisdictions}}>
      {children}
    </JurisdictionsContext.Provider>
  )
} 

export const useJurisdictions = () => useContext(JurisdictionsContext)