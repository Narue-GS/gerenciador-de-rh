import '../styles/loginform.css'

const LoginForm = () => {
  return(
    <>
    <h1>Login</h1>
    
      <div className='corpo'>
        <form action="" method="post">
          <p>E-mail</p>
          <input placeholder="Usuário"/>
          <p>Senha</p>
          <input placeholder="Senha"/>
        </form>
      </div>
    </>
  )
}
export default LoginForm
