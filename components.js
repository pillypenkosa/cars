const components = [
	'car-engine',

	'header',
	'aside',
	'middle',
];




const lists = [
	'car.engine',
	//'',
];





components.forEach( k => {

	let css = document.createElement( 'link' );
	css.href = `component/${ k }/cmp.${ k }.css`;
	css.rel = 'stylesheet'; 
	css.type = 'text/css'; 
	document.head.append( css );

	let script = document.createElement( 'script' );
	script.src = `component/${ k }/cmp.${ k }.js`;
	//script.setAttribute( 'defer', '' );
	component.append( script );
});











