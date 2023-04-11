import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
    //console.log("its working so far")
    return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          {/* <div className="relative z-0"> */}
          
          <About />
          <Experience />
          <Tech />
          <div class="invisible md:visible lg:visible">
          <StarsCanvas />
          </div>

          {/* </div> */}
          
          <Works />
          {/* <div className="relative z-0"> */}
          <div class="invisible md:visible lg:visible">
            <Contact />
          </div>
            {/* <StarsCanvas /> */}
          {/* </div> */}
        </div>
      </BrowserRouter>
    )
}

export default App
