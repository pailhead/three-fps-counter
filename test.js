var createApp = require('canvas-testbed')

var THREE = require('three')
var FPSCounter = require('./')(THREE)

createApp(render, start, {
    context: 'webgl',
    onResize: resize
});

var renderer,
    scene,
    camera,
    controls,
    fpsCounter

var box;

function start(gl, width, height) {

    renderer = new THREE.WebGLRenderer({
        canvas: gl.canvas
    });

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, width/height, 1, 1000);
    camera.position.set(10, 10 , 10);
    camera.lookAt(new THREE.Vector3());

    fpsCounter = new FPSCounter(
        renderer,
        {
            bottom:'25px',
            left: '25px'
        }
    );

    fpsCounter.setScreenSize( renderer.getSize().width , renderer.getSize().height );


    box = new THREE.Mesh( new THREE.BoxBufferGeometry(2,2,2,1,1,1) , new THREE.MeshLambertMaterial({color:'red'}));

    scene.add(box);

    var dLight = new THREE.DirectionalLight(0xffffff,1);
    dLight.position.set( -10,10,10 );

    scene.add( dLight );

}

function render(gl, width, height) {
    box.rotation.y += 0.02;
    renderer.render(scene, camera);
    fpsCounter.render();

}

function resize(width, height) {
    if (!renderer)
        return

    renderer.setViewport(0, 0, width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    fpsCounter.setScreenSize( width , height );
}