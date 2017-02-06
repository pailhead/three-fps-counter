
var NumberTexture = require('./NumberTexture.js');
var fragmentShader = require('./fps.frag.js');
var Stats = require('./Stats.js');

module.exports = function( THREE ){

	var ScreenQuad = require( 'three-screen-quad')(THREE);

	var _camera = new THREE.PerspectiveCamera();

	function FPSCounter ( renderer , params ){

		params = undefined === params ? { left : '0px' , bottom: '0px' , width:'80px' , height: '40px' } : params;

		if( undefined === renderer ) { console.warn( 'renderer not assigned'); return false }

		params.fragmentShader = fragmentShader;

		ScreenQuad.call( this , params );

		this._renderer = renderer;

		this.setScreenSize( renderer.getSize().width ,  renderer.getSize().width );

		this._scene = new THREE.Scene();

		this._scene.add( this );

		this.material.uniforms.uNumTex = {		type:'t',  	value: NumberTexture		};

		this.material.uniforms.uNumber = {		type:'v2', 	value: new THREE.Vector2()	};

		this.setNumber = function( n ){

			n = Math.max( 0 , Math.min( n , 99 ) ); //shader can handle 00 to 99 
			this.uniforms.uNumber.value.set(
				n < 10 ? 0 : Math.floor( n * .1 ),
				n % 10
			);
			
		}.bind( this.material );

		var that = this; 
		
		this._stats = new Stats( function( v ) {
			that.setNumber( v );
		});

		console.log( this );

	}

	FPSCounter.prototype = Object.create( ScreenQuad.prototype );
	FPSCounter.constructor = FPSCounter;

	FPSCounter.prototype.render = function(){
			
		this._stats.update();

		this._renderer.render( this._scene , _camera );

	};

	return FPSCounter;

}