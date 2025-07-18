const pizzas = [
  {
    name: "Margherita",
    price: 199,
    img: "assets/margherita.jpg"
  },
  {
    name: "Peppy Paneer",
    price: 299,
    img: "assets/peppy-paneer.jpg"
  },
  {
    name: "Veggie Paradise",
    price: 249,
    img: "assets/veggie-paradise.jpg"
  },
  {
    name: "Cheese Burst",
    price: 269,
    img: "assets/cheese-burst.jpg"
  }
];

let cart = [];

const menuContainer = document.getElementById("menu-items");
const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

function renderMenu() {
  pizzas.forEach((pizza, index) => {
    const div = document.createElement("div");
    div.className = "pizza-card";
    div.innerHTML = `
      <img src="${pizza.img}" alt="${pizza.name}" />
      <h3>${pizza.name}</h3>
      <p>₹${pizza.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    menuContainer.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(pizzas[index]);
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>₹${item.price}</span>
    `;
    cartContainer.appendChild(div);
    total += item.price;
  });
  totalElement.textContent = `Total: ₹${total}`;
  cartCount.textContent = cart.length;
}

renderMenu();
