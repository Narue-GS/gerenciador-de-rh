const Profile = ({jurisdiction, profile, closeProfile}) => {
	if(!profile) return null
	return(
		<div className="modal">
			<div className="modal-shadow" onClick={closeProfile}></div>
			<div className="modal-content profile">
				<div className="title">
					<h1>{profile.name}</h1>
					<span>{jurisdiction}</span>
				</div>
				<div className="permissions-box">
					{profile.permissions.map((i) => {
						return <span className="permission">{i.name}</span>
					})}
				</div>
			</div>
		</div>
	)
}

export default Profile
