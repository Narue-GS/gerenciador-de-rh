import '../styles/loginForm.css'

const LoginForm = ({loginFunc}) => {
  return(
    <>
    <div className='body'>

    <div className='login'>
      
      <h1 className='text'>Login</h1>

          <div className='content'>
            <div className='inputbox'>
              <span>E-mail</span>
              <input className='input' id="userEmail" placeholder="Email"/>
            </div>
            <div className='inputbox'>
              <span>Senha</span>
              <input className='input' id="userPassword" placeholder="Senha"/>
            </div>
          
              <button className='button' onClick={() =>{
                const thisUser = {
                  email: document.querySelector("input#userEmail").value, 
                  password:document.querySelector("input#userPassword").value
                }
                loginFunc(thisUser)
              }
            
            }>Continuar</button>  
            </div>
      </div>
    </div>
    </>
  )
}
export default LoginForm
