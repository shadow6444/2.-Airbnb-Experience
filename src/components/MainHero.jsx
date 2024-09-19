import heroImg from "../assets/photo-grid.png";
export default function MainHero() {
  return (
    <>
      <div className="hero-container">
        <img src={heroImg} alt="Hero Image" className="hero-img" />
      </div>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <h4>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </h4>
      </div>
    </>
  );
}
