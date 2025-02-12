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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

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
