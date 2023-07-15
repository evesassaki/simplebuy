import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Product from "../../components/products/Product";

const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <>
      <Slider />
      <Product />
    </>
  );
};

export default Home;
