import '../styles/loginform.css'

const LoginForm = ({loginFunc}) => {
  return(
    <>
    <h1>Login</h1>
    
      <div className='corpo'>
          <p>E-mail</p>
          <input id="userEmail" placeholder="Email"/>
          <p>Senha</p>
          <input id="userPassword" placeholder="Senha"/>
					<button onClick={() =>{
						const thisUser = {
							email: document.querySelector("input#userEmail").value, 
							password:document.querySelector("input#userPassword").value
						}
						loginFunc(thisUser)
					}
				}>Continuar</button>
      </div>
    </>
  )
}
export default LoginForm
