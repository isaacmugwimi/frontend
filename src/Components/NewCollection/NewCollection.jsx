import React from "react";
import "./NewCollection.css";
import newCollections from "../Assets/new_collections";
import { Items } from "../Items/Items";
export const NewCollection = () => {
  return (
    <div className="newCollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
