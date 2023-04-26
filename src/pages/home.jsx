import "../styles/home.css"

import LoginForm from "../components/loginForm"
import SearchUser from "../components/searchUser"
import UserList from "../components/userList"
import Header from "../components/header"
import ModalUserEdit from "../components/modaluserEdit"
import ModalUserRegister from "../components/modalUserRegister"
import Welcome from "../components/welcome"
import Profile from "../components/profile"
import PermissionList from "../components/permissionList"
import JurisdictionList from "../components/jurisdictionList"

import { useState, useEffect } from "react"
import { useUsers } from "../hooks/useUsers"
import { useJurisdictions } from "../hooks/useJurisdictions"
import { usePermissions } from "../hooks/usePermissions"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { useProfile } from "../hooks/useprofile"

const Home = () => {
	const {users, setUsers} = useUsers()
	const {jurisdictions, setJurisdictions} = useJurisdictions()
	const {permissions, setPermissions} = usePermissions()
	const {currentUser, setCurrentUser} = useCurrentUser()
	const {profile, setProfile} = useProfile()
	
	const [selectedUser, setSelectedUser] = useState()
	const [userRegisterDisplay, setUserRegisterDisplay] = useState(false)
	const [permissionsDisplay, setPermissionsDisplay] = useState(false)
	const [jurisdictionsDisplay, setjurisdictionsDisplay] = useState(false)
	
	const login = (outUser, set) => {
		users.map((user) => {
			if (user.password === outUser.password && user.email === outUser.email) {
				setCurrentUser(user)
				return true
			}
		})
	}

	const logout = () => {
		setCurrentUser(null)
	}

	const findJurisdiction = (id) => {
		const yourJurisdiction = jurisdictions.filter(i => i.id === id)
		return yourJurisdiction[0]
	}
	
	const findPermissions = (ids) => {
		const yourPermissions = []
		const permissionsIds = permissions.map((i) => i.id)
		ids.map((id) => {
			if (permissionsIds.includes(id)) {
				yourPermissions.push(permissions[permissionsIds.indexOf(id)])
			}
		})
		return yourPermissions
	}
	const editSwitch = (profile) => {
		if (!selectedUser) {
			setSelectedUser(profile)
			setProfile(false)
		} else {
			setSelectedUser(false)
		}
	}
	// useEffect(() => {
	// 	init()
	// }, [])

	useEffect(() => {
		localStorage.setItem("currentUser", JSON.stringify(currentUser))
	}, [currentUser])

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users))
	}, [users])

	useEffect(() => {
		localStorage.setItem("permissions", JSON.stringify(permissions))
	}, [permissions])

	useEffect(() => {
		localStorage.setItem("jurisdictions", JSON.stringify(jurisdictions))
	}, [jurisdictions])

	return (
		<div className="home">
			{currentUser ?
				<div id="main">
					<Header
						currentPermissions={findJurisdiction(currentUser.jurisdiction).permissions}
						logoutFunc={logout}
						openPermissions={() => setPermissionsDisplay(true)}
						openJurisdictions={() => setjurisdictionsDisplay(true)}
						openRegister={() => setUserRegisterDisplay(true)}
						openProfile={() => setProfile(currentUser)}
					/>
					<ModalUserRegister
						display={userRegisterDisplay}
						setDisplay={setUserRegisterDisplay}
					/>
					<ModalUserEdit
						find={findJurisdiction}
						selectedUser={selectedUser}
						setProfile={setProfile}
						closeEdit={() => editSwitch(profile)}
					/>
					<Profile
						find={findJurisdiction}
						profile={profile}
						openEdit={() => editSwitch(profile)}
						/>
					<SearchUser/>
					<UserList
						openProfile={setProfile}
						canSeeUsers={findJurisdiction(currentUser.jurisdiction).permissions.includes(0)}
					/>
					<PermissionList
					 setPermissions={setPermissions}
					 display={permissionsDisplay}
					 setDisplay={setPermissionsDisplay}
					/>
					<JurisdictionList
						findPermissions={findPermissions}
						display={jurisdictionsDisplay}
						setDisplay={() => setjurisdictionsDisplay(false)}
					/>
				</div>
				: <>
					<Welcome />
					<LoginForm loginFunc={login} />
				</>
			}
		</div>
	)
}

export default Home
