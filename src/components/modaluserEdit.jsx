import "../styles/modalUserEdit.css"

import { AiOutlineUser } from 'react-icons/ai';

import { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useJurisdictions } from '../hooks/useJurisdictions';
import { useProfile } from "../hooks/useprofile";

const ModalUserEdit = ({find, selectedUser, closeEdit}) => {
  const {users, setUsers} = useUsers()
  const {currentUser, setCurrentUser} = useCurrentUser()
  const {jurisdictions} = useJurisdictions()
  const { setProfile } = useProfile()
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(currentUser.jurisdiction) || null
  
  const hendleSubmit = () => {
		let newList = [...users]
		const updatedUser = {
      id: selectedUser.id,
      name: document.querySelector("#upName").value,
      birth: document.querySelector("#upBirth").value,
      email: document.querySelector("#upEmail").value,
      password: document.querySelector("#upPassword").value,
      jurisdiction: selectedJurisdiction
    }
		newList[users.indexOf(selectedUser)] = updatedUser
		setUsers(newList)
    setProfile(updatedUser)
    if(currentUser.id === selectedUser.id) setCurrentUser(updatedUser)
		localStorage.setItem("users", JSON.stringify(newList))
		closeEdit()
	}

  if(!selectedUser) return null
  return(
    <div className="modal">
      <div onClick={closeEdit} className="modal-shadow"></div> 
      <div className="modal-content edit-modal">     
        <div className="title">
          <AiOutlineUser  color="white" font-size="7vw"/>
          <input autoFocus={true} className='profile-name' defaultValue={selectedUser.name} placeholder="Nome" id="upName" />
        </div>
        <div className="profile-info">
          <div className="profile-field">
						<span>Data de nascimento</span><br/>
            <input type='date' defaultValue={selectedUser.birth} placeholder="Data de nascimento" id="upBirth" />
					</div>
          <div className="profile-field">
						<span>Email</span><br/>
            <input defaultValue={selectedUser.email} placeholder="Email" id="upEmail" />
					</div>
          <div className="profile-field">
						<span>Senha</span><br/>
            <input defaultValue={selectedUser.password} placeholder="Senha" id="upPassword" />
					</div>
          <div className="profile-field">
						<span>Alçada</span><br/>
            <div className='dropdown user-edit'>
              <span
                style={selectedJurisdiction !== selectedUser.jurisdiction ? {"opacity":"50%"} : {}}
                className='simple-item clickable'
                onClick={() => setSelectedJurisdiction(selectedUser.jurisdiction)}
                >
                {find(selectedUser.jurisdiction).name}
              </span>
              {jurisdictions.map((i) => {
                if(i.id !== selectedUser.jurisdiction && i.id !== 1){
                  return <span
                          style={selectedJurisdiction !== i.id ? {"opacity":"50%"} : {}}
                          className='simple-item clickable'
                          onClick={() => setSelectedJurisdiction(i.id)}
                          >
                          {i.name}
                         </span>
                } else return <></>
              })}
            </div>
					</div>
        </div>
        <div className='form-menu'>
          <button className='confirm' onClick={hendleSubmit}>Confirmar</button>
          <button className='cancel' onClick={() => {
            setProfile(selectedUser)
            closeEdit()
            }}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalUserEdit;