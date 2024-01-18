import Image from "next/image";
import Header from "./components/Header.tsx";
import Product from "./components/Product.tsx";
import TagLine from "./components/TagLine.tsx";
import Quote from "./components/Quote.tsx";
import Footer from "./components/Footer.tsx";
import CallToAction from "./components/CallToAction.tsx";

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
