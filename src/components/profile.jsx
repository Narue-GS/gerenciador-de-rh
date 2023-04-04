const CurrentProfile = (display, user, find, jurisdictions, permissions) => {
	if(display){
		return(
			<div className="modal">
				<div className="modal-shadow"></div>
				<div className="modal-content">
					<div>
						<h1>{user.name}</h1>
						<span>{find(user.jurisdiction)}</span>
					</div>
					<div>
						{permissions.map((i) => {
							return <span>{permissions}</span>
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default CurrentProfile
