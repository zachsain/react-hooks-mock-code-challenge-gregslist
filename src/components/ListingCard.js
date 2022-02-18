import React, {useState} from "react";

function ListingCard({listing, handleRemove}) {

  const [isFavorited, setIsFavorited] = useState(false)

  function handleDelete(event){
     handleRemove(parseInt(event.target.id))
  }

  
  return (<li className="card">
            <div className="image">
              <span className="price">{listing.price}</span>
              <img src={listing.image} alt={"description"} />
            </div>
            <div className="details">
              {isFavorited ? (
                <button id={listing.id} onClick={() => setIsFavorited(false)} className="emoji-button favorite active">★</button>
              ) : (
                <button id={listing.id} onClick={() => setIsFavorited(true)}  className="emoji-button favorite">☆</button>
              )}
              <strong>{listing.description}</strong>
              <span> · {listing.location}</span>
              <button id={listing.id} onClick={handleDelete} className="emoji-button delete">🗑</button>
            </div>
         </li>)
}

export default ListingCard;
