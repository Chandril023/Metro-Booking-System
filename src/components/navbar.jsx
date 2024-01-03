import {FaTrain, FaRupeeSign,FaBuilding,FaRoute,FaPortrait,FaBookOpen,FaHistory} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Navbar({ onLoginClick, onSignupClick }){
  const handleLoginClick = () => {
    console.log('Clicked on Login');
    onLoginClick();
  };
  const handleSignupClick =()=>{
    console.log('Clicked on Signup');
    onSignupClick();
  }
  
    return(<div className="parent">
    <div className="nav1-layout">
  <div className="Logo">
  <img className="logo1" src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png" alt="indian-railways logo"/>
  <img className="logo2" src="https://mtp.indianrailways.gov.in/template/site1/images/kmlogo.jpg" alt="metro logo"/>
  </div>
  <div className="nav1" id="blur">
  <ul class="menu-bar">
  <li ><Link to="/">Home</Link></li>
  <li onClick={handleLoginClick}>Login</li>
  <li onClick={handleSignupClick}>Signup</li>
  <li>Staff</li>
  <li>Notice</li>
  <li>Contact Us</li>
  <li>More</li>
  </ul>
  </div>
  </div>
  <div className="nav2">
  <ul class="explore-bar">
  <li>
  <FaTrain className='icon' size={20} color="dark-blue" />
   <div className='icon-text'>
    Trains
    </div>
    </li>
  <li>
  <FaRupeeSign className='icon' size={20}  /> <div className='icon-text'>
    Recharge
    </div></li>
  <li>
  <FaBuilding className='icon' size={20} color="dark-blue" /> <div className='icon-text'>
    Stations
    </div></li>
  <li><FaRoute className='icon' size={20} color="dark-blue" /> <div className='icon-text'>
    Routes
    </div></li>
  <li><FaPortrait className='icon' size={20} color="dark-blue" /> <div className='icon-text'>
    History
    </div></li>
  <li><FaBookOpen className='icon' size={20} color="dark-blue" /> <div className='icon-text'>
    Regulations
    </div></li>
  <li><FaHistory className='icon' size={20} color="dark-blue" /> <div className='icon-text'>
    Schedule
    </div></li>
  </ul>
  
  </div>
  </div>);
}
