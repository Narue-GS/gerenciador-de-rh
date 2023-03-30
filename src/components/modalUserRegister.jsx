import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import "../styles/modalUserRegister.css"

const ModalUserRegister = ({users, setUsers, jurisdictions}) => {
	const [juristictionState, setJurisdictionState] = useState("Alçadas ▸") 
	const [chosenJurisdiction, setChosenJurisdiction] = useState(null)
	const jurisdictionOptionsSwitch = () => {
		if(juristictionState === "Alçadas ▸") {
			document.querySelector("#jurisdiction-choices").style.display = "flex"
			setJurisdictionState("Alçadas▾")
		} else{
				document.querySelector("#jurisdiction-choices").style.display = "none"
				setJurisdictionState("Alçadas ▸")
		}
	}

	const jurisdictionChoice = (data) => {
		setChosenJurisdiction(data)
		const options = document.querySelector("#jurisdiction-choices").children
		const option = document.querySelector(`#jurisdictionID${data.id}`)

		for(let i in options){
			if(typeof(options[i]) === "object"){
				if(options[i].id !== option.id) document.querySelector(`#${options[i].id}`).style.backgroundColor = "white"
			}
		}

		if(option.style.backgroundColor == "red"){
			option.style.backgroundColor = "white"
		} else option.style.backgroundColor = "red"
	}

	const addUser = () => {
		const newUser = {
			id: uuidv4(),
			name: document.querySelector("#newName").value,
			age: document.querySelector("#newAge").value,
			email: document.querySelector("#newEmail").value,
			password: document.querySelector("#newPassword").value,
			jurisdiction: chosenJurisdiction
		}
		
		setUsers([
			...users,
			newUser
		])
	}
	return (
		<div className="modal">
			<div className="modal-shadow">
			</div>
			<div id="modal-content">
				<div>
					<input placeholder="Nome" id="newName"></input>
					<input placeholder="Idade" id="newAge"></input>
					<input placeholder="Email" id="newEmail"></input>
					<input placeholder="Senha" id="newPassword"></input>
					<div id='jurisdiction-options'>
						<button onClick={jurisdictionOptionsSwitch} id="jurisdiction-switch">{juristictionState}</button>
						<div className='options modal-user-register' id="jurisdiction-choices">
							{jurisdictions.map((i) => {
								return <button onClick={() => jurisdictionChoice(i)} key={i.id} id={`jurisdictionID${i.id}`}>{i.name}</button>
							})}
						</div>
					</div>
					<button onClick={addUser}>Confirmar</button>
				</div>
			</div>
		</div>
	)
}

export default ModalUserRegister;