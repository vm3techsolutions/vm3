
import AboutUs from "./home/AboutUs";
import Counter from "./home/Counter";
import Form from "./home/Form";
import FromBlogs from "./home/FromBlogs";
import HomeBanner from "./home/HomeBanner";
import OurServices from "./home/OurServices";
import VerticleServe from "./home/VerticleServe";
import WhyChooseUs from "./home/WhyChooseUs";

export default function Home() {
  return (
   <div>
    <HomeBanner/>
    <OurServices/>
    <AboutUs/>
    <Counter/>
    <WhyChooseUs/>
    <VerticleServe/>
    <Form/>
    <FromBlogs/>
   </div>  );
}
