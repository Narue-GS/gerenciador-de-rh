import '../styles/welcome.css'
import {GiCircle} from 'react-icons/gi'
import {GiPlainCircle} from 'react-icons/gi'


const Welcome = () => {
    return(
    <>
        
            <div className='circle1'><i class="fa-solid fa-circle"></i></div>
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

    </>
    )
}

export default Welcome