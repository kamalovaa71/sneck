import Slider from "../components/Slider/Slider";
import Title from "../components/Title/Title";
import Product from "../components/Product/Product";
import { products } from "../data";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Slider></Slider> <Title></Title>
        <div className="container_prod">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
