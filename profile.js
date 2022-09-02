const favColor = (event) => {
    event.preventDefault();
    alert('My Favorite Color is Red!')
}
const favPlace = (event) => {
    event.preventDefault();
    alert('My Favorite Place is Iceland');
}
const favRit = (event) => {
    event.preventDefault();
    alert('My Favorite Ritual is my Bedtime Ritual');
}


document.querySelector('#color').addEventListener('click', favColor);
document.querySelector('#place').addEventListener('click', favPlace);
document.querySelector('#ritual').addEventListener('click', favRit);