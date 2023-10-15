import React from "react";
import ReactDOM from "react-dom/client";



const Title = () => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <h1 className="logo" >Food Villa</h1>
    </a>
  );
}


const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li style={{ cursor: "pointer" }}>Home</li>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Contact Us</li>
          <li style={{ cursor: "pointer" }}>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const Maheshwari = {
  name: "Maheshwari Food",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x5xqqqpedqom4jymyzx5",
  address: "Satna, MP",
  rating: "4.2"
}

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={Maheshwari.image} alt="image" />
      <h2>{Maheshwari.name}</h2>
      <h3>{Maheshwari.address}</h3>
      <h4>{Maheshwari.rating} stars</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className="restaurant-List">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      {/* <Footer /> */}
    </React.Fragment>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);