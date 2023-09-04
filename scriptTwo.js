const pizzaCount = document.getElementById('pizza-count');

function addPizza() {
    pizzaCount.innerText = parseFloat(pizzaCount.innerText) + 1;
} 

function subPizza() {

    if ( parseFloat(pizzaCount.innerText) > 0 ) {

        pizzaCount.innerText = parseFloat(pizzaCount.innerText) - 1;
    } else {

        alert('No more Food !');
    }
    
}