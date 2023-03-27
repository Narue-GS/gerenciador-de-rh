import '../styles/loginform.css'

const LoginForm = ({loginFunc}) => {
  return(
    <>
    <div className='corpo'>

      <h1 className='texto'>Login</h1>
      
        <div className='login'>
            <h1>E-mail</h1>
            <input id="userEmail" placeholder="Email"/>
            <h1>Senha</h1>
            <input id="userPassword" placeholder="Senha"/>
                <button className='botão' onClick={() =>{
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
