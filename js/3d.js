var window_width = window.innerWidth;
var window_height = window.innerHeight;

window.addEventListener( 'resize', onWindowResize, false );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window_width / window_height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window_width, window_height );
document.getElementById('three_js_container').appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const loader = new THREE.TextureLoader();

var cubeGroup = new THREE.Group();

const materials1 = [
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube1/Ad_blue_1.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube1/Ad_blue_2.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube1/Ad_blue_3.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube1/Ad_blue_4.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube1/Ad_blue_5.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube1/Ad_blue_6.jpg'), side: THREE.DoubleSide}),
];

const materials2 = [
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube2/Ad_grey_1.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube2/Ad_grey_2.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube2/Ad_grey_3.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube2/Ad_grey_4.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube2/Ad_grey_5.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: loader.load('assets/cubes/cube2/Ad_grey_6.jpg'), side: THREE.DoubleSide}),
];

const cube1 = new THREE.Mesh(geometry, materials1);
cube1.position.z = 1;

const cube2 = new THREE.Mesh(geometry, materials2);
cube2.position.z = -1;


cubeGroup.add(cube1);
cubeGroup.add(cube2);

scene.add( cubeGroup );

camera.position.z = 2.5;
camera.position.y = 1;
camera.position.x = 0;
camera.rotation.x = -0.4;


const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const animate = function () {
	requestAnimationFrame( animate );

	cube1.rotation.y += 0.005;
	cube2.rotation.y += 0.004;
	cubeGroup.rotation.y += 0.002;

	renderer.render( scene, camera );
};

animate();

function onWindowResize() {

	camera.aspect = window.innerWidth / (window.innerHeight * 0.8);
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, (window.innerHeight * 0.8) );

}