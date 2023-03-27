const UserList = ({find, users}) => {
	return(
		<>
			{users.map((user) => {
			return <span>{user.name} - {find(users[0].id).name}</span>
			})}
		</>
	)
}
export default UserList;
