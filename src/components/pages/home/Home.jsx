import Advantages from "./ui/advantages/Advantages";
import Articles from "./ui/articles/Articles";
import ContactUS from "./ui/contactUs/ContactUs";
import Hero from "./ui/hero/Hero";
import Onboarding from "./ui/onboarding/Onboarding";

function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Articles />
      <Onboarding />
      <ContactUS />
    </>
  );
}

export default Home;
