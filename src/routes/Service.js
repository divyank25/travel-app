import AboutImg from "../assest/11.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service "
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
