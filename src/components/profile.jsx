import "../styles/profile.css"

import { AiOutlineUser } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { usePermissions } from "../hooks/usePermissions";

import ActionConfirmation from "./actionConfirmation";
import { useCurrentUsers } from "../hooks/useCurrentUser";
const Profile = ({find, profile, openEdit, closeProfile}) => {
	const {users, setUsers} = useUsers()
	const {findPermissions} = usePermissions()
	const { currentUser, setCurrentUser } = useCurrentUsers()
	const [dropState, setDropState] = useState(false)
	const [deletedUser, setDeletedUser] = useState()
	const [confirmState, setConfirmState] = useState(false)
	const [passwordMask, setPasswordMask] = useState(true)

	const dismiss = (id) => {
		if(id !== 0){
			setUsers(users.filter((user) => user.id !== id))
			if(profile.id === currentUser.id) {
				setCurrentUser(null)
			}
			closeProfile()
			return true
		} else alert("Nao foi possível demitir: usuário de alçada Gerente"); return false
	}

	if (!profile) return null
	return (
		<div className="modal">
			<ActionConfirmation
				action={() => dismiss(deletedUser.id)}
				text={"Tem certeza que deseja demitir esse funcionário?"}
				display={confirmState}
				setDisplay={() => setConfirmState(false)}
			/>
			<div className="modal-shadow" onClick={closeProfile}></div>
			<div className="modal-content profile">
				<div className="title">
					<AiOutlineUser color="white" font-size="7vw" />
					{(find(currentUser.jurisdiction).permissions).includes(3)? 
						<FaEdit onClick={openEdit} className="edit" position="absolute" fontSize="2vw" />
						: <></>
					}
					<h1 className="profile-name">{profile.name}</h1>
				</div>
				<div className="profile-info">
					<div className="profile-field">
						<span>Dada de nascimento:</span><br/>
						<span>{profile.birth ? profile.birth : "Não informado"}</span>
					</div>
					<div className="profile-field ">
						<span>Email:</span><br/>
						<span>{profile.email}</span>
					</div>
					<div className="profile-field">
						<span>Senha:</span><br/>
						<span
							style={passwordMask ? {"backgroundColor":"white"} : {}}
							onMouseEnter={() => setPasswordMask(false)}
							onMouseLeave={() => setPasswordMask(true)}>
							{profile.password}
						</span>
					</div>
					<div className="profile-field">
						<span onClick={() => setDropState(!dropState)}>{find(profile.jurisdiction).name}</span>
						{dropState ?
							<div  className="dropdown profile-permissions">
								{findPermissions(find((profile.jurisdiction)).permissions).map((i) => {
									return <span className="simple-item">{i.name}</span>
						
						})}
								
							</div>
							: <></>
						}
					</div>
				</div>
        <div className="form-menu">
					<button className="cancel" onClick={() =>{
						setDeletedUser(profile)
						setConfirmState(true)
					}}>Demitir</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
