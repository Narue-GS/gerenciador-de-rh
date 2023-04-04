const Profile = (profile) => {
	if(profile.display){
		return(
			<div className="modal">
				<div className="modal-shadow"></div>
				<div className="modal-content">
					<div>
						<h1>{profile.user.name}</h1>
						<span>{profile.jurisdiction.name}</span>
					</div>
					<div>
						{profile.permissions.map((i) => {
							return <span>{i}</span>
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Profile
