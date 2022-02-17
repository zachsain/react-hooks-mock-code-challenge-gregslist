import React from "react";

function ListingCard({listings, handleRemove}) {

  // let listingsCopy = [...listings]

  function handleDelete(event){
    // console.log(event.target.id)
    // console.log(listingsCopy)
    handleRemove(event.target.id)
  }

  return (
    listings.map(listing => {
  
  return <li className="card">
            <div className="image">
              <span className="price">{listing.price}</span>
              <img src={listing.image} alt={"description"} />
            </div>
            <div className="details">
              {true ? (
                <button className="emoji-button favorite active">★</button>
              ) : (
                <button className="emoji-button favorite">☆</button>
              )}
              <strong>{listing.description}</strong>
              <span> · {listing.location}</span>
              <button id={listing.id} onClick={handleDelete} className="emoji-button delete">🗑</button>
            </div>
         </li>
    })
  );
}

export default ListingCard;
