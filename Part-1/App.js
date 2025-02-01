/*
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

//if you want to make 2 div under parent then add both child in array
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, 
    [                                                   //to add siblings put the react object in array[]
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
  ]);
  //JSX
  console.log(parent); // object
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);  