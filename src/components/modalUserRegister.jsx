import "../styles/modalUserRegister.css"

import { useState } from 'react';

import { AiOutlineUser } from "react-icons/ai";


import { useUsers } from '../hooks/useUsers';
import { useJurisdictions } from '../hooks/useJurisdictions';

import { v4 as uuidv4 } from 'uuid';
import { isNameValid, isBirthValid, isEmailValid, isPasswordValid, isJurisdictionValid } from '../utils/ValidateUserRegister.ts';

const ModalUserRegister = ({ display, setDisplay }) => {
	const { users, setUsers } = useUsers()
	const { jurisdictions } = useJurisdictions()
	const [juristictionState, setJurisdictionState] = useState(false)
	const [chosenJurisdiction, setChosenJurisdiction] = useState({ id: null })
	const [errorList, setErrorList] = useState([
		false,
		false,
		false,
		false,
		false
	])
	const close = () => {
		setChosenJurisdiction({ id: null })
		setJurisdictionState(false)
		setDisplay(false)
		setErrorList([false, false, false, false, false])
	}
	const addUser = () => {
		const newUser = {
			id: uuidv4(),
			name: document.querySelector("#newName").value,
			birth: document.querySelector("#newBirth").value,
			email: document.querySelector("#newEmail").value,
			password: document.querySelector("#newPassword").value,
			jurisdiction: chosenJurisdiction.id
		}

		const validations = [
			!isNameValid(newUser.name),
			!isBirthValid(newUser.birth),
			!isEmailValid(newUser.email),
			!isPasswordValid(newUser.password),
			!isJurisdictionValid(newUser.jurisdiction)
		]

		if(validations.includes(true)){
			setErrorList(validations)
		} else {
			setUsers([...users, newUser])
			close()
		}
	}

	if (!display) {
		return null
	}

	return (
		<div className="modal">
			<>
				<div className="modal-shadow" onClick={() => {
					setChosenJurisdiction({ id: null })
					setJurisdictionState(false)
					setDisplay(false)
					setErrorList([false, false, false, false, false])
				}}>
				</div>
				<div className="modal-content user-register">
					<div className="modal-form">
						<div className='title'>
							<AiOutlineUser color="white" fontSize="7vw" />
						</div>
						<div className="modal-form-input">
							<input placeholder="Nome" id="newName" />
							<span style={errorList[0] ? { "opacity": "100%" } : {}} className='field-error'>Nome inválido</span>
						</div>
						<div className="modal-form-input">
							<input type='date' id="newBirth" />
							<span style={errorList[1] ? { "opacity": "100%" } : {}} className='field-error'>Data de nascimento inválida</span>
						</div>
						<div className="modal-form-input">
							<input placeholder="Email" id="newEmail" />
							<span style={errorList[2] ? { "opacity": "100%" } : {}} className='field-error'>Email inválido</span>
						</div>
						<div className="modal-form-input">
							<input placeholder="Senha" id="newPassword" />
							<span style={errorList[3] ? { "opacity": "100%" } : {}} className='field-error'>Senha inválida ou fraca</span>
						</div>
						<div id='user-register-dropdown'>
							<button onClick={() => setJurisdictionState(!juristictionState)} id="jurisdiction-switch">{juristictionState ? "Alçadas▾" : "Alçadas ▸"}</button>
							<div style={!juristictionState ? { "display": "none" } : {}} className='dropdown jurisdiction-choice' id="jurisdiction-choices">
								{jurisdictions.map((i) => {
									if(i.id === 1) return null
									return <span
													className="simple-item"
													style={chosenJurisdiction.id !== i.id ? { "opacity": "50%" } : {}}
													onClick={() => {
														chosenJurisdiction.id !== i.id ? setChosenJurisdiction({id:i.id}) : setChosenJurisdiction({id:null})
													}}
									 				key={i.id} id={`jurisdictionID${i.id}`}>
													{i.name}
												 </span>
								})}
							</div>
							<br /><span style={errorList[4] ? { "opacity": "100%" } : {}} className='field-error'>Escolha uma alçada</span>
						</div>
					</div>
					<div className='form-menu'>
						<button className='confirm' onClick={addUser}>Confirmar</button>
					</div>
				</div>
			</>
		</div>
	)
}

export default ModalUserRegister;
