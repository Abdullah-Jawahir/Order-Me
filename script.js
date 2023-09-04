let totalPriceEl = document.getElementById('total-price');
let deliveryChargeEl = document.getElementById('delivery-charge');
let billAmountEl = document.getElementById('bill-amount');

const placeBtn = document.getElementById('place-btn');
const cancelBtn = document.getElementById('cancel-btn');

const itemList = document.getElementById('item-list');
const plusIcons = itemList.querySelectorAll('.fa-plus-circle');
const minusIcons = itemList.querySelectorAll('.fa-minus-circle');

const wrap = document.getElementById('wrap');

plusIcons.forEach((icon) => {

    icon.addEventListener('click', (me) => {

        deliveryChargeEl.innerText = '$1';

        let countEl = me.target.previousElementSibling;
        countEl.innerText = parseFloat(countEl.innerText) + 1;

        let price = me.target.parentElement.previousElementSibling.lastElementChild;
        totalPriceEl.innerText = `$${parseFloat(price.innerText.slice(1)) + parseFloat(totalPriceEl.innerText.slice(1))}`;

        calculateBill();

    })
});



minusIcons.forEach((icon) => {
    icon.addEventListener('click', (me) => {

        let countEl = me.target.nextElementSibling;
        let price = me.target.parentElement.previousElementSibling.lastElementChild;

        if ( countEl.innerText > 0 ) {
            countEl.innerText = parseFloat(countEl.innerText) - 1;

            totalPriceEl.innerText = `$${parseFloat(totalPriceEl.innerText.slice(1)) - parseFloat(price.innerText.slice(1))}`;

            if ( totalPriceEl.innerText === '$0' ) {
                deliveryChargeEl.innerText = '$0';
            }

            calculateBill();

        } else {

            countEl.innerText = 0;
            alert('No more Foods !')
        }
        
    })
});


placeBtn.addEventListener('click', () => {


    if ( parseFloat(billAmountEl.innerText.slice(1)) > 0 || parseFloat(deliveryChargeEl.innerText.slice(1)) != 0 ) {

        wrap.style.clipPath = 'circle(1000px at center)';

        setTimeout(() => {
            wrap.style.clipPath = 'circle(0px at center)'
        }, 3000);
    } else {

        alert('Please purchase any food !');
    }
});


cancelBtn.addEventListener('click', () => {
    const foodCount = itemList.querySelectorAll('.food-count');
    foodCount.forEach(count => {

        count.innerText = 0;
    });

    totalPriceEl.innerText = '$0';
    deliveryChargeEl.innerText = '$0';
    calculateBill();

});

function calculateBill() {
    billAmountEl.innerText = `$${parseFloat(totalPriceEl.innerText.slice(1)) + parseFloat(deliveryChargeEl.innerText.slice(1))}`; 
}
