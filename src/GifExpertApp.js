import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["Samurai X"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "X-Men"]);
  //   //setCategories((cats) => ["X-Men", ...cats]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
