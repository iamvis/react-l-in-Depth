import { LOGO_URL } from "../utils/constants";



const Header= ()=>{
  return (
<>
    <div className="header">
    <img src={LOGO_URL} style={{height:100, widows:100}}></img>
    <div className="header-tab">
        <ul>
            <li>about</li>
            <li>service</li>
            <li>carrier</li>
            <li>contact</li>
        </ul>

    </div>

           </div>
           <div style={{display:"flex"}}>
           <input className="search-box" />
            <h2 style={{marginLeft:20, border:"orange"}} >Search</h2>
           </div>
             
</>
  )
}
export default Header;