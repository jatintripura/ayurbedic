import About from "./component/about/About";
import Customer from "./component/customer/Customer";
import Footer from "./component/footer/Footer";
import Nav from "./component/navbar/Nav";
import Product from "./component/product/Product";
import Products from "./component/products/Products";
import Subscribe from "./component/subscribe/Subscribe";
function App() {
  return (
    <>
      <Nav />
      <Product />
      <Products />
      <About />
      <Customer />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
