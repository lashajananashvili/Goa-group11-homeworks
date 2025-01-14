
const products = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
  ];
  
  const cart = [];
  
  const productContainer = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
  
    const title = document.createElement("span");
    title.innerText = product.title;
  
    const addButton = document.createElement("button");
    addButton.innerText = "Add to Cart";
    addButton.onclick = () => addToCart(product);
  
    productElement.appendChild(title);
    productElement.appendChild(addButton);
    productContainer.appendChild(productElement);
  });
  
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }
  const cartContainer = document.getElementById("cart-items");
  function renderCart() {
    cartContainer.innerHTML = "";
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart-item");
      cartItem.innerText = item.title;
      cartContainer.appendChild(cartItem);
    });
  }
  