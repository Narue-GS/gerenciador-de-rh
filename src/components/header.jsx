import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';

const Header = ({currentPermissions, logoutFunc, openPermissions, openJurisdictions, openRegister, openProfile}) => {
  
  return(
    <header id="home-header">
			<img src="https://i.ibb.co/51vxRfM/Design-sem-nome-removebg-preview-1.png" alt="" />
      <nav>
      	{currentPermissions.includes(1) ? <button onClick={openRegister}>Contratar</button> : <></>}
        {currentPermissions.includes(4) ? <button onClick={openJurisdictions}>Alçadas</button> : <></>}
        {currentPermissions.includes(5) ? <button onClick={openPermissions}>Permissões</button> : <></>}
      </nav>
			<div id="user-menu">
				<AiOutlineUser onClick={openProfile} className="user-menu-option" color="white" fontSize="3vw" fontWeight="900"/>
				<IoMdLogOut className="user-menu-option" color="white" fontSize="3vw" onClick={logoutFunc}/>
			</div>
    </header>
  )
}

export default Header;
