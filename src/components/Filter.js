import React from "react";

function Filter({ setSelectedCategory, search, setInput, onSearchChange }) {

  // function onSearchChange(event){
  //   setInput(event.target.value)
  // }

  function handleCategoryChange(event) {
    // console.log(selectedCategory)
    setSelectedCategory(event.target.value);
  }


  return (
    <div className="Filter">
      <input type="text" name="search" onChange={onSearchChange} value={search} placeholder='...Search'/>
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
