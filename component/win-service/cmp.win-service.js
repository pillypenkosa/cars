//console.log( '' );





class ComponentWinService {


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
		arrCarsService.forEach( k => {

			//console.log( k.detailID, objBuy[ k.detailID ] );

			let parts = k.detailID ? objBuy[ k.detailID ].title : ( k.title ? k.title : '' );
			let manufacturer = k.detailID ? ( objBuy[ k.detailID ].manufacturer ? objBuy[ k.detailID ].manufacturer : '' ) : '';
			let mark = k.detailID ? ( objBuy[ k.detailID ].mark ? objBuy[ k.detailID ].mark : '' ) : '';

			let mileage = k.mileage ? `<span class="mileage">// ${ k.mileage } км</span>` : '';




			innerHTML += `<div class="${ this.tagName }-each">
				<div class="parts">${ parts }</div>
				<div class="manufacturer">${ manufacturer } ${ mark }</div>
				<div class="act">${ objCarServiceAct[ k.act ] }</div>
				<div class="date">${ k.date } ${ mileage }</div>
			</div>`;




		});

				//<div class="detail">${ objBuy[ k.detailID ].title }</div>

		//return innerHTML;

		return getComponentHtml({ tag: this.tagName, innerHTML, });
	}







	static clcBtn222( elem ) {




		console.log( elem.dataset.id );

		document.querySelectorAll( 'cmp-header .menu' )[ 0 ].innerHTML = '';



	}


}











