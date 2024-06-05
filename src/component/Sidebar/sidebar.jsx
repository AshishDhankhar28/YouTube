import Home from "../../assets/home.png";
import Shorts from "../../assets/Shorts.png";
import Subscription from "../../assets/subscription.png";
import Tseries from "../../assets/tseries.webp";
import BeastBoySubh from "../../assets/beastboysubh.jpg";
import PhysicsWallah from "../../assets/physicswallah.png";

import "./sidebar.css";

const sidebar = () => {
  return (
    <div className="main">
      <div className="sidebar-main">
        <div className="sidebar-card flex">
          <img src={Home}></img>
          <p>Home</p>
        </div>
        <div className="sidebar-card flex">
          <img className="simg" src={Shorts}></img>
          <p>Shorts</p>
        </div>
        <div className="sidebar-card flex">
          <img src={Subscription}></img>
          <p>Subscription</p>
        </div>
      </div>
      <div className="sidebar-2">
        <p>Subscriptions</p>
        <div className="scard flex">
          <img src={Tseries}></img>
          <p>T-series</p>
        </div>
        <div className="scard flex">
          <img src={BeastBoySubh}></img>
          <p>Beast Boy Subh</p>
        </div>
        <div className="scard flex">
          <img src={PhysicsWallah}></img>
          <p>Physics Wallah</p>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
