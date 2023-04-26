import '../styles/welcome.css'
import {GiCircle} from 'react-icons/gi'


const Welcome = () => {
    return(
    <div id='welcome'>
        
            <div className='circle1'><i className="fa-solid fa-circle"></i></div>

            <div className='circle5'>
                <GiCircle color='#4e5a9e' fontSize="17vw"/>
            </div>

            <div className='circle6'>
                <GiCircle color='#4e5a9e' fontSize="20vw"/>
            </div>
            
            <div id="circle2"></div>

                <div id="circle3"></div>
                
                <hr className='line top1'/>

                <hr className='line top2'/>

                <hr className='line bottom1'/>

                <hr className='line bottom2'/>

                <div className='textprincipal'>
                    <h1 className='texth1'>BEM-VINDO</h1>
                </div>

                <div className='textp'>
                    <p>By: Logical Thinking</p>
                </div>
    </div>
    )
}

export default Welcome