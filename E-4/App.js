import React from "react";
import ReactDOM from "react-dom/client"

/*
header
 -logo
 -links

container
-search
-cardContainer
 -card
  -photo links time place rating

footer

*/ 
const Header= ()=>{
  return (
<>
    <div className="header">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11nXBKvjZugyl7fQwRxYAXZJ4-zyi0060pg&s" style={{height:100, widows:100}}></img>
    <div className="header-tab">
        <ul>
            <li>about</li>
            <li>service</li>
            <li>carrier</li>
            <li>contact</li>
        </ul>

    </div>

           </div>
             <h2 style={{padding:20}}>Search</h2>
</>
  )
}
//rest-container
const RestoCart=()=>{
    return (
    <>
      {/* //<input >Search </input> */}
    
       <div className="Rest-Container" >
         <div className="card">
         <img src="https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg?fm=webp&fit=fill" style={{height:300, width:200}}>
         </img>
         <div className="info">
            <h4>kfc</h4>
         <h4>time-30mnt</h4>
         <h4>location: indore</h4>
         <h4>rating - 4.3</h4>
         </div>
         </div>
       </div>
    </>
    )
}
const App=()=>{
    return <div>
        <Header/>
        <div className="rs-c" >
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>
        <RestoCart/>

        </div>

    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)