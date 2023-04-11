import "../styles/home.css"

import LoginForm from "../components/loginForm"
import UserList from "../components/userList"
import Header from "../components/header"
import ModalUserEdit from "../components/modaluserEdit"
import ModalUserRegister from "../components/modalUserRegister"
import Welcome from "../components/welcome"
import Profile from "../components/profile"

import { useState, useEffect } from "react"

const Home = () => {
	const [permissions, setPermissions] = useState([
		{ id: 0, name: "Ver usuários" },
		{ id: 1, name: "Contratar" },
		{ id: 2, name: "Demitir" },
		{ id: 3, name: "Modificar usuários" },
		{ id: 4, name: "Cadastrar, modificar e deletar alçadas" },
		{ id: 5, name: "Cadastrar, modificar e deletar permições" }
	])

	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))
	const [profile, setProfile] = useState()
	const [selectedUser, setSelectedUser] = useState()
	const [jurisdictions, setJurisdictions] = useState([
		{ id: 0, name: "Gerente", permissions: [0, 1, 2, 3, 4, 5] },
		{ id: 1, name: "Desenvolvedor", permissions: [0] },
	])

	const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")))
	const [userRegisterDisplay, setUserRegisterDisplay] = useState(false)
	const init = () => {
		if (!users) {
			setUsers([{ id: 0, name: "Carlos", birth: null, email: "carlos@gmail.com", password: "wE4&34e$5$Ix", jurisdiction: 0 }])
		} else {
			const admin = users.filter((i) => i.jurisdiction === 0).length === 0
			if (admin) setUsers(users.concat({ id: 0, name: "Carlos", birth: null, email: "carlos@gmail.com", password: "wE4&34e$5$Ix", jurisdiction: 0 }))
		}
	}

	const login = (outUser) => {
		users.map((user) => {
			if (user.password === outUser.password && user.email === outUser.email) {
				setCurrentUser(user)
				alert("logado com sucesso")
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
	const openProfile = (profile) => {
		profile.display = true
		profile.permissions = findPermissions(findJurisdiction(profile.jurisdiction).permissions)
		setProfile(profile);
	}
	const editSwitch = (profile) => {
		if (!selectedUser) {
			setProfile(false)
			setSelectedUser(profile)
		} else {
			setSelectedUser(false)
		}
	}
	useEffect(() => {
		init()
	}, [])

	useEffect(() => {
		localStorage.setItem("currentUser", JSON.stringify(currentUser))
	}, [currentUser])

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users))
	}, [users])

	return (
		<div className="home">
			{currentUser ?
				<div id="main">
					<Header
						currentPermissions={findJurisdiction(currentUser.jurisdiction).permissions}
						logoutFunc={logout}
						openModal={setUserRegisterDisplay}
						openProfile={() => openProfile(currentUser)}
					/>
					<ModalUserRegister
						users={users}
						setUsers={setUsers}
						jurisdictions={jurisdictions}
						display={userRegisterDisplay}
						setDisplay={setUserRegisterDisplay}
					/>
					<ModalUserEdit
						users={users}
						find={findJurisdiction}
						setUsers={setUsers}
						selectedUser={selectedUser}
						currentuser={currentUser}
						setCurrentUser={setCurrentUser}
						setProfile={setProfile}
						closeEdit={() => editSwitch(profile)}
					/>
					<Profile
						find={findJurisdiction}
						profile={profile}
						openEdit={() => editSwitch(profile)}
						closeProfile={() => {
							setProfile(false)
						}}
					/>
					<UserList
						openProfile={openProfile}
						find={findJurisdiction}
						currentUser={currentUser}
						canSeeUsers={findJurisdiction(currentUser.jurisdiction).permissions.includes(0)}
						users={users} setUsers={setUsers}
						jurisdictions={jurisdictions}
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
