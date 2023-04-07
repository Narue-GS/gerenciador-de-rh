import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';

const Header = ({currentPermissions, logoutFunc, openModal, openProfile}) => {
  const dropOptions = () =>{
    let options = document.querySelector(".options").style
		options.display != "flex" ?	options.display = "flex" : options.display = "none"
  }
	const hasPermissions = currentPermissions.includes(3) || currentPermissions.includes(1) || currentPermissions.includes(3)
  return(
    <header id="home-header">
			{hasPermissions?
				<div id="home-more" onClick={dropOptions}>
       		<GoThreeBars color="white" fontSize="clamp(0.5rem, 0.75vw + 0.75em, 3em)"/>
      	</div>
				: <></>
			}
			<div id="user-menu">
				<AiOutlineUser onClick={openProfile} className="user-menu-option" color="white" font-size="3vw" fontWeight="900"/>
				<IoMdLogOut className="user-menu-option" color="white" font-size="3vw" onClick={logoutFunc}/>
			</div>
      <div className="options drop-header">
      	{currentPermissions.includes(1) ? <button onClick={() => openModal(true)}>Contratar</button> : <></>}
        {currentPermissions.includes(2) ? <button>Alçadas</button> : <></>}
        {currentPermissions.includes(3) ? <button>Permissões</button> : <></>}
      </div>
    </header>
  )
}

export default Header;
