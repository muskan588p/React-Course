// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

// //reactdom takes this object and converts it to html browser. this will replace (not append) everything written inside this div id=root
// //thus insteadof muskan is here, namaste react will be displayed

// const jsxHeading = (
//   <h1 id="heading" className="head">
//     Namasate React using JSX 🚀
//   </h1>
// );
// console.log(jsxHeading);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(jsxHeading);


// //REACT FUNCTIONAL COMPONENT
// //diff in way of writing- brackets, ;, return
// //both are same just diff syntax
// //use 2nd more
// // 1
// const headingcomp = () => {
//   return <h1 className="head">Namaste React using Functional Component 🚀</h1>;
// };
// // 2
// const headingcomp2 = () => (
//   <h1 className="head">Namaste React using Functional Component 🚀</h1>
// );
// // const Title = () => (
// //   <h1 className="head" id="heading">
// //     Namaste React using JSX ------------- 🚀
// //   </h1>
// // );
// // const HeadingComponent = () => (
// //   <div id="container">
// //       <Title />         
// //       <h1 className="heading">Namaste React using Functional Component 🚀</h1>
// //   </div>
// // );

// //text written inside title will come inside heading component code and both lines will appear
// //COMPONENT INSIDE COMPONENT

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<HeadingComponent />); // use PASCAL CASE  //space />

// const elem = <span>React Element</span>;
// const number=1000;

// const HeadingComponent = () => (
//   <div id="container">
//       {number} 
//       {100+200}     
//       {console.log("helloo")}   
//       <h1 className="heading">Namaste React using Functional Component 🚀</h1>
//   </div>
// );
//  //output in inspect

// const Title = () => (
//   <h1 className="head" >
//     {elem}
//     Namaste React using JSX 🚀
//     <HeadingComponent />
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Title />); 



