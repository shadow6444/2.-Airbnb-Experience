import './App.css'
import Navbar from './components/Navbar.jsx'
import MainHero from './components/MainHero.jsx'
import Card from './Card.jsx'
import card from "./assets/katie-zaferes.png";

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

function App() {
  return (
    <>
      <Navbar/>
      <MainHero/>
      <Card img={card} rating="5.0" reviewCount="(6)" country="USA" title="Life Lessons with Katie Zaferes" price={136}/>
    </>
  )
}

export default App
