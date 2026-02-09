import React from "react";
import ReactDOM from "react-dom/client";

// //React.createElement => gives objec  to browser and it will convver into js element
// const heading = React.createElement("h1", {id:"p1"}, "this is foundation of react");

// //jsx=> babel transpiled it to React.createElement =. ReactElement--> js Object => HTML ELEMENT(render);
// const jsxHeading=<h1>This element 
//     from JSX</h1>
// console.log(heading);
// console.log(jsxHeading);

// React Element
const titleElement = <div>This is title Element from react Elemnt throw jsx</div>
// React Componnets
//1 Function component 
const FunctionComponent = ()=>(
 <h2>this is  raectComponent form React component </h2>
)

// components composition
const ComponentComposed =()=>{
    return (<>
              {/* {titleElement()} */}
      {/* <titleElement></titleElement> */}
        <FunctionComponent/>
        <div>this is from composed and function</div>
            </>
    )
}
//2 class babsed component


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentComposed/>);