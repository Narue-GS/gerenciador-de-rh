import LoginForm from "../compoents/loginForm"
import { useState } from "react"

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

	const login = (outUser) => {
		usersList.map((user) => { 
			if(user.password === outUser.password && user.email === outUser.email){
				localStorage.setItem("currentUser", JSON.stringify(user))
				setCurrentUser(user)
				alert("logado com sucesso")
				return true
			}
		})
	}
	const logout = () =>{
		localStorage.removeItem("currentUser")
		setCurrentUser(null)
	}
  
  const [jurisdictions , setJurisdictions] = useState([{id:0, name:"Gerente", permissions:[0,1,2,3,5]}])
  const [usersList, setUserList] = useState([{id:0, name:"Carlos", email:"carlos@gmail.com", password:"wE4&34e$5$Ix", age:null, jurisdiction:0}])
	return(
		<div className="home">
			{currentUser? <h1 onClick={logout}>{currentUser.name}</h1> : <LoginForm loginFunc={login}/>}
  		</div>
	)
}

export default Home
