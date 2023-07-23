//Popover scripts
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//Tooltips scripts
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Slider
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item'); 
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;
let refreshSlider = setInterval (()=> {next.click()}, 10000);

next.onclick = function(){
    if (active + 1 > lengthItems) {
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if (active - 1 < 0) {
        active = lengthItems;
    }else{
        active = active - 1;
    }reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval (()=> {next.click()}, 10000);
}
dots.forEach((li,key)=> {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

//product slider-houses
const carousel = document.querySelector(".c");
const arrowBtns = document.querySelectorAll(".w .a");
const firstCardWidth = carousel.querySelector(".cd").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -(firstCardWidth*4) : (firstCardWidth*4);
    })
});

//product slider-cars
const carousel2 = document.querySelector(".c2");
const arrowBtns2 = document.querySelectorAll(".w2 .a");
const firstCardWidth2 = carousel2.querySelector(".cd2").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left" ? -(firstCardWidth2*4) : (firstCardWidth2*4);
    })
});

//product slider-furniture
const carousel3 = document.querySelector(".c3");
const arrowBtns3 = document.querySelectorAll(".w3 .a");
const firstCardWidth3 = carousel3.querySelector(".cd3").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id === "left" ? -(firstCardWidth3*4) : (firstCardWidth3*4);
    })
});

//product slider-featured-products
const carousel4 = document.querySelector(".c4");
const arrowBtns4 = document.querySelectorAll(".w4 .a");
const firstCardWidth4 = carousel4.querySelector(".cd4").offsetWidth;

// Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns4.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel4.scrollLeft += btn.id === "left" ? -(firstCardWidth4*4) : (firstCardWidth4*4);
    })
});


// rlp hearts
function handleHeartClick(event) {
    const heartIcon = event.target;
    const heartContainer = heartIcon.parentNode;
    const heartCountElem = heartContainer.querySelector('.rlp-follow-count');
    const count = parseInt(heartCountElem.textContent);

    // Toggle the heart between solid and regular
    if (heartIcon.classList.contains('fa-regular')) {
      heartIcon.classList.remove('fa-regular');
      heartIcon.classList.add('fa-solid');
      heartIcon.style.color = 'red'; // Change the heart color to red
      heartCountElem.textContent = count + 1; // Increase the count
    } else {
      heartIcon.classList.remove('fa-solid');
      heartIcon.classList.add('fa-regular');
      heartIcon.style.color = ''; // Reset the heart color to default
      heartCountElem.textContent = count - 1; // Decrease the count
    }
  }

  // Add click event listeners to all heart icons
  const heartIcons = document.querySelectorAll('.rlp-follow i');
  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener('click', handleHeartClick);
  });

// rlg hearts
function handleHeartClick2(event) {
    const heartIcon2 = event.target;
    const heartContainer2 = heartIcon2.parentNode;
    const heartCountElem2 = heartContainer2.querySelector('.rlg-follow-count');
    const count2 = parseInt(heartCountElem2.textContent);

    // Toggle the heart between solid and regular
    if (heartIcon2.classList.contains('fa-regular')) {
      heartIcon2.classList.remove('fa-regular');
      heartIcon2.classList.add('fa-solid');
      heartIcon2.style.color = 'red'; // Change the heart color to red
      heartCountElem2.textContent = count2 + 1; // Increase the count
    } else {
      heartIcon2.classList.remove('fa-solid');
      heartIcon2.classList.add('fa-regular');
      heartIcon2.style.color = ''; // Reset the heart color to default
      heartCountElem2.textContent = count2 - 1; // Decrease the count
    }
  }

  // Add click event listeners to all heart icons
  const heartIcons2 = document.querySelectorAll('.rlg-follow i');
  heartIcons2.forEach((heartIcon2) => {
    heartIcon2.addEventListener('click', handleHeartClick2);
  });

const hearthover = document.querySelectorAll('.rlp-follow i.fa-heart');


//Chat hover
// Get all elements with the class "profile-chat"
const profileChatDivs = document.querySelectorAll('.profile-chat');

// Function to handle hover events
function handleHover(event) {
  const icon = event.currentTarget.querySelector('.profile-chat-icon');
  icon.classList.toggle('fa-solid'); // Toggle the "fa-solid" class on hover
}

// Add event listeners for hover to each .profile-chat div
profileChatDivs.forEach((div) => {
  div.addEventListener('mouseenter', handleHover);
  div.addEventListener('mouseleave', handleHover);
});


  // Function to handle filtering for each wrapper
  function handleFiltering(wrapper) {
    const filterButtons = wrapper.querySelectorAll(".rlp-filter .rlp-place");
    const productItems = wrapper.querySelectorAll(".cd.rlp-container");

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove the 'active' class from all filter buttons
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add the 'active' class to the clicked filter button
        this.classList.add("active");

        // Get the selected place from the clicked filter button
        const selectedPlace = this.textContent.trim().toLowerCase();

        // Show or hide the product items based on the selected place
        productItems.forEach((item) => {
          const place = item.querySelector(".rlp-d-place").textContent.trim().toLowerCase();
          if (selectedPlace === "all" || place === selectedPlace) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach((wrapper) => {
      handleFiltering(wrapper);
    });
  });



