import React from "react";
import "./ListingCard";

function ListingCard({ title, description, price, image }) {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ListingCard;
