import LoginForm from "../compoents/loginForm"
import { useState } from "react"

const Home = () => {
  const [permissions, setPermissions] = [{id:0, name:"read"}, {id:1}]
  const [jurisdictions , setJurisdictions] = useState([{id:0, name:"Gerente", permissions:[0,1,2]}])
  const [sersList, setUserList] = useState([{name:"Carlos", jurisdiction:0}])
  return(
    <LoginForm />
  )
}

export default Home