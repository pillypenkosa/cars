//console.log( '' );





class ComponentWinBuy {


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


		let innerHTML = '';
		arrBuy.forEach( k => {

			if ( k.cat.car ) {

				let note = k.note ? `<div class="note">${ k.note }</div>` : '';

				let cost = '';
				if ( k.cost ) {
					if ( k.cost.total ) {

						let total = k.cost.total ? '<span class="total">' + k.cost.total + ' грн</span>' : '';
						let price = k.cost.price ? k.cost.price : '';
						let item = k.cost.item ? k.cost.item : '';
						let unit = k.cost.unit ? k.cost.unit : '';
						
						cost = total + ' = ' + price + ' грн * ' + item + ' ' + unit;
					}
				}


				let manufacturer = '';
				if ( k.manufacturer ) 
					manufacturer += `<div class="manufacturer">${ k.manufacturer } ${ k.mark ? k.mark : '' }</div>`;


				innerHTML += `<div class="each">
					<div class="title">${ k.title }</div>
					${ manufacturer }
					<div class="cost">${ cost }</div>
					${ note }
				</div>`;

			}

			//console.log( k );

		});


		//return innerHTML;

		return getComponentHtml({ tag: this.tagName, innerHTML, });
	}







	static clcBtn222( elem ) {




		console.log( elem.dataset.id );

		document.querySelectorAll( 'cmp-header .menu' )[ 0 ].innerHTML = '';



	}


}











