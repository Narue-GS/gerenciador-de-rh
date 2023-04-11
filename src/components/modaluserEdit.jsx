import { AiOutlineUser } from 'react-icons/ai';

const ModalUserEdit = ({users, find, setUsers, selectedUser, setProfile, currentuser, setCurrentUser, closeEdit}) => {
  const hendleSubmit = () => {
		let newList = users
		const updatedUser = {
      id: selectedUser.id,
      name: document.querySelector("#upName").value,
      birth: document.querySelector("#upBirth").value,
      email: document.querySelector("#upEmail").value,
      password: document.querySelector("#upPassword").value,
      jurisdiction: selectedUser.id
    }
		newList[users.indexOf(selectedUser)] = updatedUser
		setUsers(newList)
    setProfile(updatedUser)
    if(currentuser.id === selectedUser.id) setCurrentUser(updatedUser)
		localStorage.setItem("users", JSON.stringify(newList))
		closeEdit()
	}

  const dismiss = (id) => {
		if(id !== 0){
			const update = users.filter((user) => user.id !== id)
			setUsers(update)
			return true
		} else alert("Nao foi possível demitir: usuário de alçada Gerente"); return false
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
            <input defaultValue={find(selectedUser.jurisdiction).name} placeholder="Senha" id="upPassword" />
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