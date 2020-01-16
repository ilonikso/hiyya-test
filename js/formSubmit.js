const form = document.querySelector('#form');
const formSubmitText = document.querySelector('.form__submit-text');

form.addEventListener('submit', function(e){
    showText();
    //setTimeout(hideText, 5000);
    
    e.preventDefault();
})

function showText(){
    formSend();
    //form.reset();
    form.style.visibility = 'hidden';
    
    setTimeout(function(){
        formSubmitText.style.visibility = 'visible';
        formSubmitText.style.opacity = 1;
    }, 500)
    
}

function hideText(){
    formSubmitText.style.visibility = 'hidden';
    formSubmitText.style.opacity = 0;
    setTimeout(function(){
        form.style.visibility = 'visible';
    },500);
    
}

function formSend(){
    console.log('The form sending');
}