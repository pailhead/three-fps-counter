module.exports = function( THREE ){


var NumberTexture = require('./NumberTexture.js');

var ScreenQuad = require('three-screen-quad')(THREE);

//make this prettier
var vertexShader = ( new.ScreenQuad().material.vertexShader );

console.log( vertexShader );

function FPSMaterial (){

	THREE.ShaderMaterial.call( this , {
		uniforms:{
			uPosition: {	type:'v4',  value: new THREE.Vector4()	}, //could get the one from window?
			uNumTex: {		type:'t',  	value: NumText				},
			uNumber: {		type:'v2', 	value: new THREE.Vector2()	}
		},
		vertexShader: vertexShader,
		fragmentShader: require('./fps.frag.js'),
		depthTest: false
	});

}

FPSMaterial.prototype = Object.create( THREE.ShaderMaterial.prototype );
FPSMaterial.constructor = FPSMaterial;

FPSMaterial.prototype.setNumber = function( n ){

	n = Math.max( 0 , Math.min( n , 99 ) ); //shader can handle 00 to 99 
	this.uniforms.uNumber.value.set(
		n < 10 ? 0 : Math.floor( n * .1 ),
		n % 10
	);
	
}

return FPSMaterial;

}