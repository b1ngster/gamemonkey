
class ResourceTracker {
  constructor() {
    this.resources = new Set();
  }
  track(resource) {
    if (resource.dispose || resource instanceof THREE.Object3D) {
      this.resources.add(resource);
    }
    return resource;
  }
  untrack(resource) {
    this.resources.delete(resource);
  }
  dispose() {
    for (const resource of this.resources) {
      if (resource instanceof THREE.Object3D) {
        if (resource.parent) {
          resource.parent.remove(resource);
        }
      }
      if (resource.dispose) {
        resource.dispose();
      }
    }
    this.resources.clear();
  }
}
      const debug = true;
        var container, scene, camera, renderer, controls, stats;
    
        //  var keyboard = new THREEx.KeyboardState();
        /*  THREEx.FullScreen.bindKey({ charCode: 'f'.charCodeAt(0) });
        
        */

       
     
    
        var scene = {};
       var handleResize	= function(){
      
        
                renderer.setSize( window.innerWidth, window.innerHeight );
    
                camera.aspect	= window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            }
  // custom global variables
          var video, videoImage, videoImageContext, videoTexture;
          var startButton = document.getElementById( 'startButton' );


          
              startButton.addEventListener( 'click', function () {
              
              var overlay = document.getElementById( 'overlay' );
              
              overlay.remove();
              // SCENE
             
    
             init();
            animate();
              
              
              }, false );
              
              var callback_progress = function( progress, result ) {
                  
                  var bar = 250, 
                  total = progress.total_models + progress.total_textures,
                  loaded = progress.loaded_models + progress.loaded_textures;
                  
                  if ( total )
                      bar = Math.floor( bar * loaded / total );
                  
                  $( "bar" ).style.width = bar + "px";
                  
                  count = 0;
                  for ( var m in result.materials ) count++;
  
                  handle_update( result, Math.floor( count/total ) );
                  
              }
              
              raycaster = new THREE.Raycaster();
              mouseVector = new THREE.Vector2();
              container = document.getElementById('my-gui-container');
              container.style.top = 0;
              container.style.left = 0;
              container.style.width = 100 + '%';
  
            var  user = { username: "",
                          current_question: 0,
                          current_video: 0,
                          score: 0,
                          answers: []
                          }
         
    var geometries = [];
  
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {

    
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var data =  RequestQuestions().then(e=>{
            
    return e[0];
})
  function loadJSON(url, callback) {   
  
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
  }
   async function get_questions() {
        var json;
        var data = function(){
            loadJSON("js/questionbank.json", function(response) {
        
            json = JSON.parse(response);
         
          // Call another function with json that is now filled with data
         return json
            });
            return shuffle(data[0]);
        }
  
  
  function handleJson(json) {
     
     return json
     
  
  return this.data;
  
   }
   }

  
  
          function init() {
       
            //ensure correct zoom
            var scale = 'scale(1)';
            document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
             document.body.style.msTransform =   scale;       // IE 9
             document.body.style.transform = scale;     // General
  
              scene = new THREE.Scene();
            var texture_gradient = new THREE.TextureLoader().load('img/user-interface/button.png');
            
        
         
          sequence = new Sequencer();
            
            
           
        var gui_question_tex = new THREE.TextureLoader().load('/img/user-interface/question_board.png');
       
       
              // https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html
               SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
              var VIEW_ANGLE = 45,
                  ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
                  NEAR = 0.1,
                  FAR = 1000,
                  FLOOR = 40
                  ;
              
    
                  window.addEventListener( 'click', handleUserInput, false );
                  document.addEventListener('touchend', handleUserInput, false);

                  window.addEventListener('resize', handleResize, false);
                  //camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                  camera =     new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 500);
   
              // RENDERER
  
              renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
  
              //camera.aspect = window.innerWidth / window.innerHeight;
              
              renderer.setSize( window.innerWidth, window.innerHeight );
              renderer.setPixelRatio( window.devicePixelRatio );
              
              container.appendChild(renderer.domElement);
              camera.updateProjectionMatrix();
             
              var light_1 = new THREE.PointLight(0xffffff);
              light_1.position.set(0, 200, 0);
              scene.add(light_1);
              
              var light_2 = new THREE.PointLight(0xffffff);
              light_2.position.set(0, 0, 200);
              scene.add(light_2);

           
               //add Event Listners
              
              // create the video element
              video = document.getElementById('video_elem');
               video.id = 'intro';
              // video.type = ' video/ogg; codecs="theora, vorbis" ';
              video.src = "videos/intro.mp4";
              video.load(); // must call after setting/changing source
              video.muted = false;
            
              video.play();
            
              videoImage = document.createElement('canvas');
              videoImage.id = "video_canvas"
              videoImage.width = 1920;
              videoImage.height = 1080;
  
              videoImageContext = videoImage.getContext('2d');
              // background color if no video present
              videoImageContext.fillStyle = '#000000';
              videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);
  
              videoTexture = new THREE.VideoTexture(videoImage);
              videoTexture.minFilter = THREE.LinearFilter;
              videoTexture.magFilter = THREE.LinearFilter;
  
              var movieMaterial = new THREE.MeshBasicMaterial({ map: videoTexture,  side: THREE.DoubleSide });
              // the geometry on which the movie will be displayed;
              // 		movie image will be scaled to fit these dimensions.
              var movieGeometry = new THREE.PlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT, 4, 4);
              var movieScreen = new THREE.Mesh(movieGeometry, movieMaterial);
              movieScreen.position.set(0, 10, 0);
              scene.add(movieScreen);
            
              
              sequence.init(data);
              sequence.preload();
            /*
            	composer = new THREE.EffectComposer( renderer );
			      	composer.addPass( new RenderPass( scene, camera ) );

			      	var effect = new ShaderPass( DotScreenShader );
			        effect.uniforms[ 'scale' ].value = 4;
			      	composer.addPass( effect );
              */
              camera.position.set(0, 0, 300);
              camera.lookAt(movieScreen.position);

            
             // video = video.play();

          }
        
         
          function handleUserInput (e){
  
              e.preventDefault();
            
              var mouseVector = new THREE.Vector3(
                  ( e.clientX / window.innerWidth ) * 2 - 1,
              - ( e.clientY / window.innerHeight ) * 2 + 1,
                  1 );
  
              //projector.unprojectVector( mouseVector, camera );
              var raycaster = new THREE.Raycaster();
  
              raycaster.setFromCamera( mouseVector, camera );
              // create an array containing all objects in the scene with which the ray intersects
              var intersects = raycaster.intersectObjects( scene.children );
  
         // Handle button clicks
              if (intersects.length>0){

                intersects[0].object.material.color.setRGB(1,1,1)
      if(intersects[0].object.name == "button_a" | "buttonA_text"){
        
                     sequence.option("a")
     
      }
      if(intersects[0].object.name == "button_b"| "buttonB_text"){
        
                     sequence.option("b")
         
      }
      if(intersects[0].object.name == "button_c"| "buttonC_text"){
         
        
                    sequence.option("c");
      }
      if(intersects[0].object.name == "button_d"| "buttonD_text"){
        
                    sequence.option("d");
      }
  
  }
          }
  function dispose(object){
          if(object){
            object.geometry.dispose();
              object.material.dispose();
              scene.remove( object );
            }
          }
  
          function animate() {
            
              update();
              render();
             requestAnimationFrame(animate);
          }

          var intro_complete = 0;
  
          function update() {
          
           
             if(video.ended){
                 sequence.next(video);
               }
            // stats.update();
          }
  
          function render() {
            //renderButtons();
                 if (video.readyState === video.HAVE_ENOUGH_DATA) {
                  videoImageContext.drawImage(video, 0, 0);
                  if (videoTexture)
                     videoTexture.needsUpdate = true;
              }
              
              renderer.render(scene, camera);
          }
  
 
       function renderVideo(videopath){
  
             //video.removeAttribute('src');
              removeGui();
              clearScene();
              video.setAttribute( "src", videopath);
              video.load();  // must call after setting/changing source
            

              videoImage = document.createElement('canvas');
              videoImage.width = 1920;
              videoImage.height = 1080;
  
              videoImageContext = videoImage.getContext('2d');
              // background color if no video present
              videoImageContext.fillStyle = '#000000';
              videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);
  
              videoTexture = new THREE.VideoTexture(videoImage);
              videoTexture.minFilter = THREE.LinearFilter;
              videoTexture.magFilter = THREE.LinearFilter;
  
              var movieMaterial = new THREE.MeshBasicMaterial({ map: videoTexture,  side: THREE.DoubleSide });
              // the geometry on which the movie will be displayed;
              // 		movie image will be scaled to fit these dimensions.
              var movieGeometry = new THREE.PlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT, 4, 4);
              var movieScreen = new THREE.Mesh(movieGeometry, movieMaterial);
              movieScreen.position.set(0, 10, 0);
              scene.add(movieScreen);
            
              video.play();
               
              video.muted = false;
              video.volume = 0.75
            return video;
          }
  
  
          function createText(name, text, x, y, color){
            
            
            
                   
                      var loader = new THREE.FontLoader();
  
                  loader.load( 'js/fonts/helvetiker_bold.typeface.json', function ( font ) {
  

                   textGeo = new THREE.TextGeometry( text, {
                      font: font,
                      size: 12,
                      height: 2,
                      curveSegments: 12,
                      } );
                   
                     textGeo.computeBoundingBox();
                     geometries.push(textGeo.uuid);
                      textWidth = textGeo.boundingBox.max.x - textGeo.boundingBox.min.x;
                
                      textMaterial = new THREE.MeshBasicMaterial( {
                      color: color || 0x000000,
                      flatShading: false,
  
                  } );

               textMesh = new THREE.Mesh( textGeo, textMaterial );
                  textMesh.name ? name : textMesh.uuid;
              
                  geometries.push(textMesh.uuid);
                   textMesh.position.set(x - textWidth / 2, y , 42);
                  
                  scene.add(textMesh);
              });
  
          }
          async  function   httpGet(url) { 
            return new Promise(function(resolve, reject) { 
              var httpReq = new XMLHttpRequest(); 
           
              httpReq.onreadystatechange = function() { 
                var data; 
           
                if (httpReq.readyState == 4) { 
                  if (httpReq.status == 200) { 
                    data = JSON.parse(httpReq.responseText); 
                    resolve(data); 
                  } else { 
                    reject(new Error(httpReq.statusText)); 
                  } 
                } 
              }; 
           
              httpReq.open("GET", url, true); 
              httpReq.send(); 
            }); 
          } 
          

                 
            async function RequestQuestions() {
                
               // items = {};
               
               return httpGet("js/questionbank.json")

              .then( (response)=>{
                 
               
              return  response; 
                  
                
                  }).then((e)=>{
                      data = Object.values(e);
                     
                      shuffle(data[0]);
                      return data;
                    })
                  }
  
       
          function renderButtons(question_text, options){

          

           try{ removeGui();
           }catch{ //do nothing the gui isnt there

            }
             texture_gradient = new THREE.TextureLoader().load('img/user-interface/button.png');
           
             gui_question_tex = new THREE.TextureLoader().load('/img/user-interface/question_board.png');
            

            
              function createTextMesh( text, color, x, y, ){
               
              renderer.setClearColor( 0x000000, 0 ); // the default
            
                scoreboard_material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, map: gui_question_tex, side: THREE.DoubleSide });
              
                scoreboard_geo = new THREE.PlaneGeometry(90, 30, 10, 10);
                
               scoreboard_material.transparent = true;
               scoreboard_mesh = new THREE.Mesh( scoreboard_geo, scoreboard_material);
               scoreboard_mesh.position.set(x, y, 40);
               scoreboard_mesh.name ="scoreboard_mesh";
                
                 createText('scoreboard_text', text, x - 15, y - 4);
                return scoreboard_mesh;
           }
  
             var offset_y = -25; // the position bottom of the gui 
         
              var  ButtonA_tex, ButtonB_tex,ButtonC_tex, ButtonD_tex   = gui_question_tex; //new THREE.TextureLoader().load(`img/user-interface/button.png`);
              
             var gui_question_material = new THREE.MeshBasicMaterial({ color: 'white', map: gui_question_tex, side: THREE.DoubleSide });
             gui_question_material.transparent = true;
             
             
              var gui_question_geometry = new THREE.PlaneGeometry(600, 60, 10, 10);
              var gui_question_mesh = new THREE.Mesh(gui_question_geometry, gui_question_material);
            
              gui_question_mesh.position.set( 0 , -150 , 20);
              gui_question_mesh.name ="gui_question";
              createText('question_text', question_text, 0, -150);
              
              
              scene.add(gui_question_mesh);
  
           
              var bttn_a_x = -220
              var bttn_a_y = -220;
            
              var bttn_b_x = 220;
              var bttn_b_y = -220;
  
              var bttn_c_x = -220;
              var bttn_c_y = -270;
  
              var bttn_d_x = 220;
              var bttn_d_y = -270;
  
              var text_pos = 2;
  
              var button_default_color = new THREE.Color( 0x092533 );
  
              var buttonMat =  new THREE.MeshBasicMaterial({  color: 0x1193d4, map: texture_gradient, side: THREE.DoubleSide });
              buttonMat.transparent = true;
             
             //width height and wsegment hsegments
              var buttonGeometry = new THREE.PlaneGeometry(340, 40, 10, 10);
             
              var buttonA = new THREE.Mesh(buttonGeometry, buttonMat);
              var buttonB = new THREE.Mesh(buttonGeometry, buttonMat);
              var buttonC = new THREE.Mesh(buttonGeometry, buttonMat);
              var buttonD = new THREE.Mesh(buttonGeometry, buttonMat);
  
              text_pos_x = 15;
              text_pos = -5;
              //buttonA.position.z = 0.5; //Math.PI / 2;
              //buttonA.rotation.x = Math.PI / 2;
              buttonA.position.set(bttn_a_x, bttn_a_y, 10);
              buttonA.name ="button_a";
              createText('question_text_a', options[0]['a'], bttn_a_x - text_pos_x,  bttn_a_y + text_pos, 0xFFFFFF)
              //console.log(buttonA);
              buttonB.position.set(bttn_b_x, bttn_b_y, 20 );
              buttonB.name ="button_b";
              createText('question_text_b',options[0]['b'], bttn_b_x - text_pos_x,  bttn_b_y + text_pos,  0xFFFFFF)
             
              buttonC.position.set(bttn_c_x, bttn_c_y, 20 )
              buttonC.name ="button_c";
              if(scene.getObjectByName('question_text_c')){
                scene.remove(scene.getObjectByName('question_text_c'));
              }
              createText('question_text_c', options[0]['c'], bttn_c_x - text_pos_x, bttn_c_y + text_pos,  0xFFFFFF)
  
              buttonD.position.set( bttn_d_x, bttn_d_y , 20,  0xFFFFFF);;
              buttonD.name ="button_d";
              createText('question_text_d', options[0]['d'], bttn_d_x - text_pos_x, bttn_d_y + text_pos,  0xFFFFFF)
              
  
              scene.add(buttonA);
              scene.add(buttonB);
              scene.add(buttonC);
              scene.add(buttonD);
  
              var score_outline = new THREE.PlaneGeometry( gui_question_mesh.geometry );
  
               var score_mat = new THREE.LineBasicMaterial( { color: 'silver', linewidth: 4 } );
               
               var wireframe = new THREE.LineSegments( score_outline, score_mat );
               
               
               scene.add( wireframe );
  
                  score_mesh = Array(10);
                  var score_mesh_bttm = -220;
                  var score_pad = 40;
                  var score_mesh_x = window.innerWidth / 20 * -8;
                  var score_button_default = new THREE.Color('white');

                  score_mesh[1] = createTextMesh('1000', score_button_default, score_mesh_x, score_mesh_bttm, texture_gradient );
                  score_mesh[2] = createTextMesh('2,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[3] = createTextMesh('4,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[4] = createTextMesh('8,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[5] = createTextMesh('6,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[6] = createTextMesh('6,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[7] = createTextMesh('7,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[8] = createTextMesh('8,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad , texture_gradient);
                  score_mesh[9] = createTextMesh('9,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[10] = createTextMesh('20,000', 'gold', score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  
                  
                  score_mesh.forEach(element => {
  
                      scene.add(element);
                      
                  });
  
  
              /// LIFELINES
                   var geometry = new THREE.CircleGeometry( 24, 32 );
                  
                  
             lifeline_tex = new THREE.TextureLoader().load('/img/user-interface/lifeline_heart.png');
             lifeline_red_tex = new THREE.TextureLoader().load('/img/user-interface/lifeline_heart_lost.png');
               

  
                  var white_mat = new THREE.MeshBasicMaterial( { color: 'white', map: lifeline_tex} );
                  
                  var red_mat = new THREE.MeshBasicMaterial( { color: 0xffffff, map: lifeline_red_tex} );
                   var  material1 = white_mat;
                  var  material2 = white_mat;
                  var  material3 = white_mat;

                  console.log('the sequence' + sequence.input_sequence());
                 
                  if( sequence.input_sequence().find(()=>'loose') !== undefined ){

                    console.log(sequence.input_sequence().find(()=>'loose'));
                    lifes = sequence.input_sequence().find(()=>'loose').length;
                    console.log(lifes);
                  
                            switch(lifes){
                            case 0:
                                material1 = red_mat;
                                break; 
                            case 1:
                                material2 = red_mat;
                                break;
                            case 2:
                                  material3 = red_mat;
                                  break;    
                            }
                }

                  var lifeline_1 = new THREE.Mesh( geometry, material1 );
                    
                  lifeline_1.position.set(window.innerWidth / 20 * -7.3, 200, 20);
              
                  scene.add( lifeline_1 );
  
                  var lifeline_2 = new THREE.Mesh( geometry, material2 );
                  lifeline_2.position.set(window.innerWidth / 20 * -8, 200, 20);
                  scene.add( lifeline_2 );
  
                  var lifeline_3 = new THREE.Mesh( geometry, material3 );
                  lifeline_3.position.set(window.innerWidth / 20 * -8.7, 200, 20);
                  scene.add( lifeline_3 );

              var countdown = document.createElement('video');
              countdown.src = "/videos/countdown_timer_square.mp4"
              countdown.load();
              countdown.muted = true;
              countdown.setAttribute( 'webkit-playsinline', 'webkit-playsinline' );
                var videoTexture = new THREE.VideoTexture( countdown );
                videoTexture.minFilter = THREE.LinearFilter;
                videoTexture.magFilter = THREE.LinearFilter;
                videoTexture.format = THREE.RGBFormat;

        
	
	// use the texture in a THREE.Mesh
	      var countdown_geometry	=  new THREE.PlaneGeometry(90, 30, 10, 10);
               
	      var countdown_material	= new THREE.MeshBasicMaterial({
	                 	map	: videoTexture.texture
	                    });
	     var mesh	= new THREE.Mesh( countdown_geometry, countdown_material );
                  mesh.position.set(window.innerWidth / 20 * -8.7, 230, 20);
              
               
                scene.add( mesh );
                              }


          function removeGui(){
            geometries.forEach(function(id){
             // console.log(id);
              try{ 
              scene.getObjectByProperty('uuid', id).geometry.dispose()
              scene.getObjectByProperty('uuid', id).material.dispose()
              scene.remove(scene.getObjectByProperty('uuid', id))
              } catch(e){
               
                console.log('Could not remove' + e )
              }
            })
              
              dispose(scene.getObjectByName("button_a"));
              dispose(scene.getObjectByName("button_b"));
              dispose(scene.getObjectByName("button_c"));
              dispose(scene.getObjectByName("button_d"));
            
              dispose(scene.getObjectByName("question_text_a"));
              dispose(scene.getObjectByName("question_text_b"));
              dispose(scene.getObjectByName("question_text_c"));
              dispose(scene.getObjectByName("question_text_d" ));
              dispose(scene.getObjectByName("question_text"));
              dispose(scene.getObjectByName("gui_question"));
              
              
               }

          function clearScene(){
             
              for( i = 0; i < scene.children.length; i++){ 

                if(scene.children[i].geometry)
                scene.children[i].geometry.dispose()

                if(scene.children[i].material)
                scene.children[i].material.dispose();
                
               scene.remove(scene.children[i]); 
            }
            if(scene.children[0]){
                clearScene();
          }
        }
  
