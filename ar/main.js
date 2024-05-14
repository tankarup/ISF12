
AFRAME.registerComponent('url_open', {
	schema: {
		url: {default: ''}
	},
	init: function(){
		this.el.addEventListener('click', () => {
			window.open(this.data.url, '_blank');
			console.log(this);
		});
	},
});

