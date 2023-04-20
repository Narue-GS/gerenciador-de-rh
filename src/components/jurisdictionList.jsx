import '../styles/jurisdictionList.css'

import { useState } from "react"

import { AiOutlinePlus } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';

import { v4 as uuidv4 } from 'uuid';

import { usePermissions } from '../hooks/usePermissions';
import { useJurisdictions } from '../hooks/useJurisdictions';
import { useUsers } from '../hooks/useUsers';

import ActionConfirmation from './actionConfirmation';

const JurisdictionList = ({ display, setDisplay }) => {
  const [inputState, setInputState] = useState(["", ""])
  const { permissions, findPermissions } = usePermissions()
  const { jurisdictions, setJurisdictions } = useJurisdictions()
  const { users, setUsers} = useUsers()
  const [selectedPermissions, setSelectedPermissions] = useState([])
  const [deletedJurisdiction, setDeletedJurisdiction] = useState(null)
  const [consfirmState, setConfirmState] = useState(false)

  const showPermissions = (id) => {
    let thisPermissions = document.querySelector(`#permissions${id}`)
    thisPermissions.style.display === "flex" ? thisPermissions.style.display = "none" : thisPermissions.style.display = "flex"
    console.log(thisPermissions.style.display);
  }

  const hendleAdd = () => {
    const jurisdictionName = document.querySelector("#newJurisdiction")
    if (!inputState[0] || inputState[0] === "hideInput") {
      setInputState(["showInput", "openField"])
      jurisdictionName.focus()
    } else {
      setInputState(["hideInput", "closeField"])
      if (jurisdictionName.value) {
        setJurisdictions([...jurisdictions, { id: uuidv4(), name: jurisdictionName.value, permissions:selectedPermissions }])
      }
      setSelectedPermissions([])
      jurisdictionName.value = ""
    }
  }

  const hendleRemove = (jurisdiction) => {
    if(typeof(jurisdiction.id) !== "number"){
      setJurisdictions(jurisdictions.filter((i) => i.id !== jurisdiction.id))
      setUsers([...users].map((i) => {
        if(i.jurisdiction === jurisdiction.id){
          i.jurisdiction = 1
          console.log(i);
        }
        return i
      }))
    }
    
  }

  const hendleSelect = (id) => {
    if (selectedPermissions.includes(id)) {
      setSelectedPermissions(selectedPermissions.filter((i) => i !== id))
    } else {
      setSelectedPermissions([...selectedPermissions, id])
    }
  }

  if (!display) return null
  return (
    <div className="modal">
      <ActionConfirmation 
        action={() => hendleRemove(deletedJurisdiction)} 
        text={"Tem certeza que deseja apagar essa alçada?"}
        display={consfirmState}
        setDisplay={() => setConfirmState(false)} 
      />
      <div className="modal-shadow" onClick={() => {
        setDisplay()
        setInputState(["", ""])
      }}></div>
      <div className="modal-content">
        <div className="simple-list">
          {jurisdictions.map((i) => {
            if(i.id === 1) return null
            return (
              <div className="simple-item jurisdiction" onClick={() => showPermissions(i.id)}>
                <span>
                  {i.name}
                  <div className='jurisdiction-menu'>
                    <FaWindowClose onClick={() => {
                      setConfirmState(true)
                      setDeletedJurisdiction(i)
                    }} className='clickable-icon'/>
                  </div>
                </span>
                <div style={{ "display": "none" }} id={"permissions" + i.id} className='dropdown simple-jurisdiction-permissions'>
                  {findPermissions(i.permissions).map((permission) => {
                    return <span key={uuidv4()}>{permission.name}</span>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="form-menu simple">
          <div className="simple-field add-jurisdiction" style={{ "animationName": inputState[1] }}>
            <input type="text" id="newJurisdiction" className="simple-input" style={{ "animationName": inputState[0] }} />
            <div className='simple-list' style={inputState[0] !== "showInput" ? { "display": "none" } : {}}>
              {permissions.map((i) => {
                return <span style={!selectedPermissions.includes(i.id) ? { "opacity": "50%" } : {}} id={'permission' + i.id} onClick={() => hendleSelect(i.id)} className='simple-item clickable' >{i.name}</span>
              })}
            </div>
            <button>
              <AiOutlinePlus onClick={hendleAdd} className="simple-button" />
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default JurisdictionList;