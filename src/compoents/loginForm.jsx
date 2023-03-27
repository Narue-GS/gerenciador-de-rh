import '../styles/loginform.css'

const LoginForm = ({loginFunc}) => {
  return(
    <>
    <div className='corpo'>

    <div className='login'>
      
      <h1 className='texto'>Login</h1>

          <div>
            <h1>E-mail</h1>
            <input id="userEmail" placeholder="Email"/>
          </div>

          <div>
            <h1>Senha</h1>
            <input id="userPassword" placeholder="Senha"/>
          </div>

              <button onClick={() =>{
                const thisUser = {
                  email: document.querySelector("input#userEmail").value, 
                  password:document.querySelector("input#userPassword").value
                }
                loginFunc(thisUser)
              }
            }>Continuar</button>
      </div>
    </div>
    </>
  )
}
export default LoginForm
