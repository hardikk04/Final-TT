const products = [
  {
    image:
      "https://images.unsplash.com/photo-1517621771456-94400b855f7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Wireless Headphones",
    price: 49.99,
    addToCart: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1517621771456-94400b855f7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Smartphone Stand",
    price: 19.99,
    addToCart: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1523754865311-b886113bb8de?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bluetooth Speaker",
    price: 29.99,
    addToCart: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1523754865311-b886113bb8de?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Gaming Mouse",
    price: 39.99,
    addToCart: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1523754865311-b886113bb8de?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Portable Charger",
    price: 24.99,
    addToCart: false,
  },
];

localStorage.setItem("products", JSON.stringify(products));

var clutter = "";
products.forEach((prod, idx) => {
  clutter += ` <div data-index=${idx} class="border rounded-lg shadow-lg p-4">
          <div class="relative">
            <span
              class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded"
              >SALE</span
            >
            <img
              src="${prod.image}"
              alt="Tortoise round glasses"
              class="w-full h-48 object-cover rounded"
            />
          </div>
          <div class="mt-4">
            <div class="flex items-center mb-2">
              <div class="text-yellow-400 text-sm mr-2">★★★★★</div>
              <button class="ml-auto text-gray-400 hover:text-gray-600">
                ⏸
              </button>
            </div>
            <h2 class="text-lg font-semibold">${prod.name}</h2>
            <div class="text-green-500 text-lg font-bold">$${prod.price}</div>
            <div class="text-red-500 text-sm line-through">$${
              prod.price * 2
            }</div>
            <div class="flex space-x-2 mt-2">
              <button class="w-4 h-4 bg-green-300 rounded-full"></button>
              <button class="w-4 h-4 bg-gray-300 rounded-full"></button>
              <button class="w-4 h-4 bg-gray-300 rounded-full"></button>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <a href="card.html?index=${idx}" data-index=${idx} class="addtocart bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" >
              Add to cart
            </a>
            <a href="inside.html?index=${idx}" data-index=${idx}
              class="view-product bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              View details
            </a>
          </div>
        </div>
        `;
});
document.querySelector(".productContainer").innerHTML = clutter;

document
  .querySelector(".productContainer")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("addtocart")) {
      products[e.target.dataset.index].addToCart = true;
      console.log(products);
    }
  });
