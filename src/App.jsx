import Navbar from "./components/Navbar";
import MainHero from "./components/MainHero";
import Card from "./components/Card";
import data from "./data.js";


const App = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <>
      <Navbar />
      <MainHero />
      <div className="card-items">
        {cards}
      </div>
    </>
  );
}

export default App;
