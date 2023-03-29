import '../styles/loginform.css'

const LoginForm = ({loginFunc}) => {
  return(
    <>
    <div className='body'>

    <div className='login'>
      
      <h1 className='text'>Login</h1>

          <div>
            <div>
              <span>E-mail</span>
              <input id="userEmail" placeholder="Email"/>
            </div>
            <div>
              <span>Senha</span>
              <input id="userPassword" placeholder="Senha"/>
            </div>
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
