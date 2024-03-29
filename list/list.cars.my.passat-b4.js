const arrListCarsMyPassatB4 = [

	{
		id: 'car', title: 'Автомобіль',
		body: [
			{ key: 'Марка' 						, val: 'Volkswagen' 		, },
			{ key: 'Модель' 					, val: 'Passat B4 Variant' 	, },
			{ key: 'WIN' 						, val: 'WVWZZZ3AZRE083449' 	, site: [ 
					{ title: 'vwts.ru', href: 'https://vwts.ru/vin.html', },
				], 
			},
			{ key: 'Рік випуску' 	 			, val: '1994' 				, },
			{ key: 'Маса без навантаження' 		, val: '1310 кг' 			, },
			{ key: 'Маса повна' 				, val: '1800 кг' 			, },
			{ key: 'Дата придбання' 			, val: '5.08.2020' 			, },
			{ key: 'Свідоцтво про реєстрацію' 	, val: 'СХС 469162' 		, },
		],
	},
	{
		id: 'engine', title: 'Двигун',
		body: [
			{ key: 'КОД' 						, val: '2E' 	, site: [ 
					{ title: 'otoba.ru', href: 'https://otoba.ru/dvigatel/vw/2e.html', },
				], 
			},

			{ key: 'Об\'ем' 						, val: '1984 см<sup>3</sup>' , },
			{ key: 'Витрата бензину' 				, val: '604км / 70л // ( 11,67л / 100км ) + остача ? + прогрівання' , },
			{ key: 'Потужність' 					, val: '115 л.с.' 			, },
			{ key: 'Крутний момент' 				, val: '166 Нм' 			, },
			{ key: 'Діаметр циліндра' 				, val: '82.5 мм' 			, },
			{ key: 'Хід поршня' 					, val: '92.8 мм' 			, },
			{ key: 'Ступень стиснення' 				, val: '10' 				, },
			{ key: 'Об\'єм охолоджувальної рідини' 	, val: '5 л' 				, },
			{ key: 'Об\'єм олії в двигуні' 			, val: '4 л' 				, },
			{ key: 'Олія' 							, val: 'VW 500.00/501.01/502.00, ACEA - A3, API - SH,SJ', },
		],
	},
	{	
		id: 'gearbox',
		title: 'КПП',
		body: [
			{ key: 'Код' 						, val: 'CNL' 					, },
			{ key: 'Тип' 						, val: '02A' 					, },
			{ key: 'Управління' 				, val: 'Механічна' 				, },
			{ key: 'Кількість передач' 			, val: '5' 						, },
			{ key: 'Олія' 						, val: 'VAG G052726A2, 75W-90' 	, },
			{ key: 'Об\'єм олії в коробці' 		, val: '2 л' 					, },

			{ key: 'www' 					, val: 'Олія' 			, site: [ 
					{ title: 'avto-flot.ru', href: 'https://avto-flot.ru/maslo-korobka/volkswagen/passat.html', },
				], 
			},
		],
	},

	{	
		id: 'gbo4', title: 'ГБО-4',
		body: [

			{ key: 'Встановлено' 	, val: '2023-03-30' 						, },
			{ key: 'Пробіг' 		, val: '443000 км' 							, },
			{ key: 'Редуктор' 		, val: 'Tomasetto' 							, },
			{ key: 'Форсунки' 		, val: 'Valtek' 							, },
			{ key: 'Бак' 			, val: 'Stag (42 л), старий від ГБО-2' 		, },
		],
	},

	{	
		id: 'body', title: 'Кузов',
		body: [
			{ key: 'Колір' 						, val: 'R8 (LA9V) // Brilliantschwarz Metallic' 	, site: [ 
					{ title: 'infotables.ru' 	, href: 'https://infotables.ru/avtomobili/27-kody-emalej/922-kody-tsveta-kuzova-folksvagen', },
				], 
			},
			{ key: 'Кліренс' 					, val: '119 мм' 			, },
			{ key: 'Фари тюнінг' 				, val: 'Junyan LPVW97 Daylight Black' 			, },
		],
	},

	{	
		id: 'body', title: 'Салон',
		body: [
			{ key: 'Пічка' 					, val: 'Патрубки подача/зворотка - діаметр 20 мм' 			, },
		],
	},
	{	
		id: 'control',
		title: 'Керування',
		body: [
			{ key: 'ГУР' 						, val: 'Олія VAG G004000M2, 0.8 л' 	, },
			{ key: 'Гальмівна рідина' 			, val: 'DOT 4, 2 л' 				, },
		],
	},
	{	
		id: 'chassis', title: 'Ходова частина',
		body: [

			{ key: 'Шини' 			, val: '185/65/R14 86 T M+S Goodyear UltraGrip Ice 2'		, },
			{ key: 'Шини' 			, val: '185/65/R14 86 T M+S Nokian W' 						, },

			{ key: '---' 				, val: '--- --- --- --- --- --- ---' 					, },

			{ key: 'Ступиця' 			, val: '57.1 мм' 										, },
			{ key: 'Разболтовка' 		, val: '4*100 мм ( 4 отвори на окружності_діаметром_100мм)  // PCD (Pitch Circle Diameter - крок/окружність/діаметр )' 	, },
			{ key: 'Болты' 				, val: 'М12, крок 1.5 мм' 								, },
			{ key: 'Тиск' 				, val: '2.1 бар' 										, },
			{ key: 'Заводські' 			, val: 'Шина - 175/70/R14, диск - 5.5J x 14 ET38' 		, },
			{ key: 'Заводські' 			, val: 'Шина - 185/65/R14 86 T, диск - 5.5J x 14 ET38' 	, },
			{ key: 'Інші' 				, val: 'Шина - 195/60/R14 86 T, диск - 6J x 14 ET38' 	, },
			{ key: 'Інші' 				, val: 'Шина - 195/55/R15, диск - 6J x 15 ET35' 		, },
			{ key: 'Інші' 				, val: 'Шина - 205/50/R15 85S, диск - 6J x 15 ET33' 	, },
			{ key: 'Інші' 				, val: 'Шина - 195/50/R16, диск - 6J x 16 ET38' 		, },
			{ key: 'Інші' 				, val: 'Шина - 215/45/R16, диск - 7J x 16 ET35' 		, },
			
			{ key: '---' 				, val: '--- --- --- --- --- --- ---' 					, },
			{ key: 'Розшифровка шин' 	, val: '185 / 65 / R14 / W / 86 / T / M+S' 			, },
			{ key: '185' 				, val: 'ширина шини - 185 мм', },
			{ key: '65' 				, val: 'висота профілю 65% від ширини', },
			{ key: 'R14' 				, val: 'діаметр шини внутрішній - 14 дюймів', },
			{ key: 'W' 					, val: '', },
			{ key: '86' 				, val: 'Індекс вантажопідйомності шини', },
			{ key: 'T' 					, val: 'Індекс швидкості', },
			{ key: 'M+S' 				, val: 'Бруд та сніг (Mud + Snow)', },
			{ key: 'Tubeless (TL)' 		, val: 'Безкамерна', },
			{ key: 'Маркування шин' 	, val: '<a href="https://shina.ua/markirovka-shin-rasshifrovka" target="_blank">www.shina.ua</a>', },
			{ key: 'Маркування шин' 	, val: '<a href="http://carprice.kharkov.ua/yak-rozshifruvati-markuvannya-shin/" target="_blank">www.carprice.kharkov.ua</a>', },

			{ key: '---' 				, val: '--- --- --- --- --- --- ---' , },
			{ key: 'Розшифровка дисків' , val: '5.5 - J - x - 14 - 4/100 - ET38 - d 66.6' 	, },
			{ key: '5.5' 				, val: '5.5 дюймів - ширина диску', },
			{ key: 'J' 					, val: 'форма закраїн диску', },
			{ key: 'x' 					, val: 'диск не роздільний', },
			{ key: '14' 				, val: '14 дюймів - діаметр диску ( посадочне місце для шини )', },
			{ key: '4/100' 				, val: '4 отвори на 100-міліметровій окружністі', },
			{ key: 'ET38' 				, val: '38 мм - виліт (додатній) // відстань від посадочного місця до уявної осі симетрії диску' , },
			{ key: 'd 66.6' 			, val: 'центральний посадочний діаметр диску на ступицю ', },
			{ key: 'Маркування дисків' 	, val: '<a href="https://razmerkoles.ru/size/volkswagen/passat/1994/#trim-b4-1993-1997-20--114" target="_blank">www.razmerkoles.ru</a>', },

			{ key: '---' 					, val: '--- --- --- --- --- --- ---' 					, },
			{ key: 'Індекс вантажопідйомность' 	, val: '' 			, },
			{ key: '62' 	, val: '265 кг' 	, },
			{ key: '63' 	, val: '272 кг' 	, },
			{ key: '64' 	, val: '280 кг' 	, },
			{ key: '65' 	, val: '290 кг' 	, },
			{ key: '66' 	, val: '300 кг' 	, },
			{ key: '67' 	, val: '307 кг' 	, },
			{ key: '68' 	, val: '315 кг' 	, },
			{ key: '69' 	, val: '325 кг' 	, },
			{ key: '70' 	, val: '335 кг' 	, },
			{ key: '71' 	, val: '345 кг' 	, },
			{ key: '72' 	, val: '355 кг' 	, },
			{ key: '73' 	, val: '365 кг' 	, },
			{ key: '74' 	, val: '375 кг' 	, },
			{ key: '75' 	, val: '387 кг' 	, },
			{ key: '76' 	, val: '400 кг' 	, },
			{ key: '77' 	, val: '412 кг' 	, },
			{ key: '78' 	, val: '425 кг' 	, },
			{ key: '79' 	, val: '437 кг' 	, },
			{ key: '80' 	, val: '450 кг' 	, },
			{ key: '81' 	, val: '462 кг' 	, },
			{ key: '82' 	, val: '475 кг' 	, },
			{ key: '83' 	, val: '487 кг' 	, },
			{ key: '84' 	, val: '500 кг' 	, },
			{ key: '85' 	, val: '515 кг' 	, },
			{ key: '86' 	, val: '530 кг' 	, },
			{ key: '87' 	, val: '545 кг' 	, },
			{ key: '88' 	, val: '560 кг' 	, },
			{ key: '89' 	, val: '580 кг' 	, },
			{ key: '90' 	, val: '600 кг' 	, },
			{ key: '91' 	, val: '615 кг' 	, },
			{ key: '92' 	, val: '630 кг' 	, },
			{ key: '93' 	, val: '650 кг' 	, },
			{ key: '94' 	, val: '670 кг' 	, },
			{ key: '95' 	, val: '690 кг' 	, },
			{ key: '96' 	, val: '710 кг' 	, },
			{ key: '97' 	, val: '730 кг' 	, },
			{ key: '98' 	, val: '750 кг' 	, },
			{ key: '99' 	, val: '775 кг' 	, },
			{ key: '100' 	, val: '800 кг' 	, },
			{ key: '101' 	, val: '825 кг' 	, },
			{ key: '102' 	, val: '850 кг' 	, },
			{ key: '103' 	, val: '875 кг' 	, },
			{ key: '104' 	, val: '900 кг' 	, },
			{ key: '105' 	, val: '925 кг' 	, },
			{ key: '106' 	, val: '950 кг' 	, },
			{ key: '107' 	, val: '975 кг' 	, },
			{ key: '108' 	, val: '1000 кг' 	, },
			{ key: '109' 	, val: '1030 кг' 	, },
			{ key: '110' 	, val: '1060 кг' 	, },
			{ key: '111' 	, val: '1090 кг' 	, },
			{ key: '112' 	, val: '1120 кг' 	, },
			{ key: '113' 	, val: '1150 кг' 	, },
			{ key: '114' 	, val: '1180 кг' 	, },
			{ key: '115' 	, val: '1215 кг' 	, },
			{ key: '116' 	, val: '1250 кг' 	, },
			{ key: '117' 	, val: '1285 кг' 	, },
			{ key: '118' 	, val: '1320 кг' 	, },
			{ key: '119' 	, val: '1360 кг' 	, },
			{ key: '120' 	, val: '1400 кг' 	, },
			{ key: '121' 	, val: '1450 кг' 	, },
			{ key: '122' 	, val: '1500 кг' 	, },
			{ key: '123' 	, val: '1550 кг' 	, },

			{ key: '---' 					, val: '--- --- --- --- --- --- ---' 					, },
			{ key: 'Індекс швидкості' 	, val: '' 			, },
			{ key: 'G' 			, val: '90 км/год' 	, },
			{ key: 'J' 			, val: '100 км/год' 	, },
			{ key: 'K' 			, val: '110 км/год' 	, },
			{ key: 'L' 			, val: '120 км/год' 	, },
			{ key: 'M' 			, val: '130 км/год' 	, },
			{ key: 'N' 			, val: '140 км/год' 	, },
			{ key: 'P' 			, val: '150 км/год' 	, },
			{ key: 'Q' 			, val: '160 км/год' 	, },
			{ key: 'R' 			, val: '170 км/год' 	, },
			{ key: 'S' 			, val: '180 км/год' 	, },
			{ key: 'T' 			, val: '190 км/год' 	, },
			{ key: 'H' 			, val: '210 км/год' 	, },
			{ key: 'V' 			, val: '240 км/год' 	, },
			{ key: 'W' 			, val: '270 км/год' 	, },
			{ key: 'Y' 			, val: '300 км/год' 	, },
			{ key: 'VR' 		, val: '> 210 км/год' 	, },
			{ key: 'ZR' 		, val: '> 240 км/год' 	, },
			{ key: 'ZR (Y)' 	, val: '> 300 км/год' 	, },

			
		],
	},
	{	
		id: 'light',
		title: 'Освітлення',
		body: [
			{ key: 'www' 					, val: 'Лампи' 			, site: [ 
					{ title: 'etlib.ru', href: 'https://etlib.ru/tehdata/data?id=1730#ad_sg_21', },
				], 
			},


			{ key: '---' 			, val: '--- Тюнінг --- ' 	, },

			{ key: 'Передні фари' 			, val: 'LPVW40, ангел, світлі' 	, },
			{ key: 'Передні фари' 			, val: 'LPVW41, ангел, темні' 	, },
			{ key: 'Передні фари' 			, val: 'LPVW96, диявол, світлі' , },
			{ key: 'Передні фари' 			, val: 'LPVW97, диявол, темні' 	, },

			{ key: 'Задні фари' 			, val: 'LTVW22, світлі' , },
			{ key: 'Задні фари' 			, val: 'LТVW56, темні' 	, },

			{ key: 'Бокові поворотники' 	, val: 'KBVW02, світлі' , },
			{ key: 'Бокові поворотники' 	, val: 'KBVW06, темні' 	, },

			{ key: '---' 			, val: '--- Магазини --- ' 	,  site: [ 
					{ title: 'design-tuning.com', href: 'https://design-tuning.com/cat_item/auto-11000-328-0/', },
				],},

		],
	},
	{	
		id: 'vag_com',
		title: 'VAG COM',
		body: [
			{ 
				key: 'Відеоінструкція', 
				val: '', 
				site: [ 
					{ title: 'youtube.com', href: 'https://www.youtube.com/watch?v=OZlzpd1M7Mw', },
				],   
			},

			{ 
				key: 'ПЗ', 
				val: 'VCDS 22.3 (пароль: Vag12345)', 
				site: [ 
					{ title: 'drive.google.com', href: 'https://drive.google.com/file/d/1BAckpBdCncuTk9622DknMWn52ZZscO2R/view', },
				],   
			},
		],
	},












/*

	{
		title: '',
		body: [

			{ key: '' 						, val: '' 	, site: [ 
					{ title: '', href: '', },
				], 
			},

		],
	},



*/






];





