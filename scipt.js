document.addEventListener("DOMContentLoaded", function () {
    const productListElement = document.getElementById("product-list");

  
    const jsonDataSource = 'products.json';

   
    fetch(jsonDataSource)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const listItem = document.createElement("li");
                listItem.textContent = `${product.name} - ${product.price}`;
                productListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
