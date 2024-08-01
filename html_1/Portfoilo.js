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

    const addressElement = document.getElementById('address');
    if (addressElement) {
        addressElement.textContent = `Address: ${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.state}, ${userProfile.address.zip}`;
    }

    console.log('User Profile:', userProfile);
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
    
    // Hide the dropdown if clicked outside
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
