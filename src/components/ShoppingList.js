import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setInput] = useState('...Search');



  function onSearchChange(event){
    setInput(event.target.value)
  }

  function handleCatChange(event){
    setSelectedCategory(event.target.value)
  }
  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const newItems = itemsToDisplay.filter((items)=>{
    if(search=== '...Search') return true;

    return items.name.includes(search);
  })

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onItemFormSubmit} 




      />
      <Filter onSearchChange={onSearchChange} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} search={search} setInput={setInput}/>
      <ul className="Items">
        {/* {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
