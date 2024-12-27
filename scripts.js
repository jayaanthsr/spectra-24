document.addEventListener("DOMContentLoaded", function() {
    var oldId = null;

    // Select all tab links
    var tabs = document.querySelectorAll('.tabs-controls__link');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            if (tab.classList.contains('tabs-controls__link--active')) {
                return false; // Return if the clicked tab is already active
            }

            // Get the ID of the current tab
            var currentId = parseInt(tab.getAttribute('data-id'), 10);
            
            // Remove the active class from the currently active tab and add it to the clicked tab
            document.querySelector('.tabs-controls__link--active').classList.remove('tabs-controls__link--active');
            tab.classList.add('tabs-controls__link--active');

            // Handle the animation based on whether the current tab ID is greater or smaller than the previous tab ID
            var cards = document.querySelectorAll('.card');

            if (currentId < oldId) {
                // If the new tab ID is smaller, we reverse the animation (reveal hidden cards)
                var hiddenCards = document.querySelectorAll('.card.hidden');
                var timing = hiddenCards.length * 100;

                cards.forEach(function(card, index) {
                    if (index >= currentId - 1) {
                        // Delay showing the cards for the staggered animation
                        setTimeout(function() {
                            card.classList.remove('hidden');
                        }, timing - (index * 100));
                    }
                });
            } else {
                // If the new tab ID is greater, we hide cards that are less than the new tab ID
                cards.forEach(function(card, index) {
                    if (index < currentId - 1) {
                        setTimeout(function() {
                            card.classList.add('hidden');
                        }, index * 100);
                    }
                });
            }

            oldId = currentId; // Update the oldId for future reference
        });
    });
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});



// faq
console.log("script loaded")
document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { id: 'trx-section', content: 'You can participate in multiple events as long as their timings don\'t overlap.' },
        { id: 'trx-section1', content: 'There is no last date for registration, however we encourage registering ASAP since few events may have limited seats and may get over.' },
        { id: 'trx-section2', content: 'Meals will be provided at the venue, including options for different dietary needs.' },
        { id: 'trx-section3', content: 'Separate parking facilities are available for two and four wheelers. Participants can park their vehicles at their own risk. Volunteers will guide you on the same.' },
        { id: 'trx-section5', content: 'Certificates will be provided to all participants. On-spot registrations are available with limited seats.' },
        { id: 'trx-section6', content: 'Please wear formal attire and bring your college ID for verification.' },
    ];

    const contentSection = document.querySelector('.contentSection');

    sections.forEach(section => {
        const element = document.getElementById(section.id);
        element.addEventListener('click', () => {
            clearActive();
            element.classList.add('active');
            typeContent(section.content);
        });
    });

    // Function to clear active class
    function clearActive() {
        const allSections = document.querySelectorAll('.class-info');
        allSections.forEach(section => section.classList.remove('active'));
    }

    // Typing animation function
    function typeContent(content) {
        contentSection.innerHTML = ''; // Clear previous content
        let index = 0;

        function type() {
            if (index < content.length) {
                contentSection.innerHTML += content.charAt(index);
                index++;
                setTimeout(type, 50); // Adjust speed here
            }
        }

        type();
    }
});


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}


let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  // If scrolling down, hide the navbar
  if (currentScrollPosition > lastScrollPosition) {
    navbar.style.top = '-100px';  // Hide the navbar (or adjust based on the height of the navbar)
  } 
  // If scrolling up, show the navbar
  else {
    navbar.style.top = '0';  // Show the navbar
  }

  // Update the last scroll position
  lastScrollPosition = currentScrollPosition;
});





