import star from "./assets/star.png";

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="cards">
      <div className="card">
        <img src={`./${props.coverImg}`} alt="card" />
        {badgeText && <h6 className="card-status">{badgeText}</h6>}
      </div>
      <div className="card-details">
        <h4>
          <img src={star} alt="rating star" className="star" />
          {props.stats.rating}{" "}
          <span className="country">
            {" "}
            ({props.stats.reviewCount}) • {props.location}
          </span>
        </h4>
        <h4>{props.title}</h4>
        <h4>
          <span className="price">From ${props.price} </span>/ person
        </h4>
      </div>
    </div>
  );
}
