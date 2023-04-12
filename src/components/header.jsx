import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';

const Header = ({currentPermissions, logoutFunc, openPermissions, openModal, openProfile}) => {
  const dropOptions = () =>{
    let options = document.querySelector(".options").style
		options.display != "flex" ?	options.display = "flex" : options.display = "none"
  }
	const hasPermissions = currentPermissions.includes(3) || currentPermissions.includes(1) || currentPermissions.includes(3)
  return(
    <header id="home-header">
			<img src="https://i.ibb.co/51vxRfM/Design-sem-nome-removebg-preview-1.png" alt="" />
      <nav>
      	{currentPermissions.includes(1) ? <button onClick={() => openModal(true)}>Contratar</button> : <></>}
        {currentPermissions.includes(2) ? <button>Alçadas</button> : <></>}
        {currentPermissions.includes(3) ? <button onClick={openPermissions}>Permissões</button> : <></>}
      </nav>
			<div id="user-menu">
				<AiOutlineUser onClick={openProfile} className="user-menu-option" color="white" font-size="3vw" fontWeight="900"/>
				<IoMdLogOut className="user-menu-option" color="white" font-size="3vw" onClick={logoutFunc}/>
			</div>
    </header>
  )
}

export default Header;
