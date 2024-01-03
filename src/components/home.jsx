
import Navbar from "./navbar";

import Search from "./search";
export default function Home({ onLoginClick, onSignupClick }){
 return (<>
 <Navbar onLoginClick={onLoginClick} onSignupClick={onSignupClick}/>
 <Search/>
 </>
 );
}