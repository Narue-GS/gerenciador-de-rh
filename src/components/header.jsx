import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBars } from "react-icons/ai";

const Header = ({currentPermissions, logoutFunc, openPermissions, openJurisdictions, openRegister, openProfile}) => {
  const showResponsiveHeader = () => {
    const nav = document.querySelector("#header-nav")
    nav.style.display === "none" ? nav.style.display = "flex" : nav.style.display = "none"
  }
  
  return(
    <header id="home-header">
			<img src="https://i.ibb.co/51vxRfM/Design-sem-nome-removebg-preview-1.png" alt="" />
      <AiOutlineBars onClick={showResponsiveHeader} className="responsive-more"/>
      <nav id="header-nav">
      	{currentPermissions.includes(1) ? <button onClick={openRegister}>Contratar</button> : <></>}
        {currentPermissions.includes(4) ? <button onClick={openJurisdictions}>Alçadas</button> : <></>}
        {currentPermissions.includes(5) ? <button onClick={openPermissions}>Permissões</button> : <></>}
      </nav>
			<div id="user-menu">
				<AiOutlineUser onClick={openProfile} className="clickable-icon"/>
				<IoMdLogOut onClick={logoutFunc} className="clickable-icon"/>
			</div>
    </header>
  )
}

export default Header;
