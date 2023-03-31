import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
const Header = ({permissions, logoutFunc, openModal}) => {
  const dropOptions = () =>{
    let options = document.querySelector(".options").style
		options.display != "flex" ?	options.display = "flex" : options.display = "none"
  }
	const hasPermissions = permissions.includes(3) || permissions.includes(1) || permissions.includes(3)
  return(
    <header id="home-header">
			{hasPermissions?
				<div id="home-more" onClick={dropOptions}>
       		<GoThreeBars color="white" fontSize="clamp(0.5rem, 0.75vw + 0.75em, 3em)"/>
      	</div>
				: <></>
			}
			<div id="user-menu">
				<FaUserCircle color="white" font-size="3vw"/>
				<IoMdLogOut color="white" font-size="3vw" onClick={logoutFunc}/>
			</div>
      <div className="options drop-header">
      	{permissions.includes(1) ? <button onClick={() => openModal(true)}>Contratar</button> : <></>}
        {permissions.includes(2) ? <button>Alçadas</button> : <></>}
        {permissions.includes(3) ? <button>Permissões</button> : <></>}
      </div>
    </header>
  )
}

export default Header;
