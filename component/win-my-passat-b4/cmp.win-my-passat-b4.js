//console.log( '' );





class ComponentWinMyPassatB4 {


	static className = '';
	static tagName = '';

	static paramAttr = [];

	static arrArgs = [ 
		//{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		//{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		//{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 

	static sex = '';
	static country = '';


	static filterHash = {};




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


		let htmlMyCar = '';
		arrListCarsMyPassatB4.forEach( k => {

			let htmlEachBody = '';

			k.body.forEach( k1 => {

				let site = '';

				if ( k1.site ) 
				{
					if ( k1.site.length ) 
					{
						k1.site.forEach( k2 => {
							site += `<a href="${ k2.href }" target="_blank">www.${ k2.title }</a>, `;
						});
					}
				}

				//console.log( site );

				htmlEachBody += `<div class="param">
					<span class="key">${ k1.key }:</span> ${ k1.val }
					${ site ? '<span class="key">//</span> ' + site.substring( 0, site.length - 2 ) : '' }

				</div>
				`;
			});

			htmlMyCar += `
				<div class="${ this.tagName }-each">
					<div class="title">${ k.title }</div>
					<div class="body">${ htmlEachBody }</div>
				</div>
			`;
		});



		return getComponentHtml({ tag: this.tagName, innerHTML: htmlMyCar, });
	}







	static clcBtn222( elem ) {




		console.log( elem.dataset.id );

		document.querySelectorAll( 'cmp-header .menu' )[ 0 ].innerHTML = '';



	}


}











