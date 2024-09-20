import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MainHero from "./components/MainHero.jsx";
import Card from "./Card.jsx";
import data from "./data.js";
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

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
