import { Faq } from "./parts/faq/faq";
import { Featured } from "./parts/featured/featured";
import { Footer } from "./parts/footer/footer";
import { HowItWorks } from "./parts/howitworks/howitworks";
import { Popular } from "./parts/popular/popular";
import { Welcome } from "./parts/welcome/welcome";
import { WhyEvaa } from "./parts/whyevaa/whyevaa";

function App() {
  return (
    <div>
      <div className="container p-6 max-w-full">
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
