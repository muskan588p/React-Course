import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

//reactdom takes this object and converts it to html browser. this will replace (not append) everything written inside this div id=root
//thus insteadof muskan is here, namaste react will be displayed

const jsxHeading = (
  <h1 id="heading" className="head">
    Namasate React using JSX 🚀
  </h1>
);
console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

/**
 * JSX: JavaScript XML
 * JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render) => DOM(Browser)
 *
 * JSX is a syntactic sugar for React.createElement
 * JSX is not a valid JavaScript, it needs to be transpiled using Bable to React.createElement before it can be rendered in the browser using ReactDOM
 * JSX (transpiled before it can be rendered in the browser using ReactDOM) => Parcel (Bundler) => Babel (Transpiler) => React.createElement => ReactDOM
 * JSX is optional, you can write React without JSX
 * JSX is more readable and easy to write
 * JSX is more like HTML
 * JSX is look like HTML or XML like syntax, but it's not HTML or XML. It's a syntax extension of JavaScript.
 * JSX is mixed of JavaScript and HTML like syntax that allows us to write HTML like code in React. 
 * JSX prevents cross-site injection attacks by escaping any values embedded in JSX before rendering them. 
 * 
 * Babel is a transpiler that converts JSX into React.createElement calls before it can be rendered in the browser using ReactDOM
 * Babel: JavaScript compiler that takes your modern JavaScript code (ES6) and returns code that most browsers can understand.
 */



//REACT FUNCTIONAL COMPONENT
//diff in way of writing- brackets, ;, return
//both are same just diff syntax
//use 2nd more
// 1
const headingcomp = () => {
  return <h1 className="head">Namaste React using Functional Component 🚀</h1>;
};
// 2
const headingcomp2 = () => (
  <h1 className="head">Namaste React using Functional Component 🚀</h1>
);
// const Title = () => (
//   <h1 className="head" id="heading">
//     Namaste React using JSX ------------- 🚀
//   </h1>
// );
// const HeadingComponent = () => (
//   <div id="container">
//       <Title />         
//       <h1 className="heading">Namaste React using Functional Component 🚀</h1>
//   </div>
// );

//text written inside title will come inside heading component code and both lines will appear
//COMPONENT INSIDE COMPONENT

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />); // use PASCAL CASE  //space />

const elem = <span>React Element</span>;
const number=1000;

const HeadingComponent = () => (
  <div id="container">
      {number} 
      {100+200}     
      {console.log("helloo")}   
      <h1 className="heading">Namaste React using Functional Component 🚀</h1>
  </div>
);
 //output in inspect

const Title = () => (
  <h1 className="head" >
    {elem}
    Namaste React using JSX 🚀
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />); 

//output on page
// React ElementNamaste React using JSX 🚀
// 1000300
// Namaste React using Functional Component 🚀

/**
 * React Component
 * Functional component - new way of writing component
 * Class component - old way of writing component
 * React component is a function or class that returns a React Element (JS Object)
 * React component is a reusable piece of UI
 * React component is a building block of React application
 * React component is a pure JavaScript function or class
 * React component is a function that accepts props and returns a React Element
 * React component is a function that accepts props and returns JSX
 * React component is a function that accepts props and returns React.createElement
 */