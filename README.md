# FPSCounter

FPS counter that updates in the webgl canvas. 


## Files

* index.js

  main

* fps.frag.js

  frag shader


* NumberTexture.js

  generates the numbers texture

* Stats.js

  computes fps - Stripped down [Stats.js](https://github.com/mrdoob/stats.js/)



## Constructor




* **FPSCounter( *renderer:[ THREE.WebGLRenderer* ] , parameters )**

  A renderer from the main app has to be passed 


## Properties

extends three-screen-quad


## Methods

* **void setNumber( *number:[int]* )**

  sets the number between 00 and 99, refreshes the uniform
  
## Usage

  ```javascript
    mainRenderLoop(){
    	renderer.render(mainScene, mainCamera);
    	FPSCounter.render();
    }
  ```

  will draw the effect over a scene 
