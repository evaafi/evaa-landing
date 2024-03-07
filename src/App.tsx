import { Button } from "./components/ui/button";
import { Logo } from "./components/logo";

function App() {

  return (
    <div className="container">
      <Logo />
      <h1 className="font-display text-5xl">
        Lend and borrow at your fingertips
      </h1>
      <p>
        Deposit assets, select a loan amount, and enjoy transparent,
        decentralized lending
      </p>
      <div className="flex flex-col gap-4">
        
        <Button size="lg">Explore Web App</Button>
        <Button size="lg" variant="secondary">
          Open in Telegram
        </Button>
      </div>
      
    </div>
  );
}

export default App;
