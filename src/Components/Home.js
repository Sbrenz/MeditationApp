import React from "react";
import { Link } from "react-router-dom";

//import Header
import Header from "./Header";

const Home = () => {
  return (
    <>
      <main>
        <div className="Home">
          <div className="titleHome">
            <Header />
          </div>
          <div className="btnBoxHome linkBox">
            <div>
              <Link to="/Timer">
                <button className="btn">Rain</button>
              </Link>
            </div>
            <h3>Or</h3>
            <div>
              <Link to="/TimerTwo">
                <button className="btn">Wind</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
