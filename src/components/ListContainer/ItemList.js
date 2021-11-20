import React from "react";
import { Item } from "./Item";

import "./container.css";

export const ItemList = ({ productos = [] }) => {
  return (
    <div className="container my-4 ">
      <div id="products">
        {productos.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
