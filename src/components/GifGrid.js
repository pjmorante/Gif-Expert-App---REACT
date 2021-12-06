import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItems } from "./GifGridItems";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            //<li key={img.id}>{img.title}</li>
            <GifGridItems key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
