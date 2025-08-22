import Reviews from "./components/Reviews";
import Slider from "./components/Slider";
import WhyTickTock from "./components/WhyTickTock";


export default function Home() {
  return (
    <section className="max-w-[1536px] mx-auto w-11/12">
      <Slider></Slider>
      <WhyTickTock/>
      <Reviews/>
    </section>
  );
}
