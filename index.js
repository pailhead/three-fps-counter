
var fragmentShader = require('./fps.frag.js');
var Stats = require('./Stats.js');

module.exports = function( THREE ){

	var NumberTexture = require('./NumberTexture.js')(THREE);
	var ScreenQuad = require( 'three-screen-quad')(THREE);

	var _camera = new THREE.PerspectiveCamera();

	function FPSCounter ( renderer , params ){

		params = undefined !== params ? params : {};
		params.left = undefined !== params.left ? params.left : '0px';
		params.bottom = undefined !== params.bottom ? params.bottom : '0px';
		params.width = undefined !== params.width ? params.width : '80px';
		params.height = undefined !== params.height ? params.height : '40px';

		if( undefined === renderer ) { console.warn( 'renderer not assigned'); return false }

		params.fragmentShader = fragmentShader;

		ScreenQuad.call( this , params );

		this._renderer = renderer;

		this.setScreenSize( renderer.getSize().width ,  renderer.getSize().height );

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

	}

	FPSCounter.prototype = Object.create( ScreenQuad.prototype );

	FPSCounter.constructor = FPSCounter;

	FPSCounter.prototype.render = function(){
			
		this._stats.update();

		var hijackedAutoClear = this._renderer.autoClear;

		this._renderer.autoClear = false;

		this._renderer.render( this._scene , _camera );
		
		this._renderer.autoClear = hijackedAutoClear;

	};

	return FPSCounter;

}