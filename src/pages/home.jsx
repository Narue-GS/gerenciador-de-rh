import LoginForm from "../components/loginForm"
import UserList from "../components/userList"
import Welcome from "../components/welcome"
import { useState, useEffect } from "react"

const Home = () => {
  const [permissions, setPermissions] = useState([
    {id:0, name:"Ver usuários"},
    {id:1, name:"Contratar"},
    {id:2, name:"Demitir"},
    {id:3, name:"Modificar usuários"},
		{id:4, name:"Cadastrar, modificar e deletar alçadas"},
		{id:5, name:"Cadastrar, modificar e deletar permições"}
  ])
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))
	const [jurisdictions , setJurisdictions] = useState([
		{id:0, name:"Gerente", permissions:[0,1,2,3,5]},
		{id:1, name:"Desenvolvedor", permissions:[0]},
	])
	const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")))
	const init = () => {
		if (!users) {
			setUsers([{age: null, email: "carlos@gmail.com", id: 0, jurisdiction:0, name:"Carlos", password:"wE4&34e$5$Ix"}])
		} else {
			const admin = users.filter((i)=> i.id === 0).length === 0
			if(admin) setUsers(users.push({age: null, email: "carlos@gmail.com", id: 0, jurisdiction:0, name:"Carlos", password:"wE4&34e$5$Ix"}))
		}
	}
	init()

	const login = (outUser) => {
		users.map((user) => { 
			if(user.password === outUser.password && user.email === outUser.email){
				setCurrentUser(user)
				alert("logado com sucesso")
				return true
			}
		})
	}

	const logout = () =>{
		setCurrentUser(null)
	}

	const findJurisdiction = (id) => {
    const yourJurisdiction = jurisdictions.filter( i => i.id === id)
    return yourJurisdiction[0]
  }

  const findPermissions = (ids) => {
    let yourPermissions = []
    for(let i=0; i<permissions.length;i++){
      if(ids[i] === permissions[i]) console.log(ids[i])
    }
  }

	let currentJurisdiction
	
	if (currentUser) currentJurisdiction = findJurisdiction(currentUser.jurisdiction)
	
	useEffect(()=>{	
		localStorage.setItem("currentUser", JSON.stringify(currentUser))
	},[currentUser])

	useEffect(()=>{ 
     localStorage.setItem("users", JSON.stringify(users))
   },[users])

	return(
		<div className="home">
			{currentUser?
				<>
					<h1 onClick={logout}>{currentUser.name} - {currentJurisdiction.name}</h1>
					<UserList find={findJurisdiction} currentUser={currentUser} users={users} setUsers={setUsers}/>
				</>
				: <LoginForm loginFunc={login}/>
			}
  	</div>
	)
}

export default Home
