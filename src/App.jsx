import * as Comps from "./components/index";
// import styles from "./style";

function App() {
  return (
    <div className={`App w-full mx-auto text-white py-1 bg-primary h-fit`}>
      <Comps.Navbar />
      <Comps.Mainsection />
      <Comps.Billing />
      <Comps.Business />
      <Comps.CardDeal />
      <Comps.CTA />
      <Comps.Feeadback />
      <Comps.Testimonials />
      <Comps.Stats />
      <Comps.Footer />
    </div>
  );
}

export default App;
