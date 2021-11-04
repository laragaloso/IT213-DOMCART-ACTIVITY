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



//Variables
 
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody');
      clearCartBtn = document.querySelector('#clear-cart');


//Listeners

loadEventListeners();

function loadEventListeners(){
     //When a new course is added
     courses.addEventListener('click', buyCourse);

     // When the remove button is clicked
     shoppingCartContent.addEventListener('click', removeCourse);

     // Clear Cart Btn     
     clearCartBtn.addEventListener('click', clearCart);

    // Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);


}

//functions
function buyCourse(e) {
        e.preventDefault();

        //Use Delegation to find the course that was added
        if(e.target.classList.contains('add-to-cart')){

        //Read the Course Values
        const course =e.target.parentElement.parentElement;

        //Read the Values
        getCourseInfo(course);


    }

} 


// Reads the HTML Information at the Sselected Course
function getCourseInfo(course) {

        //Create an object with course data
        const courseInfo = {
            image: course.querySelector('img').src,
            title: course.querySelector('h4').textContent,
            price: course.querySelector('.price span').textContent,
            id:course.querySelector('a').getAttribute('data-id')
    }


    // Insert into the Shopping Cart
    addIntoCart(courseInfo);

}

    // Display the Selected Course into the Shopping Cart

function addIntoCart(course) {

    // create a <tr>
    const row = document.createElement('tr');

    // Build the Template

            row.innerHTML = `
            <tr>
                <td>
                    <img src="${course.image}" width=100>
                </td>
                <td>${course.title}</td>
                <td>${course.price}</td>
                <td>
                    <a href="#" class="remove" data-id="${course.id}">X</a>
                </td>
            </tr>
        `;

    // Add into the Shopping Cart
    shoppingCartContent.appendChild(row);

    // Add courses into Storage
    saveIntoStorage(course);
}

// Add Courses into the Local Storage

function saveIntoStorage(course) {
    let courses = getCoursesFromStorage();

    // Add the Course into the array
    courses.push(course);

    //We need to convert JSON into string
    localStorage.setItem('courses', JSON.stringify(courses) );
}

// Get the contents from Storage
function getCoursesFromStorage() {

    let courses;

    // If something exist on storage then we get the value,otherwise create an empty array

    if(localStorage.getItem('courses') === null) {
        courses = [];
    } else {
        courses =JSON.parse(localStorage.getItem('courses') );
    }
    return courses;

}

// Remove Course from the DOM
function removeCourse(e) {
    let course, courseId;

    // Remove from the DOM
    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');

    }

    console.log(courseId);
    // Remove from the Local Storage
    removeCourseLocalStorage(courseId);

}

    // Get the Local Storage Data
    let coursesLS = getCoursesFromStorage();

// Remove from Local Storage
function removeCourseLocalStorage(id) {


    // Loop throught the array and find the index to remove
    coursesLS.forEach(function(courseLS, index) {
        if(courseLS.id === id) {
            coursesLS.splice(index, 1);
        }
    });

    // Add the rest of the array
    localStorage.setItem('courses', JSON.stringify(coursesLS));

}


// Clears the Shopping Cart
function clearCart() {

    //shoppingCartContent.innerHTML = '';

    while(shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

    // Clear from Local Storage
    clearLocalStorage();

}

// Clears the Whole Localstorage

function clearLocalStorage() {
    localStorage.clear();


}


// Loads when document is ready and Print Courses into Shopping Cart

function getFromLocalStorage() {
    let coursesLS = getCoursesFromStorage();

    // Loop through the Courses and print into the cart

    coursesLS.forEach(function(course) {
        // Create the <tr>
        const row = document.createElement('tr');

        // Print the content
        row.innerHTML = `
            <tr>
                <td>
                        <img src="${course.image}" width=100>
                </td>
                <td>${course.title}</td>
                <td>${course.price}</td>
                <td>
                        <a href="#" class="remove" data-id="${course.id}">X</a>
                </td>
            </tr>
        `;

        shoppingCartContent.appendChild(row);


    })


}
