import '../styles/userList.css'
import { FaWindowClose } from 'react-icons/fa';
import {BsCircle} from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai';

import {useState} from "react"

const UserList = ({openProfile, find, currentUser, canSeeUsers, users, setUsers, jurisdictions}) => {
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

	if(!canSeeUsers){
		return null
	}

	return(
		<section id='user-list'>
			{users.map((user) => {
				return(
					<div 	onClick={() => openProfile(user)} id='user-card' key={user.id}>
						<AiOutlineUser color='white' fontSize="3vw"/>
						<span>{user.name}</span>
					</div>
				)
			})}
		</section>
	)
}
export default UserList;
