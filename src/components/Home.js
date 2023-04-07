import React from "react";
import BannerSlider from "./BannerSlider";
import OurClients from "./OurClients";
import ItemCard from "./ItemCard";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <BannerSlider></BannerSlider>
      <OurClients></OurClients>
      <ItemCard></ItemCard>
      <Blog></Blog>
    </>
  );
};

export default Home;
