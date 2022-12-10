import * as Comps from "./components/index";
// import styles from "./style";

function App() {
  return (
    <div className={`App w-full mx-auto text-white py-1 bg-primary h-full`}>
      <Comps.Navbar />
      <Comps.Mainsection />
      <Comps.Stats />
      <Comps.Business />
      <Comps.Billing />
      <Comps.CardDeal />
      <Comps.Feeadback />
      <Comps.CTA />
      <Comps.Service />
      <Comps.Footer />
    </div>
  );
}

export default App;
