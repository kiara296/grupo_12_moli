
# INSERT categoryproduct
insert into categoryproduct() values(1, 'OFFER');
insert into categoryproduct() values(2, 'RECOMMENDED');
insert into categoryproduct() values(3, 'ALL');

# INSERT categoryuser
insert into categoryuser() values(1, 'ADMIN');
insert into categoryuser() values(2, 'GUEST');

#INSERT product
insert into product() values(
	1,
	'Frambuesas x 500gr',
	1550,
	20,
	'Frambuesas enteras IQF x 500gr. 100% natural',
	'frambuesas.png',
	'imagen de frambuesas',
	'Frambuesas naturales.',
	'Idealmente dejar descongelar en la heladera. De no ser posible se puede descongelar en el microondas.',
	'409 Kcal/51gr Hdc/17gr prot./15gr grasas tot.',
	1
);
        
insert into product() values(
	3,
	'Tarta de espinaca grande',
	600,
	15,
	'Tarta casera de espinaca. 8 porciones. 100% natural',
	'tartaProducto.png',
	'imagen de tarta de espinaca',
	'Espinaca 26,2%, harina de trigo (gluten), crème fraîche líquida 14,5% (leche), leche desnatada, mantequilla 8,4% (leche), huevo de gallina de corral (líquido, pasteurizado), agua, Parmigiano Reggiano DOP * 4,2% (contiene leche), piñones 4%, almidón y harina de arroz, sal, pimienta.',
	'Se puede descongelar previamente o sacar del freezer directo al horno bajo. ',
	'409 Kcal/51gr Hdc/17gr prot./15gr grasas tot.',
	2
);

insert into product() values(
	4,
	'Papas baston x 500gr',
	270,
	15,
	'Papas baston IQF x 500gr. 100% natural',
	'papas.png',
	'imagen de papas baston',
	'Papa natural 100%',
	'Cocinar al horno directo o en una sarten. ',
	'409 Kcal/51gr Hdc/17gr prot./15gr grasas tot.',
	3
);

insert into product() values(
	5,
	'Wok de verduras x 500gr',
	400,
	15,
	'Verduras cortadas en juliana IQF. 100% natural',
	'wokPlato.png',
	'imagen de wok de verduras',
	'Morron rojo, Cebolla, Brocoli, Choclo, Zanahoria. 100% natural',
	'Descongelar en la heladera, el dia anterior a consumir. Tambien se puede cocinar directo al fuego sin descongelar. ',
	'409 Kcal/51gr Hdc/17gr prot./15gr grasas tot.',
	1
);

insert into product() values(
	6,
	'Ravioles x 500gr',
	500,
	15,
	'Ravioles de hongos patagonicos. 100% natural',
	'raviol.jpg',
	'imagen de ravioles',
	'Sémola de trigo duro (gluten), ricotta 11,9%suero (leche), leche, nata (leche), sal, regulador de acidez: ácido cítrico], agua, huevo , cebolla asada, mozzarella al 3,3% (leche, sal, fermentos lácticos, coagulante, regulador de acidez: ácido cítrico), espinaca 3%, cebolla. ',
	'Hervir agua. Salar el agua a gusto. Cocinar durante 6 a 7 minutos. Sacar inmediatamente.',
	'409 Kcal/51gr Hdc/17gr prot./15gr grasas tot.',
	2
);

insert into product() values(

);



insert into user() values(
	1,
    'ppalala@mail.com',
    '$2a$10$fXJqByp1snzU1VW/F9wr0u9VrI1yRr2KSoY/hXJetyhkJcRzzi4TG',
    'Pepe',
    'Palala',
    1,
    null
);



