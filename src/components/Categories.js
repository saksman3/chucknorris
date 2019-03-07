import React from "react";
import CategoryItem from "./Category";

const Categories = props => {
  const categories = props.categories;
  return (
    <div className="categories">
      {categories.map((item, index) => {
        return <CategoryItem category={item} key={index} />;
      })}
    </div>
  );
};

export default Categories;
