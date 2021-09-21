const button = document.querySelector('button');

function clickHandler(message: string) {
	let userName = 'User';
	console.log('Clicked' + message);
}

if (button) {
	button.addEventListener(
		'click',
		clickHandler.bind(null, 'This will not throw the TS error')
	);
}
