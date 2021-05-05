const play = document.querySelector('button');

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
	wrapper : svgContainer,
	animType: 'svg',
	loop: false ,
	autoplay: false,
	path: 'https://assets8.lottiefiles.com/packages/lf20_xldshlit.json'
});

play.addEventListener('click',()=>{
	animItem.play();
})