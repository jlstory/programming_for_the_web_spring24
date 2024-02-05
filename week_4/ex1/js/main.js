//global vars
const myEmptyDiv = document.querySelector('#myEmptyDiv');
const heading = document.createElement('h1')
// content
heading.innerHTML = 'Llamas do not bite. They spit when they are agitated, but that is mostly at each other.';
heading.style.cursor = 'pointer';   
//event listener - click     
heading.addEventListener('click', handleHeadingClick);
//add h1
myEmptyDiv.appendChild(heading);
//onclick function
function handleHeadingClick () {
document.body.style.backgroundColor = 'indigo';
}

