const play = document.querySelector('button');

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
	wrapper : svgContainer,
	animType: 'svg',
	loop: false ,
	autoplay: false,
	path: 'https://assets8.lottiefiles.com/packages/lf20_bpqtup0h.json'
});

play.addEventListener('click',()=>{
	// animItem.play();
	svgContainer.classList.remove('hide');
	animItem.goToAndPlay(0,true);
})

animItem.addEventListener('complete',() =>{
	svgContainer.classList.add('hide');
})