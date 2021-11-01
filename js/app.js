//Heading of Shopping Cart

let heading = document.getElementById('heading');

console.log(heading);

//Heading Style
heading.style.background = '#f36983';
heading.style.color = '#FFFFFF';
heading.style.padding = '10px';
heading.style.marginTop = '50px';


//Learning Heading

const learningHeading = document.querySelector('#learn');

const tagline = document.querySelector('.tagline');

console.log(tagline);


//Add event listeners

const clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click',clearBtnFunction);

function clearBtnFunction() {
    console.log('You successfully clicked the clear cart button')
}



//Remove item from cart


const shoppingCart = document.querySelector('#shopping-cart');

shoppingCart.addEventListener('click', removeProductFromCart);

function removeProductFromCart(e) {
    console.log(e.target.classList);

    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();

    }
}


//Add Items to Cart
//Adding Event Listener

const courseList = document.querySelector('#courses-list');

courseList.addEventListener('click',addToCart);

function addToCart(e) {
    if (e.target.classList.contains('add-to-cart')) {
        console.log('Course Successfully Added');
    }
}



            

