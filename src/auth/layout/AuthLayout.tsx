
import DisclaimerModal from "../../pages/components/DisclaimerModal";
import Services from "../../pages/components/Services";
import Stats from "../../pages/components/Stats";
import ScamWarning from "../../pages/components/ScamWarning";
import Header from "../../pages/components/Header";
import Footer from "../../pages/components/Footer";
import Hero from "../../pages/components/Hero";
import MotivationalSection from "../../pages/components/MotivationalSection";


export const AuthLayout = ()=> {

    return(
      <div className="min-h-screen w-full
        bg-gradient-to-br from-blue-50 to-white
        dark:from-gray-900 dark:to-gray-800
        transition-colors
      ">
      <DisclaimerModal />
      <Header />
      <Hero />
      <Stats />
      <MotivationalSection />
      <Services />
      <ScamWarning />
      <Footer />
    </div>
    )
}