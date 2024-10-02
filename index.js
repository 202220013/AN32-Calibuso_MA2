/* 
   Dynamic Smart Inventory Management System for an Electronics Store
   This inventory system manages the products available in the store.
   It calculates the total value of all products, updates product quantities 
   dynamically, and identifies the most expensive product in the inventory.
*/

// Store Details
const storeName = "Electroshop";
const storeLocation = "Muntinlupa";
const storeCapacity = 300;

// Dynamic Product Inventory
let products = [
	{
		name: "Laptop",
		price: 18999,
		quantity: 50
	},
	{
		name: "Smartphone",
		price: 9999,
		quantity: 100
	},
	{
		name: "Tablet",
		price: 12999,
		quantity: 80
	}
];

// Perform Calculations
let totalInventoryValue = 0; 							// initialized the totalInventoryValue variable with starting value of 0 before calculations
let totalQuantity = 0;									// variable to store the total quantity of all products; for displaying in console log later

for (let i = 0; i < products.length; i++){
	totalInventoryValue += products[i].price * products[i].quantity;
	totalQuantity += products[i].quantity 
}

// Modify Product Information
products[0].quantity += 10; 							// the store received a new shipment of 10 additional laptops
totalInventoryValue += (products[0].price*10);			// add 10 additional laptops to totalInventoryValue
totalQuantity += 10;									// add 10 additional laptops to totalQuantity

// Product with Highest Price
let mostExpensiveProduct = products[0].name;  			// initialize variable with the first product's name
let highestPrice = products[0].price;  					// initialize with the first product's price
	
for (let i = 1; i < products.length; i++) {				//set loop and condition to find the most expensive product
    if (products[i].price > highestPrice) {
        highestPrice = products[i].price;
        mostExpensiveProduct = products[i].name;
    }
}


// Output store details and inventory information
console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);
console.log(`Total Number of Products in Store: ${totalQuantity}`);
console.log(`Total Inventory Value: PHP ${totalInventoryValue}`);
console.log(`Updated Laptop Quantity: ${products[0].quantity}`);
console.log(`Most Expensive Product: ${mostExpensiveProduct}\n\n`);

// Stretch Goal

products.push({						// add an additional product to array 'products'
    name: "Smartwatch",
    price: 7999,
    quantity: 60
});

// Update total inventory value and total quantity with the new product
totalInventoryValue = 0;  			// reassign totalInventoryValue to 0 for recalculation with new product
totalQuantity = 0;  				// reassign totalQuantity to 0 for recalculation with new product

for (let i = 0; i < products.length; i++) {
    totalInventoryValue += products[i].price * products[i].quantity;
    totalQuantity += products[i].quantity;
}
// Output the new total inventory value and total quantity
console.log(`Total Number of Products after adding Smartwatch: ${totalQuantity}`);
console.log(`Total Inventory Value after adding Smartwatch: PHP ${totalInventoryValue}`);

console.log("\n\nDisplay inventory:");
console.log(products);