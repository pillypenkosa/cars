//console.log( '' );





class ComponentMenu {


	static className = '';
	static tagName = '';

	static paramAttr = [];

	static arrArgs = [ 
		//{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		//{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		//{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 

	//static sex = '';
	//static country = '';

	//static filterHash = {};




	static html( className, tagName, data = null ) {


		//alert( className );
		//alert( tagName );


		this.className = className;
		this.tagName = tagName;
		
		this.paramAttr = [

			{ k: 'tag' 			, v: tagName 							, }, // tag ставити завжди першим у массиві
			//{ k: 'class' 		, v: 'active' 							, },
			//{ k: 'name' 		, v: 'Параметр name' 					, },
			//{ k: 'title' 		, v: 'Підказка title, яка вспливає' 	, },
			//{ k: 'selected' 	, v: '' 								, },
			//{ k: 'defer' 		, v: '' 								, },
			//{ k: 'data-id' 		, v: 'anyData' 							, },
			//{ k: 'onclick' 		, v: this.className + '.clc( ' + this.className + '.arrArgs )' 	, },

		];


		let name = 'html';
		let ok = `\x1b[32m ok ${ this.className }.${ name }() `;
		let err = `\x1b[31m err ${ this.className }.${ name }() `;

		const menu = [
			{ id: 'buy' 			, title: 'Buy' 				, },
			{ id: 'my_passat_b4' 	, title: 'My Passat B4' 	, },
			{ id: 'oem_vag' 		, title: 'OEM VAG' 			, },
			{ id: 'service' 		, title: 'Service' 			, },

			//{ id: 'engine' 			, title: 'Engines' 			, },
			//{ id: 'model' 			, title: 'Models' 			, },
			//{ id: 'oem' 			, title: 'OEM' 				, },



		];


		let navBtns = '';
		menu.forEach( k => {
			navBtns += `<div class="btn" data-id="${ k.id }" onclick="${ this.className }.clcBtn( this )">${ k.title }</div>`;
			//navBtns += `<div class="btn" data-id="${ k.id }" onclick="ComponentMiddle.win( this )">${ k.title }</div>`;



		});

		return getComponentHtml({ tag: this.tagName, innerHTML: navBtns, });
	}







	static clcBtn( elem ) {

		//console.log( elem.dataset.id );

		document.querySelectorAll( 'cmp-header .menu' )[ 0 ].innerHTML = '';



		ComponentMiddle.win( elem.dataset.id );




	}














/*
	static checkActiveHash( txt ) {

		if ( this.filterHash[ txt ] ) 
			return 'active';
		
		return '';
	}
*/




	static clcSex222( elem ) {

		const name 		= 'clcSex';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;



		//console.log( ok, 'elem.dataset.id:', elem.dataset.id );
		Router.urlGET.sex = elem.dataset.id;
		
		//console.log( ok, 'Router.urlGET:', Router.urlGET );
		this.setHashParamByOBJ();

		Router.ini();

		// подсветка меню
		this.activeLight();

		// загрузка контентк
		Router.loadContent();
	}



	static clcHash222( elem ) {

		const name 		= 'clcHash';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok, 'elem.dataset.id:', elem.dataset.id  );

		if ( Router.userHash[ elem.dataset.id ] ) {

			delete Router.userHash[ elem.dataset.id ];
		}
		else Router.userHash[ elem.dataset.id ] = 1;

		//console.log( ok, 'Router.userHash:', Router.userHash  );
		this.setHashParamByOBJ();

		Router.ini();

		// подсветка меню
		this.activeLight();

		// загрузка контентк
		Router.loadContent();
	}



	static changeCountry222( elem ) {
		const name 		= 'clcCountry';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;



		Router.urlGET.country = elem.value;


/*
		if ( !Router.urlGET.country ) 
			document.getElementById( 'component_menu_country_delete_1' ).remove();
*/


		//console.log( elem.dataset.id );
		//console.log( ok, elem.value );


		this.setHashParamByOBJ();

		Router.ini();

		// подсветка меню
		this.activeLight();

		// загрузка контентк
		Router.loadContent();
	}








	// сформувати параметр &hash=
	static setHashParamByOBJ222() {
		const name 		= 'setHashParamByOBJ';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok );
		//alert( Router.urlGET.country );


		let url = '';
		if ( Router.urlGET.sex ) 
			url += `&sex=${ Router.urlGET.sex }`;

		if ( Router.urlGET.country ) 
			url += `&country=${ Router.urlGET.country }`;

		let hashParam = '';
		for ( let k in Router.userHash ) 
			hashParam += k + '/'; 
		
		if ( hashParam ) 
			hashParam = '&hash=' + hashParam.slice( 0, -1 );
		
		if ( history.pushState )
			history.pushState( null, null, '?win=people' + url + hashParam );
	}



	// ініціалізація об'єкту за URL
	static setObjByHashParam222() {

		//console.log( Router.urlGET );
		//console.log( 'setObjByHashParam()' );

		if ( Router.urlGET ) {

			if ( Router.urlGET.hash ) {

				let arr = Router.urlGET.hash.split( '/' );

				arr.forEach( k => {
					this.filterHash[ k ] = 1;
				});
			}
		}
	}



	// підсвічування кнопок
	static activeLight222() {

		const name 		= 'activeLight';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;


		let arrSex = document.querySelectorAll( 'cmp-menu .sex .btn' );

		//console.log( ok );
		//console.log( ok, 'arr: ', arr );

		arrSex.forEach( k => {

			//alert( k.dataset.sex );

			k.classList.remove( 'active' );

			if ( Router.urlGET.sex == k.dataset.sex ) 
				k.classList.add( 'active' );

		});



		let arrHash = document.querySelectorAll( 'cmp-menu .hash .btn' );

		//console.log( ok );
		//console.log( ok, 'arr: ', arr );

		arrHash.forEach( k => {

			k.classList.remove( 'active' );

			if ( Router.userHash[ k.dataset.id ] ) {

				//console.log( Router.userHash );
				//console.log( k.dataset.id );
				k.classList.add( 'active' );
			}
		});



		//console.log( ok, Router.urlGET.country );


		// вибір країни в <select> за GET-параметром &country=
		if ( Router.urlGET.country ) {

			// приховування пункту меню <option>Обрати країну</option>
			let delOption = document.getElementById( 'component_menu_country_delete_1' );

			if ( delOption ) 
				delOption.remove();



			let elemOption = document.querySelectorAll( `cmp-menu select.country option[ value="${ Router.urlGET.country }"]` )[ 0 ];
			//console.log( ok, elemOption );


			elemOption.selected = true;



		}
	}
















}











