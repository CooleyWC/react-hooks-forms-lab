import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
const [itemName, setItemName] = useState('')
const [itemCategory, setSelectedCat] = useState('Produce');



function onSearchChange(event){
  setItemName(event.target.value)
}

function handleCatChange(event){
  setSelectedCat(event.target.value)
}

function handleSubmit(event){
  event.preventDefault();
  console.log(itemName)

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };
  console.log(newItem)


  onItemFormSubmit(newItem);
  setItemName('');
  setSelectedCat('Produce');

}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onSearchChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
