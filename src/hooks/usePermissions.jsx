import { createContext, useState, useContext } from 'react';

let defaultPermissions = JSON.parse(localStorage.getItem("permissions")) ||  [
  { id: 0, name: "Ver usuários" },
  { id: 1, name: "Contratar" },
  { id: 2, name: "Demitir" },
  { id: 3, name: "Modificar usuários" },
  { id: 4, name: "Cadastrar, modificar e deletar alçadas" },
  { id: 5, name: "Cadastrar, modificar e deletar permições" }
]

const PermissionsContext = createContext({permissions:defaultPermissions});

export const PermissionsProvider = ({children}) => {
  const [permissions, setPermissions] = useState(defaultPermissions)
  const findPermissions = (ids) => {
		const yourPermissions = []
		const permissionsIds = permissions.map((i) => i.id)
      ids.map((id) => {
        if (permissionsIds.includes(id)) {
          yourPermissions.push(permissions[permissionsIds.indexOf(id)])
        }
      }
    )
		return yourPermissions
	}
  return(
    <PermissionsContext.Provider value={{permissions, setPermissions, findPermissions}}>
      {children}
    </PermissionsContext.Provider>
  )
} 

export const usePermissions = () => useContext(PermissionsContext)