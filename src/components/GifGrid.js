import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItems } from "./GifGridItems";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h3 className="animate__fadeInTopRightcd">{category}</h3>
      {loading && <p>Loading</p>}
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
