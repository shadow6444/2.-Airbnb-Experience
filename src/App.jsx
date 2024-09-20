import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MainHero from "./components/MainHero.jsx";
import Card from "./Card.jsx";
import data from "./data.js";


function App() {
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
