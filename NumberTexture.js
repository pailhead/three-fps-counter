
module.exports = function( THREE ){

var ss = 6; //size 

var numbers = [
	15324974,
	14815428,
	32553487,
	16267791,
	17333809,
	16268351,
	15252542,
	4334111,
	15252014,
	16284206
];

var data = new Uint8Array( numbers.length * ss * ss * 3 );

var organized = [];

var ind;

for ( var i = 0 ; i < 6 ; i ++ ) organized.push([]);

for( var i = 0 ; i < numbers.length * 6 ; i++ ){
	organized[0].push(0);

}

for( var r = 0 , r1 = 5; r < 5 ; r ++, r1-- ){

	for ( var n = 0 ; n < numbers.length ; n ++ ) {

		var num = numbers[n];

		for( var c = 0 ; c < 5 ; c ++ )

			organized[ r1 ].push( ( num & ( 1 << ( r * 5 + c ) ) ) ? 255 : 0 );
			
		organized[r1].push( 0 ); //padding

	}

}	


for ( var i = 0 , s = 0 ; i < organized.length ; i ++ )
	
	for ( var j = 0 ; j < organized[i].length ; j ++ )
		
		for ( var c = 0 ; c < 3 ; c ++ ){
			
			data[ s ++ ] = organized[i][j];
		
		}

var texture = new THREE.DataTexture( 
	data , 
	numbers.length * ss , 
	ss , 
	THREE.RGBFormat 
);

texture.needsUpdate = true;

return texture;

}

