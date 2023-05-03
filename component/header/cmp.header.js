//console.log( '' );









class ComponentHeader {




	static className = '';
	static paramAttr = [];




	static html( className, tagName, data = null ) {

		this.className = className;


		let name = 'html';
		let ok = `\x1b[32m ok ${ this.className }.${ name }() `;
		let err = `\x1b[31m err ${ this.className }.${ name }() `;

		//console.log( ok, 'завантаження компонента...' );




		//alert( className );
		//alert( tagName );


		// &#9776; ☰
		// &#8801; ≡


		let innerHTML = `
			<div class="title">${ appProjectName }</div>
			<div class="btn-menu" onclick="${ this.className }.clcBtnMenu()">&#8801;</div>
			<div class="menu"></div>
		`;


		return getComponentHtml({ tag: 'header', 
			param: [
				//{ k: 'class' 		, v: 'active' 					, },
				//{ k: 'name' 		, v: 'Имя Розы' 				, },
				//{ k: 'title' 		, v: 'Всплывающая подсказка' 	, },
				//{ k: 'data-id' 		, v: 'any-data' 				, },
				//{ k: 'onclick' 		, v: `${ f }( ${ arg } )` 		, },
				//{ k: 'selected' 	, v: '' 						, },
				//{ k: 'defer' 		, v: '' 						, },
			], 
			innerHTML,
		});
	}



	// відображення навігаційного меню
	static clcBtnMenu() {

		//alert();
		let content = document.querySelectorAll( 'cmp-header .menu' )[ 0 ];
		content.innerHTML = Component( 'Menu' );
	}







}











