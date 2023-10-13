import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
  <h1 key="hllo">Hello, world!</h1>
);

const Title = () => {
  return (
  <div>
    <h2>I am from another component</h2>
  </div>
  );
}

// Component Compozation Component inside a component

const HeaderComponent = () => {
  return (
    <div>
      {Heading}
    <Title/>
      <h1>Header functional Component</h1>
      <h2>This is h2 element</h2>

    </div>
  );
}
// const HeaderComponent2 = function () {
//   <div>
//     <h1>Header functional Component</h1>
//     <h2>This is h2 element</h2>
//   </div>
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(Heading);
root.render(<HeaderComponent/>);