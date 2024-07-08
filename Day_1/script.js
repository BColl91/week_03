// console.log("You found me! ૮꒰ ˶• ༝ •˶꒱ა ");

// console.log(document.getElementsByTagName(`input`));

// const listItems = document.getElementsByTagName(`li`);

// listItems[3].textContent = "targeted by the code"

// for (let i = 0; i < listItem.length; i++){
//     listItem[i].style.color = `green`;
//     listItem[i].textContent = `I am index item number` + i;
// }

// const heading = document.getElementById('heading');

// // heading.textContent = 'My New Heading'
// heading.innerHTML = '<h1>New Heading</h1>'


//Target required HTML elements
// const heading = document.getElementById('heading');
// const list = document.querySelector('ul');
// const listItem = document.getElementsByClassName('listItem');

// heading.style.border = "3px solid green";
// list.style.backgroundColor = 'yellow';
// listItem[2].style.display = 'none';


// const heading= document.getElementById('heading');

// document.addEventListener('click', () => {
//     Headers.text.content = 'Its changed!'
// })



// const heading= document.getElementById('heading');
// heading.addEventListener('mouseover', () => {
//     heading.textContent = heading.textContent.toUpperCase()
// })
// heading.addEventListener('mouseout', () => {
//     heading.textContent = heading.textContent.toLowerCase()
// })


const heading = document.getElementById('heading')
const input = document.getElementById('inputBox')
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () =>{
    heading.textContent = input.value
})