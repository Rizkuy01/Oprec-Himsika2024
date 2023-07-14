import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HeadlineCards from "./component/HeadlineCards";
import Food from "./component/Food";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}

export default App;
