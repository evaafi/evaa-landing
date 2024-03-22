import { Faq } from "./parts/faq/faq";
import { Featured } from "./parts/featured/featured";
import { Footer } from "./parts/footer/footer";
import { HowItWorks } from "./parts/howitworks/howitworks";
import { Navigation } from "./parts/navigation/navigation";
import { Popular } from "./parts/popular/popular";
import { Welcome } from "./parts/welcome/welcome";
import { WhyEvaa } from "./parts/whyevaa/whyevaa";

function App() {
  return (
    <div>
      <div className="container py-1 md:py-5 p-5 max-w-full">
        <Navigation />
        <Welcome />
        <Featured />
        <Popular />
        <HowItWorks />
        <WhyEvaa />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;
