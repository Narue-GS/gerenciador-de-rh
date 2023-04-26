import '../styles/loginForm.css'

import { useState } from 'react'
import { useUsers } from '../hooks/useUsers'
import { useCurrentUser } from '../hooks/useCurrentUser'

const LoginForm = () => {
  const { users } = useUsers()
  const { setCurrentUser } = useCurrentUser()
  const [errorState, setErrorState] = useState(false)

  const login = (outUser) => {
		users.map((user) => {
			if (user.password === outUser.password && user.email === outUser.email) {
				setCurrentUser(user)
        setErrorState(false)
				return true
			}
		})
    setErrorState(true)
	}

  return(
    <>
    <div className='body'>

    <div className='login'>
      
      <h1 className='text'>Login</h1>

          <div className='content'>
            <div className='inputbox'>
              <span>E-mail</span>
              <input className='input' id="userEmail" placeholder="Email"/>
              <span style={errorState? {"opacity": "100%"} : {}} className='field-error'>E-mail não encontrado</span>
            </div>
            <div className='inputbox'>
              <span>Senha</span>
              <input type="password" className='input' id="userPassword" placeholder="Senha"/>
              <span style={errorState? {"opacity": "100%"} : {}} className='field-error'>Senha não encontrada</span>
            </div>
              <button className='button' onClick={() =>{
                const thisUser = {
                  email: document.querySelector("input#userEmail").value, 
                  password:document.querySelector("input#userPassword").value
                }
                login(thisUser)
              }
            }>Continuar</button>  
            </div>
      </div>
    </div>
    </>
  )
}
export default LoginForm
