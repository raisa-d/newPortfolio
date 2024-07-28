const navElements = document.querySelectorAll('#navUL li a')

// add event listener to each nav element
navElements.forEach(e => e.addEventListener(mouseover, showImage));

function showImage(mouseover) {
    mouseover.target.style = 'background-image:url(/assets/images/cloud.png)'
}

// show background image when hovered on