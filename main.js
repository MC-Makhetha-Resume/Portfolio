'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        for(let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i]. classList.remove('active');
            }
        }
    });
}

var myButton = document.querySelectorAll('.btn');
var closeButton = document.querySelectorAll('.close');
var popup = document.querySelectorAll('.popup');
var popupInSide = document.querySelectorAll('.myIframe');
var openInNewTabButtons = document.querySelectorAll('.open-in-new-tab');

for (var i = 0; i < myButton.length; i++) {
    myButton[i].addEventListener('click', function (event) {
        var buttonPDFLink = this.getAttribute("data-href"); // Directory path to the PDF file
        for (var j = 0; j < popup.length; j++) {
            popup[j].style.display = 'flex'; // Show the popup
        }
        for (var k = 0; k < popupInSide.length; k++) {
            popupInSide[k].setAttribute("src", buttonPDFLink); // Load the PDF file into the iframe
        }
        for (var l = 0; l < openInNewTabButtons.length; l++) {
            openInNewTabButtons[l].setAttribute("data-href", buttonPDFLink); // Set the data-href for the "Open in New Tab" button
        }
    });
}

// Close button logic
for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', function (event) {
        for (var j = 0; j < popup.length; j++) {
            popup[j].style.display = 'none'; // Hide the popup
        }
        for (var k = 0; k < popupInSide.length; k++) {
            popupInSide[k].removeAttribute("src"); // Remove the iframe source for cleanup
        }
    });
}

// Open in new tab button logic
for (var i = 0; i < openInNewTabButtons.length; i++) {
    openInNewTabButtons[i].addEventListener('click', function (event) {
        var pdfLink = this.getAttribute("data-href"); // Get the PDF link from the button
        window.open(pdfLink, '_blank'); // Open the PDF in a new tab
        for (var j = 0; j < popup.length; j++) {
            popup[j].style.display = 'none'; // Hide the popup
        }
        for (var k = 0; k < popupInSide.length; k++) {
            popupInSide[k].removeAttribute("src"); // Remove the iframe source for cleanup
        }
    });
}


function readMore(text,read) {
    var moreText = document.getElementById(text);
    var btnText = document.getElementById(read);

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less"; // Changes the link text
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More"; // Changes the link text back
    }
}