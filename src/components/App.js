import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

//get value of search and update the listings container 

function App() {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      });
  }, []);

  const [listings, setListings] = useState([])

  console.log(listings)

function handleRemove(event){
  console.log(event)
  let filteredListings = listings.filter(listing => {
    return listing.id !== event
  })
  // console.log(filteredListings)
  setListings(filteredListings)
}
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
