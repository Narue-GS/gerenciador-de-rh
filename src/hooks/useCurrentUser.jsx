import { createContext, useState } from 'react';
import { useContext } from 'react';

const defaultCurrentUser = JSON.parse(localStorage.getItem("currentUser"))

const CurrentUserContext = createContext({curentUser:defaultCurrentUser});

export const CurrentUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(defaultCurrentUser)
  return(
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </CurrentUserContext.Provider>
  )
} 

export const useCurrentUser = () => useContext(CurrentUserContext)