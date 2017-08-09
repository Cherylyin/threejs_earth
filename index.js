function init(){
	initCube3D();
	initCircle3D();
	//initOrbit();
}
function initCube3D(){
	var width = document.getElementById("cube3d").clientWidth;
	var height = document.getElementById("circle3d").clientHeight;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
    camera.position.z = 50;


    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    document.getElementById("cube3d").appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(50,50,1);
    var material = new THREE.MeshBasicMaterial({color:0x00ff00});
    var cube = new THREE.Mesh(geometry,material);


    var mesh = new THREE.Object3D();
    mesh.add( new THREE.LineSegments(

				new THREE.Geometry(),

				new THREE.LineBasicMaterial( {
					color: 0xffffff,
					transparent: true,
					opacity: 0.5
				} )

			) );
    mesh.add(cube);

    scene.add(mesh);

    var render = function(){
    	requestAnimationFrame(render);
    	mesh.rotation.x +=0.01;
    	mesh.rotation.y +=0.01;
    	
    	renderer.render(scene,camera);
    };
    render();

}

function initCircle3D(){
	var width = document.getElementById("circle3d").clientWidth;
	var height = document.getElementById("circle3d").clientHeight;

	var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
    camera.position.x = 0;//设置相机的位置坐标
    camera.position.y = 50;//设置相机的位置坐标
    camera.position.z = 100;//设置相机的位置坐标
    camera.up.x = 0;//设置相机的上为「x」轴方向
    camera.up.y = 1;//设置相机的上为「y」轴方向
    camera.up.z = 0;//设置相机的上为「z」轴方向
    camera.lookAt( {x:0, y:0, z:0 } );//设置视野的中心坐标

    var light = new THREE.DirectionalLight(0xff0000,1.0,0);
    light.position.set(200,200,200);
    scene.add(light);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    document.getElementById("circle3d").appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry();
    var material = new THREE.MeshBasicMaterial({color:0xffff00});
    var circle = new THREE.Mesh(geometry,material);
    circle.position.set(0,0,0,);
    scene.add(circle);


    var render = function(){
    	requestAnimationFrame(render);
    	circle.rotation.x +=0.01;
    	circle.rotation.y +=0.01;
    	
    	renderer.render(scene,camera);
    };
    render();
  
}
