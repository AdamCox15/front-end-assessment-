console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form was submitted successfully!');
}
function duckMouse(event){
	event.preventDefault();
	alert('Your an absolute legend!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector('#duck').addEventListener('mouseover', duckMouse);