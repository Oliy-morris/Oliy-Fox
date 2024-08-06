document.addEventListener('DOMContentLoaded', (event) => {
    alert('Hello, Welcome to Ollies Archives');

    // Get the greeting element from the DOM
    const greetingElement = document.getElementById('greetingMessage');
    if (greetingElement) {
        greetingElement.textContent = 'Hello, Welcome to Ollies Archives!';
    }

    // Array data type
    const navLinks = ['Home', 'Experiences and Expressions', 'Contact'];
    console.log('Navigation Links:', navLinks);


    const userProfile = {
        username: 'Ollie',
        email: 'loganllama15@gmail.com',
        isLoggedIn: true,
        profilePicture: 'rose-1.jpg',
        favoriteItems: ['Painting', 'Drawing', 'writing' , 'poetry'],
    };
    console.log('User Profile:', userProfile);
    
    const profilePictureElement = document.getElementById('profilePicture');
    if (profilePictureElement) {
        profilePictureElement.src = userProfile.profilePicture;
    }

    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        usernameElement.textContent = `Username: ${userProfile.username}`;
    }

    const emailElement = document.getElementById('email');
    if (emailElement) {
        emailElement.textContent = `Email: ${userProfile.email}`;
    }

    const favoriteItemsElement = document.getElementById('favoriteItems');
    if (favoriteItemsElement) {
        favoriteItemsElement.textContent = `Favorite Items: ${userProfile.favoriteItems.join(', ')}`;
    }

    console.log('User Profile:', userProfile);
    const totalFavoriteItems = userProfile.favoriteItems.length;
    const additionalItems = 5;
    const totalItems = totalFavoriteItems + additionalItems;

    const totalItemsElement = document.createElement('p');
    totalItemsElement.id = 'totalItems';
    document.body.appendChild(totalItemsElement);

    const averageFavoriteItems = totalItems / 2; // Assuming 2 as a divisor for example
    console.log('Average Favorite Items:', averageFavoriteItems);

    const averageItemsElement = document.createElement('p');
    averageItemsElement.id = 'averageItems';
    averageItemsElement.textContent = `Average favorite items: ${averageFavoriteItems}`;
    document.body.appendChild(averageItemsElement);
    
});

const profileButton = document.getElementById('profileButton');
const profileDropdown = document.getElementById('profileDropdown');

if (profileButton && profileDropdown) {
    profileButton.addEventListener('click', () => {
        if (profileDropdown.style.display === 'block') {
            profileDropdown.style.display = 'none';
        } else {
            profileDropdown.style.display = 'block';
        }
    });
    
     
    document.addEventListener('click', (event) => {
        if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
    });
}
 
const pageTitle = document.querySelector('h2');
if (pageTitle) {
    switch (document.title) {
        case 'Home - Ollie\'s Archives':
            pageTitle.textContent = 'Home Page Content';
            break;
        case 'Experience\'s and Expression\'s - Ollie\'s Archives':
            pageTitle.textContent = 'Experience\'s and Expression\'s Content';
            break;
        case 'Contact - Ollie\'s Archives':
            pageTitle.textContent = 'Contact Page Content';
            break;
        default:
            pageTitle.textContent = 'Welcome to Ollie\'s Archives';
            break;
    }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);

document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);