import card from "./assets/katie-zaferes.png";
import star from "./assets/star.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
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
