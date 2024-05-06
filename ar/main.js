window.addEventListener("load",function() {
	on_load();
});

function on_load(){
	alert('onload');
	document.getElementById('seichi').addEventListener('click', open('pdf/seichi.pdf'));
	document.getElementById('maincommu').addEventListener('click', open('pdf/maincommu.pdf'));
}

function open(url){
	window.open(url, '_blank');
	alert(url);
}