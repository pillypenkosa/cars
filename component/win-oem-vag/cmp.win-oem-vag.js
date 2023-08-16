//console.log( '' );





class ComponentWinOemVag {


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
		arrCarsOem.forEach( k => {


			let analog = '';
			if ( k.analog ) {
				for ( let k1 in k.analog ) {

					let eachCode = '';
					if ( Array.isArray( k.analog[ k1 ] )) {
						if ( k.analog[ k1 ].length > 0 ) {

							eachCode += k1 + ' ' + k.analog[ k1 ];

							//console.log( k1, k.analog[ k1 ] );
						}


					}

					analog += eachCode + '; ';
				}

				analog = `<div class="analog">${ analog }</div>`;
			}


			let htmlHash = '';
			if ( k.hash ) {

				let hash1 = '';
				for ( let k2 in k.hash ) {

					let hash2 = `<span class="key-title">${ objCarsOemCat[ k2 ] }:</span> `;
					for ( let k3 in k.hash[ k2 ] ) {

						hash2 += `${ objCarsOemHash[ k3 ] }; `;
					}

					hash1 += `<div class="hash-${ k2 }">${ hash2 }</div>`;

					//htmlHash += `<div class="hash-${ k2 }">${ k.hash[ k2 ] }</div>`; 
				}

				htmlHash = `<div class="hash">${ hash1 }</div>`;
			}





			innerHTML += `<div class="each">
				<div class="img">
					<img src="img/carparts/vag/${ k.img ? k.img : k.id }.jpg">
				</div>
				<div class="info">
					<div class="title">${ k.title }</div>
					<div class="vag-oem">VAG ${ k.id }</div>
					${ htmlHash }
					${ analog }
				</div>
			</div>`;




		});



				//<div class="detail">${ objBuy[ k.detailID ].title }</div>

		//return innerHTML;

		return getComponentHtml({ tag: this.tagName, innerHTML, });
	}




}











