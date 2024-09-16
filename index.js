document.addEventListener('DOMContentLoaded', function () {
    // plans tab js for change the price on annual tab click
    // Get the elements
    const monthlyRadio = document.getElementById('monthly');
    const annualRadio = document.getElementById('annual');
    const packageWrapper = document.querySelector('.package-wrapper');

    // Check if the elements exist before using them
    if (monthlyRadio && annualRadio && packageWrapper) {
        // Add event listeners to detect changes on the radio buttons
        monthlyRadio.addEventListener('change', function () {
            if (monthlyRadio.checked) {
                packageWrapper.classList.remove('annual-package-selected'); // Remove the class when monthly is checked
            }
        });

        annualRadio.addEventListener('change', function () {
            if (annualRadio.checked) {
                packageWrapper.classList.add('annual-package-selected'); // Add the class when annual is checked
            }
        });
    } else {
        console.error('Error: One or more elements were not found.');
    }
    // plans tab js for change the price on annual tab click
});

// js for package detail expand
function toggleSelectedOption(selectedCardId, open = true) {
    if (open) {
        const packageCards = document.querySelectorAll('.package-card');
        packageCards.forEach(additionalElement => {
            additionalElement.classList.remove('active');
        });
        console.log(selectedCardId);
        document.getElementById(selectedCardId).classList.add('active');
    } else {
        document.getElementById(selectedCardId).classList.remove('active');
    }
}
// js for package detail expand

// modal js
// Get all buttons that open modals
var btns = document.querySelectorAll("[data-target]");
// Function to open the modal
function openModal() {
    var modalId = this.getAttribute('data-target');
    var modal = document.querySelector(modalId);
    if (modal) {
        modal.classList.add("show-modal");
        modal.classList.remove("hide-modal");
    }
}
// Attach click event listeners to buttons
btns.forEach(function(btn) {
    btn.addEventListener('click', openModal);
});
// Close modal when the user clicks on <span> (x)
var spans = document.querySelectorAll('.modal .close');
spans.forEach(function(span) {
    span.addEventListener('click', function() {
        this.closest('.modal').classList.add("hide-modal");
        this.closest('.modal').classList.remove("show-modal");
    });
});
// Close modal when the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.add("hide-modal");
        event.target.classList.remove("show-modal");
    }
});
// modal js