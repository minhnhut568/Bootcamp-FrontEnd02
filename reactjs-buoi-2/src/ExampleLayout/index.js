// rcc tạo component dưới đạng class
// rfc tạo component dưới đạng function
/**
 * cách chia component:
 *      - component phải tái sử dụng được
 *      - dể quản lý src code nhất có thể
 */
import React, { Component } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";

export default class ExampleLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
