import { FaWindowClose } from 'react-icons/fa';

const UserList = ({find, currentUser, users, setUsers}) => {
	const dismiss = (id) => {
		if(id !== 0){
			const update = users.filter((user) => user.id !== id)
			setUsers(update)
		} else alert("Nao foi possível demitir: usuário de alçada Gerente")
		return true
	}
	return(
		<>
			{users.map((user) => {
				return(
					<div key={user.id}>
						{find(currentUser.jurisdiction).permissions.includes(2)? <FaWindowClose onClick={()=> dismiss(user.id)}/> : <></>}
						<span>{user.name} - </span>
					 	<span>{find(user.jurisdiction).name}</span>
					</div>
				)
			})}
		</>
	)
}
export default UserList;
