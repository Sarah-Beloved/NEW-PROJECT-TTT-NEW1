const iconCart = document.querySelector(".icon-cart");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");
const listCart = document.querySelector(".listCart");

// Open sidebar and render cart
iconCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
    renderCart();
});

// Close sidebar
closeBtn.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
});

// Render items in the cart sidebar
function renderCart() {
    listCart.innerHTML = ""; // Clear previous content
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" width="50" alt="${item.name}">
            <p>${item.name} x ${item.quantity}</p>
            <p>₦${item.price * item.quantity}</p>
        `;
        listCart.appendChild(div);
    });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price, image) {
  let item = cart.find(p => p.id === id);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      id,
      name,
      price,
      image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart ✔");
}