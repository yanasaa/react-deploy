import Header from "../layouts/Header";
import Advantages from "../sections/Advantages";
import Articles from "../sections/Articles";
import ContactUS from "../sections/ContactUs";
import Hero from "../sections/Hero";
import Onboarding from "../sections/Onboarding";
import Footer from "../layouts/Footer";




function Home() {
    return (
        <>
        <Header/>
        {/* <ForTestApp /> */}
        <Hero />
        <Advantages />
        <Articles />
        <Onboarding />
        <ContactUS />
        <Footer />
        </>
    )

}

export default Home;