import "../styles/permissionsList.css"

import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { usePermissions } from "../hooks/usePermissions";
import { useJurisdictions } from "../hooks/useJurisdictions";

import ActionConfirmation from "./actionConfirmation";

const PermissionList = ({display, setDisplay}) => {
  const {permissions, setPermissions} = usePermissions()
  const {jurisdictions, setJurisdictions} = useJurisdictions()
  const [inputState, setInputState] = useState(["", ""])
  const [consfirmState, setConfirmState] = useState(false)
  const [deletedPermission, setDeletedPermission] = useState(null)

  const hendleAdd = () => {
    const newPermission = document.querySelector("#newPermission")
    if(!inputState[0] || inputState[0] === "hideInput"){
      setInputState(["showInput", "openField"])
      newPermission.focus()
    } else {
      setInputState(["hideInput", "closeField"])
      if(newPermission.value) {
        setPermissions([
          ...permissions, 
          {
            id:uuidv4(),
            name:newPermission.value
          }
        ])
        newPermission.value = ""
      }
    }
  }

  const deletePermission = (permission) => {
    if(typeof(permission.id) !== "number"){
      setPermissions(permissions.filter((i) => i.id !== permission.id))
      setJurisdictions([...jurisdictions].map((i) => {
        if(i.permissions.includes(permission.id)){
          i.permissions.splice(i.permissions.indexOf(permission.id), 1)
        }
        return i
      }))
    }

  }

  if(!display) return null 
  return(
    <div className="modal">
      <ActionConfirmation
        action={() => deletePermission(deletedPermission)}
        text={"tem certeza que deseja apagar essa permissão?"}
        display={consfirmState}
        setDisplay={() => setConfirmState(false)}
      />
      <div className="modal-shadow" onClick={() =>{
        setDisplay()
        setInputState(["", ""])
      }}>
      </div>
      <div className="modal-content">
        <div className="simple-list">
          {permissions.map((i) => {
            return(
                <span className="simple-item">
                  <span className="permission-name">{i.name}</span>
                  <div className="item-menu">
                    <FaWindowClose onClick={() => {
                      setConfirmState(true)
                      setDeletedPermission(i)
                    }} className="action-icon"/>
                  </div>
                </span>
            )
          })}
        </div>
        <div className="form-menu simple">
          <div className="simple-field" style={{"animationName":inputState[1]}}>
            <input type="text" id="newPermission" className="simple-input" style={{"animationName":inputState[0]}}/>
            <button>
              <AiOutlinePlus className="simple-button" onClick={hendleAdd}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermissionList