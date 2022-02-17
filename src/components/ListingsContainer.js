import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleRemove}) {
  return (
    <main>
      <ul className="cards">
        <ListingCard listings={listings} handleRemove={handleRemove}/>
      </ul>
    </main>
  );
}

export default ListingsContainer;
