import React from "react";
import ReactDOM from "react-dom/client";



const Title = () => {
  return (
    <a href="/">
    <h1 className="logo">Food Villa</h1>
    </a>
  );
}


const HeaderComponent = () => {
  return (
    <div className="header">
    <Title/>
    <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
  );
}

// const AppLayout = () => {
//   return (

//       <HeaderComponent/>
//       <Body/>
//       <Footer />

//   );
// }


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent/>);