import star from "./assets/star.png";

export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="card" />
        <h6 className="card-status">SOLD OUT</h6>
      </div>
      <div className="card-details">
        <h4>
          <img src={star} alt="reating star" className="star"/>
          {props.rating} <span className="country"> {props.reviewCount} • {props.country}</span>
        </h4>
        <h4>{props.title}</h4>
        <h4><span className="price">From ${props.price} </span>/ person</h4>
      </div>
    </div>
  );
}
