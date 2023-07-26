const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const ingredientItemsList = ingredients.map(ingredient => {
  
  const ingredientItem = document.createElement('li');

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");

  return ingredientItem;

});


ingredientsList.append(...ingredientItemsList);