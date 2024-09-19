import card from "./assets/katie-zaferes.png";
import star from "./assets/star.png";

export default function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card} alt="card" />
        <h6 className="card-status">SOLD OUT</h6>
      </div>
      <div className="card-details">
        <h4>
          <img src={star} alt="reating star" className="star"/>
          5.0 <span className="country">(6) • USA</span>
        </h4>
        <h4>Life lesson with Katie Zaferes</h4>
        <h4><span className="price">From $136 </span>/ person</h4>
      </div>
    </div>
  );
}
