
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import BuyAbility from "./components/BuyAbility";
import Actions from "./components/Actions";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">      
      <main className="flex-1">
        <Hero />
        <Recommendations />
        <BuyAbility />
        <Actions />
      </main>      
    </div>
  );
}
