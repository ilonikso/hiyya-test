let priceLiteMonthly = '949';
let priceLiteAnnualy = '759.20';

let pricePremiumMonthly = '1249';
let pricePremiumAnnualy = '999.20';

//--------------------------------------

let input = document.querySelector('#plan-switch');
let priceLite = document.querySelector('.plan__price-num--lite');
let pricePremium = document.querySelector('.plan__price-num--premium');



input.addEventListener('change', function(e){
    
    if(e.target.checked){
        priceLite.textContent = '£' + priceLiteAnnualy;
        pricePremium.textContent = '£' + pricePremiumAnnualy;
    } else{
        priceLite.textContent = '£' + priceLiteMonthly;
        pricePremium.textContent = '£' + pricePremiumMonthly;
    }

    e.preventDefault();
});

