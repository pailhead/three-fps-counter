/**
 * @author mrdoob / http://mrdoob.com/
 */

// var Stats = function ( onFPScomputed ) {

function Stats ( onFPScomputed ){

	this.now = ( self.performance && self.performance.now ) ? self.performance.now.bind( performance ) : Date.now;

	this.startTime = this.now(), this.prevTime = this.startTime;
	this.frames = 0;

	// FPS

	this.fps = 0, this.fpsMin = Infinity, this.fpsMax = 0;

	// MS

	this.ms = 0, this.msMin = Infinity, this.msMax = 0;

	this.onFPScomputed = onFPScomputed || function(){};

	this.interval = 1000;

}

Stats.prototype = {

	end: function () {

		var time = this.now();
		this.ms = time - this.startTime;
		this.msMin = Math.min( this.msMin, this.ms );
		this.msMax = Math.max( this.msMax, this.ms );


		this.frames ++;

		if ( time > this.prevTime + this.interval ) {

			this.fps = Math.round( ( this.frames * this.interval  ) / ( time - this.prevTime ) );

			this.prevTime = time;
			
			this.frames = 0;	

			this.onFPScomputed( this.fps );

		}

		return time;

	},

	update: function () {

		this.startTime = this.end();

	}

}

module.exports = Stats;
	


