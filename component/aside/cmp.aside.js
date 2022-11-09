//console.log( 'aside' );









class ComponentAside {

	static tag 	= 'aside';



	static arrBtns = [


		{ title: 'Двигуни' 			, id: 'engine' 			, },




	];




	static index() {


		//let htmlBtns = '';

		let html = '';


		this.arrBtns.forEach( k => {
			html += `<div class="btn" data-id="${ k.id }" onclick="ComponentAside.clc( '${ k.id }' )">${ k.title }</div>`;
		});

		return getComponentHtml( this.tag, html );
	}




	static clc( id ) {

		//console.log( id );


		// подсветка кнопок
		btnLight( 'cmp-aside', id );



		// очистка контента

		//let content = document.querySelectorAll( 'cmp-content' )[ 0 ];
		let content = document.getElementById( 'content' );
		content.innerHTML = '';




		if ( id == 'engine' ) 
			content.innerHTML = ComponentCarEngine.index();



	} 








}















