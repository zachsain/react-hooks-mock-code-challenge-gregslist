import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {

  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      });
  }, []);


  console.log(listings)

function handleRemove(event){

  fetch(`http://localhost:6001/listings/${event}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
 
  let filteredListings = listings.filter(listing => {
    return listing.id !== event
  })
 
  setListings(filteredListings)
}
 
const filteredListingArray = listings.filter(listing => {
  return listing.description.toLowerCase().includes(search.toLowerCase())
})

console.log(filteredListingArray)

const listingCards = filteredListingArray.map((listingObj) => {
  return <ListingCard key={listingObj.id} listing={listingObj} handleRemove={handleRemove}/>
})
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
