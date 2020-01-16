let priceLiteMonthly = '949';
let priceLiteAnnualy = '759';

let pricePremiumMonthly = '1249';
let pricePremiumAnnualy = '999';

//--------------------------------------

let input = document.querySelector('#plan-switch');
let priceLite = document.querySelector('.plan__price-num--lite');
let pricePremium = document.querySelector('.plan__price-num--premium');
let discountText = document.querySelector('.plan__price-discount');


input.addEventListener('change', function(e){
    
    if(e.target.checked){
        priceLite.textContent = '£' + priceLiteAnnualy;
        pricePremium.textContent = '£' + pricePremiumAnnualy;
        discountText.style.visibility = 'hidden';
        
    } else{
        priceLite.textContent = '£' + priceLiteMonthly;
        pricePremium.textContent = '£' + pricePremiumMonthly;
        
        discountText.style.visibility = 'visible';
    }

    e.preventDefault();
});

