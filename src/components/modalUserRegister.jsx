import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const ModalUserRegister = ({users, setUsers, jurisdictions}) => {
	const [juristictionState, setJurisdictionState] = useState("Alçadas ▸") 
	const jurisdictionOptionsSwitch = () => {
		//juristictionState == "Alçadas ▸" ? document.querySelector("#jurisdiction-choices").getElementsByClassName.display = "flex" : 
	}

	const addUser = () => {
		const newUser = {
			age: document.querySelector("#newAge"),
			email: document.querySelector("#newEmail"),
			id: uuidv4(),
			name: document.querySelector("#newName"),
			password: document.querySelector("#newPassword")
		}
	}
	console.log(jurisdictions)
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
					<div className='jurisdiction-options'>
						<button onClick={() => setJurisdictionState("Alçadas▾")} id="jurisdiction-switch">{juristictionState}</button>
						<div className='options' id="jurisdiction-choices">
							{jurisdictions.map((i) => {
								return <button key={i.id}>{i.name}</button>
							})}
						</div>
					</div>
					<button>Confirmar</button>
				</div>
			</div>
		</div>
	)
}

export default ModalUserRegister;