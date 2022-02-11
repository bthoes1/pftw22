// select myEmptyDiv and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of the variable
const heading = document.createElement('h1');
heading.innerHTML = 'Did you know that the scientific name of the llama is \'Llama Glama\'?';

// make background change color when you click the heading
heading.addEventListener('click', handleHeadingClick);
heading.style.cursor = 'pointer';
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = '#AAF0D1';
}