//js code to  menuplate dome element
//     //same operation by js
//   const root= document.getElementById("root");
//   const heading = document.createElement("h1");
//   heading.innerHTML= "hello from JavaScript";
//   root.appendChild(heading);


// //react code 
// const heading=React.createElement("h2", {color:"red"}, "this is heading by react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// //nested 
// const heading=React.createElement("h2", {color:"red"}, "this is heading by react");
// const list = React.createElement("div", {id:"listHeader"},
//     [React.createElement("div", {id:"item1"}, "this is item 1"),
//         React.createElement("div", {id:"item2",style:{color:"red"}}, "this is item 2"), 

//         React.createElement("div", {id:"item3"}, "this is item 3"), 
//         React.createElement("div", {id:"item4"}, "this is item 4"), 
//      ]
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading,list]);


// const App = () => {
//   return React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       React.createElement("h1", {}, "I am an h1 tag")
//     )
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App());


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App());
// */


// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                {},
                "I am an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I am an h2 tag"
            ),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/


// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/


// creating Sibling React Elements Object
/**
 * <div id="parent" style="background: skyblue;">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

const child1 = React.createElement("div", { id: "child1" }, [
  React.createElement("h1", {}, "I am an h1 tag"),
  React.createElement("h2", {}, "I am an h2 tag"),
]);
const child2 = React.createElement("div", { id: "child2" }, [
  React.createElement("h1", {}, "I am an h1 tag"),
  React.createElement("h2", {}, "I am an h2 tag"),
]);

const parent = React.createElement(
  "div",
  {
    id: "parent",
    style: {
      background: "gray",
      color:"white"
    },
  },
  [child1, child2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);