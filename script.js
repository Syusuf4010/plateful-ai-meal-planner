const form = document.getElementById('mealForm');
const planDiv = document.getElementById('plan');
const shoppingList = document.getElementById('shopping');
const outputDiv = document.getElementById('output');

const fakePlans = {
  weight_loss: ["Grilled chicken & veggies", "Quinoa salad", "Protein smoothie", "Turkey wrap", "Greek yogurt bowl"],
  muscle_gain: ["Steak & brown rice", "Chicken alfredo", "Protein pancakes", "Egg omelet", "Tuna sandwich"],
  balanced: ["Buddha bowl", "Shrimp stir-fry", "Chicken curry", "Veggie lasagna", "Fish tacos"]
};

const shoppingItems = ["Chicken", "Quinoa", "Rice", "Veggies", "Eggs", "Fruit", "Yogurt", "Oats"];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const goal = document.getElementById('goal').value;
  const diet = document.getElementById('diet').value;

  // Pick random 5 meals from the goal type
  const meals = fakePlans[goal].slice(0, 5);

  planDiv.innerHTML = meals.map((meal, index) => `<p><strong>Day ${index + 1}:</strong> ${meal} (${diet})</p>`).join('');
  shoppingList.innerHTML = shoppingItems.map(item => `<li>${item}</li>`).join('');

  outputDiv.style.display = 'block';
});
