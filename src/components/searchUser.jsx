import "../styles/searchUser.css"

import { useState } from "react"
import { useUsers } from "../hooks/useUsers"
import { useProfile } from "../hooks/useprofile"

import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"

const SearchUser = () => {
  const {users} = useUsers()
  const { setProfile } = useProfile()
  const [searchText, setSearchText] = useState("")
  const [display, setDisplay] = useState(false)
  
  const hendleSearch = (e) => {
    setSearchText(e.target.value)
  }
  return(
    <div >
      <div id="search">
        <input  onFocus={() => setDisplay(true)} onChange={hendleSearch} type="text" id="search-input"/>
        <AiOutlineSearch  id="search-icon"/>
      </div>
      {display?
        <div id="search-list">
          {users.map((user) => {
            if(searchText.length && user.name.slice(0, searchText.length).toUpperCase() === searchText.toUpperCase() ){
              return(
                <div onClick={() => {setProfile(user); setDisplay(false)}} 
                  id='user-card' 
                  className="seach-card" 
                  key={user.id}
                >
                  <AiOutlineUser color='white' fontSize="3vw"/>
                  <span>{user.name}</span>
                </div>
              )
            }
            
            return <></>
          })}
        </div>
      : <></>
      }
      
    </div>
  )
}

export default SearchUser