import '../styles/userList.css'
import { FaWindowClose } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import {BsCircle} from 'react-icons/bs'
import {useState} from "react"

const UserList = ({find, currentUser, users, setUsers, jurisdictions}) => {
	const [selectedUser, setSelectedUser] = useState()
	const [selectedJurisdiction, setSelectedJurisdiction] = useState()
	const [editDisplay, setEditDisplay] = useState(false)
	const [jurisdictionState, setJurisdictionState] = useState("Alçadas ▸") 
  const [chosenJurisdiction, setChosenJurisdiction] = useState(null)

  const jurisdictionOptionsSwitch = () => {
      jurisdictionState === "Alçadas ▸" ? setJurisdictionState("Alçadas▾") : setJurisdictionState("Alçadas ▸")
  }

	const dismiss = (id) => {
		if(id !== 0){
			const update = users.filter((user) => user.id !== id)
			setUsers(update)
			return true
		} else alert("Nao foi possível demitir: usuário de alçada Gerente"); return false
	}

	const switchEdit = (user=null) => {
		setEditDisplay(!editDisplay)
		if(user) setSelectedUser(user)
	}

	const hendleSubmit = () => {
		let newList = users
		const updatedUser = {
      id: selectedUser.id,
      name: document.querySelector("#upName").value,
      age: document.querySelector("#upAge").value,
      email: document.querySelector("#upEmail").value,
      password: document.querySelector("#upPassword").value,
      jurisdiction: selectedJurisdiction.id
    }
		newList[users.indexOf(selectedUser)] = updatedUser
		setUsers(newList)
		localStorage.setItem("users", JSON.stringify(newList))
		switchEdit()
	}
	return(
		<>
		{editDisplay?
        <div className="modal">
          <div onClick={switchEdit} className="modal-shadow"></div> 
          <div className="modal-content edit-modal">       
						<div className="modal-form">
          		<input defaultValue={selectedUser.name} placeholder="Nome" id="upName"></input>
          		<input defaultValue={selectedUser.age} placeholder="Idade" id="upAge"></input>
          		<input defaultValue={selectedUser.email} placeholder="Email" id="upEmail"></input>
          		<input defaultValue={selectedUser.password} placeholder="Senha" id="upPassword"></input>
          		<div id='jurisdiction-options'>
            		<button onClick={jurisdictionOptionsSwitch} id="jurisdiction-switch">{jurisdictionState}</button>
								{jurisdictionState === "Alçadas▾" ?
            			<div >
            				{jurisdictions.map((i) => {
                			return <button
															onClick={() => setSelectedJurisdiction(i)}
															onBlur={() => document.querySelector(`#jurisdictionID${i.id}`).style.backgroundColor = "white"}
															onFocus={() => document.querySelector(`#jurisdictionID${i.id}`).style.backgroundColor = "red"}
															key={i.id}
															id={`jurisdictionID${i.id}`}>
																{i.name}
														 </button>
              			})}
									</div>
									: <></>
								}
            	<button onClick={hendleSubmit}id="jurisdiction-switch">click</button>
          	</div>
        </div>
          </div>
        </div>
        : <></>
    }
		<section id='user-list'>
			{users.map((user) => {
				return(
					<div id='user' key={user.id}>
						{find(currentUser.jurisdiction).permissions.includes(2)? <FaWindowClose id="delete" onClick={()=> dismiss(user.id)}/> : <></>}
						{find(currentUser.jurisdiction).permissions.includes(3)? <FaEdit id="edit" onClick={()=> switchEdit(user)}/> : <></>}
						<div className="litle-info">
							<span>{user.name}</span>
							<span>{find(users[0].jurisdiction).name}</span>
						</div>
					</div>
				)
			})}
		</section>
		</>
	)
}
export default UserList;
