
import AboutSection from "../../components/bpo/AboutSection"
import ComplianceSection from "../../components/bpo/ComplianceSection"
import FAQSection from "../../components/bpo/FAQSection"
import HeroSection from "../../components/bpo/HeroSection"
// import Navigation from "../../components/BPO/Navigation"
import ServicesSection from "../../components/bpo/ServicesSection"
import Testimonials from "../../components/bpo/Testmonial"
import WhyChooseSection from "../../components/bpo/WhyChooseSection"
import Industries from "./IndustriesSection"
import ContactSection from "../../components/bpo/ContactSection"
import Footer from "../../components/Footer"
// import Footer from "../../components/Footer"



const BPOServices = () => {
  return (
    <div>
      {/* <Navigation/> */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <Industries />
      <ComplianceSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer/>
     
    </div>
  )
}

export default BPOServices