//Act 1
// const button = document.getElementById('toggleButton');
// const image = document.getElementById('myImage');

// button.addEventListener('click', () => {
//     if (image.style.display === 'none') {
//         image.style.display = 'block';
//         button.textContent = 'Hide Image';
//     } else {
//         image.style.display = 'none';
//         button.textContent = 'Show Image';
//     }
// });


//Act2 STUCK
// const button = document.getElementById('toggleButton');
// const image = document.getElementById('myImage');
// const imageURL = document.getElementById('imageURL');

// button.addEventListener('click', () => {
//     // Change the image source to the URL in the input box
//     if (imageURL.value) {
//         image.src = imageURL.value;
//     }

//     // Toggle image visibility
//     if (image.style.display === 'none') {
//         image.style.display = 'block';
//         button.textContent = 'Hide Image';
//     } else {
//         image.style.display = 'none';
//         button.textContent = 'Show Image';
//     }
// });


// //Act3
// const heading = document.getElementById('myHeading');
// const colorInput = document.getElementById('colorInput');
// const changeColorButton = document.getElementById('changeColorButton');

// changeColorButton.addEventListener('click', () => {
//     const newColor = colorInput.value;

//     heading.style.color = newColor;
// });


// //Act4
const heading = document.getElementById('myHeading');
const colorInput = document.getElementById('colorInput');
const changeColorButton = document.getElementById('changeColorButton');
const coordinates = document.getElementById('coordinates');

changeColorButton.addEventListener('click', () => {
    const newColor = colorInput.value;

    heading.style.color = newColor;
});

document.addEventListener('click', (event) => {
   console.log(event)
   console.log(event.target)
});