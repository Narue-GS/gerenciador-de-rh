import { useState } from "react";
import "../styles/permissionsList.css"

import { AiOutlinePlus } from 'react-icons/ai';

const PermissionList = ({permissions, display, setDisplay}) => {
  const [inputState, setInputState] = useState(null)
  
  if(!display) return null 
  return(
    <div className="modal">
      <div className="modal-shadow" onClick={() =>{
        setDisplay()
        setInputState(null)
      }}>
      </div>
      <div className="modal-content">
        <div id="permission-list">
          {permissions.map((i) => {
            return <span className="permission">{i.name}</span>
          })}
        </div>
        <div className="form-menu simple">
          <div className="simple-field" style={{"animationName":inputState}}>
            <input type="text" className="simple-input"/>
            <button>
              <AiOutlinePlus className="simple-button" onClick={() =>{
                inputState === null || inputState === "hideInput" ? setInputState("showInput") : setInputState("hideInput")
              }}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermissionList