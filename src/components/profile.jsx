import "../styles/profile.css"

import { AiOutlineUser } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

import { useState } from "react";

const Profile = ({find, profile, openEdit, closeProfile}) => {
	const [dropState, setDropState] = useState(false)
	if(!profile) return null
	return(
		<div className="modal">
			<div className="modal-shadow" onClick={closeProfile}></div>
			<div className="modal-content profile">
				<div className="title">
					<AiOutlineUser  color="white" font-size="7vw"/>
					<FaEdit onClick={openEdit} className="edit" position="absolute" fontSize="2vw"/>
					<h1 className="profile-name">{profile.name}</h1>
				</div>
				<div className="profile-info">
					<div className="profile-field">
						<span>Dada de nascimento:</span><br></br>
						<span>{profile.birth? profile.birth : "Não informado"}</span>
					</div>
					<div className="profile-field">
						<span>Email:</span><br></br>
						<span>{profile.email}</span>
					</div>
					<div className="profile-field">
						<span>Senha:</span><br></br>
						<span>{profile.password}</span>
					</div>
					<div className="profile-field">
						<span onClick={() => setDropState(!dropState)}>{find(profile.jurisdiction).name}</span>
						{dropState?
							<div className="dropdown profile-permissions">
								{profile.permissions.map((i) => {
									return <span className="permission">{i.name}</span>
								})}
							</div>
							: <></>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
