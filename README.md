# FPSCounter

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

FPS counter for [three.js](https://github.com/mrdoob/three.js/) that updates in the webgl canvas. Simple 2 digit renderer. Extends [three-screen-quad](https://www.npmjs.com/package/three-screen-quad). See this [live](http://dusanbosnjak.com/test/webGL/three-screen-quad/).


## Files

* **index.js**

  main

* **fps.frag.js**

  frag shader


* **NumberTexture.js**

  generates the numbers texture

* **Stats.js**

  computes fps - Stripped down [Stats.js](https://github.com/mrdoob/stats.js/)



## Constructor

* **FPSCounter( *renderer:[ THREE.WebGLRenderer* ] , parameters )**

  A renderer from the main app has to be passed, along with parameters for [three-screen-quad](https://www.npmjs.com/package/three-screen-quad).
  ```javascript
  params:
    top: Number || String     //default: null
    left: Number || String    //default: 0
    right: Number || String   //default: null
    bottom: Number || String  //default: 0
    width: Number || String   //default: '80px'
    height: Number || String  //default: '40px'
  ```

## Properties

extends [three-screen-quad](https://www.npmjs.com/package/three-screen-quad).


## Methods

* **void setNumber( *number:[int]* )**

  sets the number between 00 and 99, refreshes the uniform
  
## Usage

[![NPM](https://nodei.co/npm/three-fps-counter.png)](https://npmjs.org/package/three-fps-counter)

  ```javascript
    mainRenderLoop(){
    	renderer.render(mainScene, mainCamera);
    	FPSCounter.render();
    }
  ```

  will draw the effect over a scene 


## Test
```
npm install
npm start
```

You should see a cube spinning and the counter in the lower left corner.

