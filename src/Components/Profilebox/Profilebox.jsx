import './Profilebox.css'
import profilePic from '../../assets/images/Ellipse.png'

const Profilebox = () => {
    return (
        <>
            <div className='profile_box'>
                <div className='profile_pic'>
                    <img src={profilePic} alt='profile picture' />
                </div>
                <div className='user_name'>
                    <p>Hey! Aleem</p>
                </div>
            </div>
        </>
    );
}

export default Profilebox;