import Clients from "./pages/clients/Clients"
import Count from "./pages/counter/Count"
import FAQ from "./pages/faq/FAQ"
import Footer from "./pages/footer/Footer"
import Headers from "./pages/headers/Headers"
import Service from "./pages/services/Service"
import StayUpdate from "./pages/stayupdate/StayUpdate"
import Testimonials from "./pages/testimonials/Testimonials"
import Welcome from "./pages/welcomepage/welcome"
import Why from "./pages/why/Why"

function App() {


  return (
    <>
    <Headers />
    <Welcome />
    <Clients />
    <Service />
    <Why />
    <Testimonials />
    <FAQ />
    <Count />
    <StayUpdate />
    <Footer />
    </>
  )
}

export default App
