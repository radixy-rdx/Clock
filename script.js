window.onload = function() {
	window.setInterval(function() {
		let date = new Date();

		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();


		if (hours < 10) hours = '0' + hours;
		let clock = hours + ':' + minutes + ':' + seconds;
		document.getElementById('time').innerHTML = clock;
	});
}