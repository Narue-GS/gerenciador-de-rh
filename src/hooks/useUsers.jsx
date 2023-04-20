import { createContext, useState } from 'react';
import { useContext } from 'react';

let defaultUsers = JSON.parse(localStorage.getItem("users")) || [
  { id: 0, name: "Carlos", birth: null, email: "carlos@gmail.com", password: "wE4&34e$5$Ix", jurisdiction: 0 }
]

const UsersContext = createContext({users:defaultUsers});

export const UsersProvider = ({children}) => {
  const [users, setUsers] = useState(defaultUsers)
  return(
    <UsersContext.Provider value={{users, setUsers}}>
      {children}
    </UsersContext.Provider>
  )
} 

export const useUsers = () => useContext(UsersContext)