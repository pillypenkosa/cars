//console.log( 'header' );




class ComponentMiddle {



	static className = '';
	static tagName = '';





	static html( className, tagName, data = null ) {


		this.className = className;
		this.tagName = tagName;



		let name = 'html';
		let ok = `\x1b[32m ok ${ this.className }.${ name }() `;
		let err = `\x1b[31m err ${ this.className }.${ name }() `;


		//console.log( ok );



		//const title = 'Головна';
		document.title = appProjectName + ' ' + appVersion;



		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				<div id="content"></div>
			`, 
		});
	}




	static win( id ) {

		let content = document.getElementById( 'content' );
		let html = '';

		//console.log( id );


		if ( id == 'my_passat_b4' )
			html = Component( 'Win-My-Passat-B4' );






		content.innerHTML = html;


	}









	static innerHtml222( id ) {

		let html = '';


		//alert( id );



		let num = 1;
		arrBuyNeed.forEach( ( k, i ) => {
			if ( k.store[ id ] ) {
				html += `<div class="each">
					<span class="num">${ num++ })</span>
					<span class="title">${ k.title }</span>
					<span class="store">// ${ objStore[ id ].title }</span>
				</div>`;
			}
		});








		document.getElementById( 'content' ).innerHTML = html;

	}







}











