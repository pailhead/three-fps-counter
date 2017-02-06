# FPSCounter

FPS counter that updates in the canvas, unlike Stats that does crazy stuff with the dom



## Files

* FPSCounter.js

  main

* fps.frag

  frag shader

* fps.vert

  vert shader

* NumText.js

  generates the numbers texture

* Stats.js

  computes fps - gutted Stats from three



## Constructor




* **FPSCounter( *renderer:[ THREE.WebGLRenderer* ] )**

  A renderer from the main app has to be passed 


## Properties

* **left:[ *int* ]**

  distance in pixels from canvas left edge


* **bottom:[ *int* ]**

  distance in pixels from canvas bottom edge


* **width:[ *int* ]**

  width in pixels


* **height:[ *int* ]**

  height in pixels


* **renderer:[ *THREE.WebGLRenderer* ]**

  should maybe be private


## Methods

* **void computeUniform()**

  refreshes shader uniform, should be called on canvas/window resize
  TODO: rename

* **void setNumber( *number:[int]* )**

  sets the number between 00 and 99, refreshes the uniform

* **void update()**

  updates stats ( *deltaTime* ), computes FPS every 1 second

* **void render()**

  renders the effect

  for example

  ```javascript
    mainRenderLoop(){
    	renderer.render(mainScene, mainCamera);
    	FPSCounter.render();
    }
  ```

  will draw the effect over a scene 
