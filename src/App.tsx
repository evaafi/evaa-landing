import { Featured } from "./parts/featured/featured";
import { HowItWorks } from "./parts/howitworks/howitworks";
import { Popular } from "./parts/popular/popular";
import { Welcome } from "./parts/welcome/welcome";
import { WhyEvaa } from "./parts/whyevaa/whyevaa";

function App() {
  return (
    <div className="container p-6 max-w-full">
      <div className="relative">
        <Welcome />
        <Featured />
        <Popular />
        <HowItWorks />
        <WhyEvaa />
      </div>
    </div>
  );
}

export default App;
