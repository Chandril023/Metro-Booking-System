
import Navbar from "./navbar";
import Contact from "./contact";
import Search from "./search";
export default function Home({ onLoginClick, onSignupClick }){
 return (<>
 <Navbar onLoginClick={onLoginClick} onSignupClick={onSignupClick}/>
 <Search/>
 <Contact />
 </>
 );
}