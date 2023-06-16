const cartItems = [];

function addToCart(item) {
  cartItems.push(item);
}

function updateCartUI() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  cartItemsElement.innerHTML = '';

  // writing to cart
  cartItems.forEach(function(item) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.quantity} x ${item.name} - $${item.price}`;
    cartItemsElement.appendChild(listItem);
  });

  // cal and display total
  const totalPrice = cartItems.reduce(function(total, item) {
    return total + item.price * item.quantity;
  }, 0);
  cartTotalElement.textContent = `Total: $${totalPrice}`;
}

function handleAddToCartButtonClick(serviceSelect, quantityElement, serviceData) {
  const selectedValue = parseInt(serviceSelect.value);
  const quantity = parseInt(quantityElement.value);
  const subService = serviceData.subServices.find(function(sub) {
    return sub.id === selectedValue;
  });

  if (subService && quantity > 0) {
    const item = {
      name: subService.name,
      price: subService.price,
      quantity: quantity
    };

    addToCart(item);
    updateCartUI();
  } else {
    console.log('Please select a valid sub-service and quantity.');
  }
}

function openCartPopup() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = 'block';
}

function closeCartPopup() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = 'none';
}

function initializeCartService(serviceName, serviceSelect, quantityElement, serviceData, addToCartBtn) {
  serviceSelect.addEventListener('change', function() {
    handleServiceSelectChange(serviceSelect, serviceName, serviceData, quantityElement);
  });

  quantityElement.addEventListener('input', function() {
    handleQuantityInputChange(serviceSelect, serviceName, serviceData, quantityElement);
  });

  addToCartBtn.addEventListener('click', function() {
    handleAddToCartButtonClick(serviceName, serviceSelect, quantityElement, serviceData);
  });
}

function initializeCart() {
  // Repairs
  const repairsSelect = document.getElementById('repairs-select');
  const repairsQuantity = document.getElementById('repairs-quantity');
  const repairsAddToCartBtn = document.getElementById('repairs-add-to-cart');

  fetchJsonData('repairs.json')
    .then(function(repairsData) {
      initializeCartService('Repairs', repairsSelect, repairsQuantity, repairsData, repairsAddToCartBtn);
    });

  // Alterations
  const alterationsSelect = document.getElementById('alterations-select');
  const alterationsQuantity = document.getElementById('alterations-quantity');
  const alterationsAddToCartBtn = document.getElementById('alterations-add-to-cart');

  fetchJsonData('alterations.json')
    .then(function(alterationsData) {
      initializeCartService('Alterations', alterationsSelect, alterationsQuantity, alterationsData, alterationsAddToCartBtn);
    });

  // Clothing
  const clothingSelect = document.getElementById('clothing-select');
  const clothingQuantity = document.getElementById('clothing-quantity');
  const clothingAddToCartBtn = document.getElementById('clothing-add-to-cart');

  fetchJsonData('clothing.json')
    .then(function(clothingData) {
      initializeCartService('Clothing', clothingSelect, clothingQuantity, clothingData, clothingAddToCartBtn);
    });

  // Embroidery
  const embroiderySelect = document.getElementById('embroidery-select');
  const embroideryQuantity = document.getElementById('embroidery-quantity');
  const embroideryAddToCartBtn = document.getElementById('embroidery-add-to-cart');

  fetchJsonData('embroidery.json')
    .then(function(embroideryData) {
      initializeCartService('Embroidery', embroiderySelect, embroideryQuantity, embroideryData, embroideryAddToCartBtn);
    });
}

// Fetch JSON data from a file
function fetchJsonData(jsonFile) {
  return fetch(jsonFile)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Error fetching ' + jsonFile + ': ' + response.status + ' ' + response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      console.error('Error fetching ' + jsonFile + ':', error);
      throw error;
    });
}

initializeCart();
