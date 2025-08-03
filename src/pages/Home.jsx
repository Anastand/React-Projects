import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>
        1. This project has
        <Link to="/count"> Counter App</Link>
      </h1>
    </div>
  );
}

export default Home;
