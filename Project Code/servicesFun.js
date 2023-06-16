const serviceBtn = document.getElementById('home-btn');
    serviceBtn.addEventListener('click', function() {
      window.location.href = 'project.html';
    });

// fetch json
function fetchJsonData(jsonFile) {
  return fetch(jsonFile)
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.error('Error fetching ' + jsonFile + ':', error);
      throw error;
    });
}

// cal price * quantity
function calculatePrice(serviceData, selectedValue, quantity) {
  const subService = serviceData.subServices.find(function(sub) {
    return sub.id === selectedValue;
  });
  if (subService) {
    return subService.price * quantity;
  }
  return 0;
}

// service change
function handleServiceSelectChange(serviceSelect, priceElement, serviceData, quantityElement) {
  const selectedValue = parseInt(serviceSelect.value);
  const quantity = parseInt(quantityElement.value);
  const price = calculatePrice(serviceData, selectedValue, quantity);
  priceElement.textContent = 'Price: $' + price;
}

// quantity change
function handleQuantityInputChange(serviceSelect, priceElement, serviceData, quantityElement) {
  const selectedValue = parseInt(serviceSelect.value);
  const quantity = parseInt(quantityElement.value);
  const price = calculatePrice(serviceData, selectedValue, quantity);
  priceElement.textContent = 'Price: $' + price;
}

// add to cart event
function handleAddToCartButtonClick(serviceSelect, quantityElement, serviceData) {
  const selectedValue = parseInt(serviceSelect.value);
  const quantity = parseInt(quantityElement.value);
  const subService = serviceData.subServices.find(function(sub) {
    return sub.id === selectedValue;
  });
  if (subService && quantity > 0) {
    console.log('Added ' + quantity + ' ' + subService.name + ' to the cart.');
  } else {
    console.log('Please select a valid sub-service and quantity.');
  }
}

// init repairs
function initializeRepairsService() {
  const repairsSelect = document.getElementById('repairs-select');
  const repairsQuantity = document.getElementById('repairs-quantity');
  const repairsPrice = document.getElementById('repairs-price');
  const repairsAddToCartBtn = document.getElementById('repairs-add-to-cart');

  fetchJsonData('repairs.json')
    .then(function(repairsData) {
      repairsSelect.addEventListener('change', function() {
        handleServiceSelectChange(repairsSelect, repairsPrice, repairsData, repairsQuantity);
      });

      repairsQuantity.addEventListener('input', function() {
        handleQuantityInputChange(repairsSelect, repairsPrice, repairsData, repairsQuantity);
      });

      repairsAddToCartBtn.addEventListener('click', function() {
        handleAddToCartButtonClick(repairsSelect, repairsQuantity, repairsData);
      });
    });
}

// init alterations
function initializeAlterationsService() {
  const alterationsSelect = document.getElementById('alterations-select');
  const alterationsQuantity = document.getElementById('alterations-quantity');
  const alterationsPrice = document.getElementById('alterations-price');
  const alterationsAddToCartBtn = document.getElementById('alterations-add-to-cart');

  fetchJsonData('alterations.json')
    .then(function(alterationsData) {
      alterationsSelect.addEventListener('change', function() {
        handleServiceSelectChange(alterationsSelect, alterationsPrice, alterationsData, alterationsQuantity);
      });

      alterationsQuantity.addEventListener('input', function() {
        handleQuantityInputChange(alterationsSelect, alterationsPrice, alterationsData, alterationsQuantity);
      });

      alterationsAddToCartBtn.addEventListener('click', function() {
        handleAddToCartButtonClick(alterationsSelect, alterationsQuantity, alterationsData);
      });
    });
}

// init clothing 
function initializeClothingService() {
  const clothingSelect = document.getElementById('clothing-select');
  const clothingQuantity = document.getElementById('clothing-quantity');
  const clothingPrice = document.getElementById('clothing-price');
  const clothingAddToCartBtn = document.getElementById('clothing-add-to-cart');

  fetchJsonData('clothing.json')
    .then(function(clothingData) {
      clothingSelect.addEventListener('change', function() {
        handleServiceSelectChange(clothingSelect, clothingPrice, clothingData, clothingQuantity);
      });

      clothingQuantity.addEventListener('input', function() {
        handleQuantityInputChange(clothingSelect, clothingPrice, clothingData, clothingQuantity);
      });

      clothingAddToCartBtn.addEventListener('click', function() {
        handleAddToCartButtonClick(clothingSelect, clothingQuantity, clothingData);
      });
    });
}

// init embroidery 
function initializeEmbroideryService() {
  const embroiderySelect = document.getElementById('embroidery-select');
  const embroideryQuantity = document.getElementById('embroidery-quantity');
  const embroideryPrice = document.getElementById('embroidery-price');
  const embroideryAddToCartBtn = document.getElementById('embroidery-add-to-cart');

  fetchJsonData('embroidery.json')
    .then(function(embroideryData) {
      embroiderySelect.addEventListener('change', function() {
        handleServiceSelectChange(embroiderySelect, embroideryPrice, embroideryData, embroideryQuantity);
      });

      embroideryQuantity.addEventListener('input', function() {
        handleQuantityInputChange(embroiderySelect, embroideryPrice, embroideryData, embroideryQuantity);
      });

      embroideryAddToCartBtn.addEventListener('click', function() {
        handleAddToCartButtonClick(embroiderySelect, embroideryQuantity, embroideryData);
      });
    });
}

// init all services 
initializeRepairsService();
initializeAlterationsService();
initializeClothingService();
initializeEmbroideryService();
