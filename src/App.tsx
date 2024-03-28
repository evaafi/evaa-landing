import { Faq } from "./parts/faq/faq";
import { Featured } from "./parts/featured/featured";
import { Footer } from "./parts/footer/footer";
import { HowItWorks } from "./parts/howitworks/howitworks";
import { Header } from "./parts/header/header";
import { Tokens } from "./parts/tokens/tokens";
import { Welcome } from "./parts/welcome/welcome";
import { WhyEvaa } from "./parts/whyevaa/whyevaa";

function App() {
  return (
    <div>
      <div className="container py-1 md:py-5 p-5 max-w-full">
        <Header />
        <Welcome />
        <Featured />
        <Tokens />
        
        <HowItWorks />
        <WhyEvaa />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;
