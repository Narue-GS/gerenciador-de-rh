import '../styles/userList.css'
import { AiOutlineUser } from 'react-icons/ai';

import { useUsers } from '../hooks/useUsers';

const UserList = ({openProfile, canSeeUsers}) => {
	const {users} = useUsers()
	
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