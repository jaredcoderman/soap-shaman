import Image from "next/image";
import Header from "./components/Header";
import Product from "./components/Product";
import TagLine from "./components/TagLine";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function Home() {
  return (
    <div>
      <CallToAction />
      <TagLine />
      <Product />
      <Quote />
    </div>
  );
}

export default Home;
