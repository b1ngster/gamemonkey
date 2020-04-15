
      
        var container, scene, camera, renderer, controls, stats;
    
        //  var keyboard = new THREEx.KeyboardState();
        /*  THREEx.FullScreen.bindKey({ charCode: 'f'.charCodeAt(0) });
        
        */
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
              container = document.getElementById('ThreeJS');
  
            var  user = { username: "",
                          current_question: 0,
                          current_video: 0,
                          score: 0,
                          answers: []
                          }
         
   
  
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {

    console.log(array)
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
         // console.log(response)
            json = JSON.parse(response);
           // console.log(json);
          // Call another function with json that is now filled with data
         return json
            });
            return data;
        }
  
  
  function handleJson(json) {
     
     return json
     
  
  return this.data;
  
   }
   }

   var sequence = new Sequencer();

   let newObject;
   const newArr = [];
   data =  RequestQuestions().then(e=>{
        
    return e[0];
});

    var scene = {};
  
          function init() {
  
            //ensure correct zoom
            var scale = 'scale(1)';
            document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
             document.body.style.msTransform =   scale;       // IE 9
             document.body.style.transform = scale;     // General
  
              scene = new THREE.Scene();
            var texture_gradient = new THREE.TextureLoader().load('assets/user-interface/button.png');
            
            console.log(data);
            data = shuffle(data)
           console.log(data);
           
            for (let index = 0; index < data.length; index++) {

                for (let j = 0; j < data[0].length; j++) {
                // Get num of each fruit
                sequence.add(data[index][j]);
             // console.log(sequence);
              }
            }
           

          

           //console.log(sequence.getItems());
           
             
           
        var gui_question_tex = new THREE.TextureLoader().load('/assets/user-interface/question_board.png');
       
  
              // https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html
               SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
              var VIEW_ANGLE = 45,
                  ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
                  NEAR = 0.1,
                  FAR = 1000,
                  FLOOR = 40
                  ;
              
    
                  window.addEventListener( 'click', handleUserInput, false );
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
              video = document.createElement('video');
               video.id = 'intro';
              // video.type = ' video/ogg; codecs="theora, vorbis" ';
              video.src = "videos/intro.mp4";
              video.load(); // must call after setting/changing source
              video.muted = false;
              
              
            
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
              video.play();
              sequence.preload();
             
           
            
              camera.position.set(0, 0, 300);
              camera.lookAt(movieScreen.position);
                
             
  
          }
        
          
          function handleUserInput (e){
  
              e.preventDefault();
              e.preventP
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
      
                console.log(intersects[0].object.name)
      if(intersects[0].object.name == "button_a" | "buttonA_text"){
        intersects[0].object.color = 0xFF0022;
         Quiz("a")
      }
      if(intersects[0].object.name == "button_b"| "buttonB_text"){
        intersects[0].object.color = 0xFF0022;
          Quiz("b")
      }
      if(intersects[0].object.name == "button_c"| "buttonC_text"){
          Quiz("c")
          intersects[0].object.color = 0xFF0022;
      }
      if(intersects[0].object.name == "button_d"| "buttonD_text"){
          Quiz("d")
          intersects[0].object.color = 0xFF0022;
      }
  
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
              //  console.log(ended)
           
            }
                
        
          
  
              //controls.update();
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
  
  
  /*contains logic for quiz
  
  */
  function play(){
    video.play();


  }
      function Quiz(button_clicked ){

   
                
             /*.then((values)=>{
               question_data = values.data.questions;
             });
             */
            // var user.current_questio = 10 //Math.floor(Math.random() * 10 + 1);
           
            // QuestionBank.forEach((key, value)=>{
           //   console.log(key);
            //  console.log(value);
            //});
              
             console.log(sequence.handleClick(button_clicked));
             /*
            user.current_question =0
            console.log(user);
            if(user.current_question == 0){
           // clearScene();
            videopath = "videos/rules_scene.mp4";
             video = renderVideo(videopath);
            /*  
          video.addEventListener("ended", videoEnded); 
  
              function videoEnded(){
                  console.log('The video has ended')
              // clearScene();
               
            user.current_question++
             
        }
         //     console.log(user)
            
               
            }


          //  var QBank = questionBank.questions[user.current_question]
            
            
          //  renderButtons();
         //   var answer = QBank.correct;
         /*
            if( answer !== undefined)
             if( answer.substr(-1) == button_clicked){
              user.current_video++;
              user.current_question++;
              user.score += 10;
              user.answers.push([user.current_video, button_clicked])
  
             //0 indexed array 
              
  
              
             videopath = "./videos/questions/question.mp4";
              //console.log(videopath);
             // videopath = "videos/questions/fail.mp4"
             if(user.current_question == 10){
              videopath = "videos/questions/win.mp4";
            
              }
              var video = renderVideo(videopath);
              video.addEventListener("ended", videoEnded); 
  
              function videoEnded(){
                  window.location.reload(true);
              }
            //  var buttons = renderButtons(user.current_question);
              
              }else{
                 // removeGui();
                // clearScene();
                  videopath = "videos/questions/fail.mp4"
                  var video = renderVideo(videopath);
                 
                  video.addEventListener("ended", videoEnded); 
  
          }
      
          /*
            ///button check A
            if(button_clicked == 'a'){
              videopath = `/videos/questions/question_${user.current_video}/A.ogv`;
             console.log(videopath);
              var video = renderVideo(videopath);
              if(video.ended){
                  console.log('ended');
              }
              console.log(user.current_question);
              console.log(questionBank.questions[user.current_question]);
            
            /*
              if(questionBank.questions[user.current_question].correct
             .substr(-1) !== 'a'){
                 console.log('incorrect');
             }else{
                 console.log('correct')
             }
           //  user.current_question++;
           //  user.current_video++;
             renderButtons();
            }
  
            //button check B
            if(button_clicked == 'b'){
  
              videopath = `/videos/questions/question_${user.current_video}/B.ogv`;
              var video = renderVideo(videopath);
             
              if(questionBank.questions[user.current_question].correct
                      .substr(-1) !== 'b'){
                 console.log('incorrect');
             }else{
                 console.log('correct')
             }
            //  user.current_question++;
            //  user.current_video++;
              renderButtons();
            } 
  
  
            if(button_clicked == 'c'){
              //videopath = '`/videos/questions/question_${user.current_video}/C.ogv`;
             // videopath = "/videos/questions/fail.mp4"
              user.current_question;
              var video = renderVideo(videopath);
              if(questionBank.questions[user.current_question]
                      && questionBank.questions[user.current_question].correct.substr(-1) == 'c'){
                 console.log('incorrect');
             }else{
                 console.log('correct')
             }
            // 
             //user.current_video++;
            
            }
            if(button_clicked == 'd'){
             
              videopath = `/videos/questions/question_${user.current_video}/D.ogv`;
              var video = renderVideo(videopath);
              if(questionBank.questions[user.current_question].correct 
              .substr(-1) !== 'd'){
                 console.log('incorrect');
             }else{
             }
             // user.current_question++;
            //  user.current_video++;
             
            }
            */
        
           if( user.current_question === 1 ){

            console.log('user question check 1')
           
           
            
           //renderVideo(user.current_video);
           }
         //  renderButtons(user.current_video);
            /*
            
      
  
      scene.add( mesh );
  
  } );
  */
  
      
  
  
          }
      
  
          function renderVideo(videopath){
  console.log("rendering video check 2 " + videopath);

       //    console.trace();
          
           if(video.ended){
             console.log(this.previous);
             video.removeAttribute('src');
            video.load();
              video.setAttribute( "src", videopath);
              video.load();
               // must call after setting/changing source
             video.play();
             if(video.ended){
              video.load();
             }
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
            }
              //video.play();
              return video;
            
          }
  
  
          function createText(name, text, x, y, color){
           // console.log(name + text);
                   
                      var loader = new THREE.FontLoader();
  
                  loader.load( 'js/fonts/helvetiker_bold.typeface.json', function ( font ) {
  
                  var textGeo = new THREE.TextGeometry( text, {
                      font: font,
                      size: 12,
                      height: 2,
                      curveSegments: 12,
                      } );
                    
                     textGeo.computeBoundingBox()
                      textWidth = textGeo.boundingBox.max.x - textGeo.boundingBox.min.x;
              var  textMaterial = new THREE.MeshBasicMaterial( {
                      color: color || 0x000000,
                      flatShading: false,
  
                  } );
              var textMesh = new THREE.Mesh( textGeo, textMaterial );
                  textMesh.name = name;
                  console.log(name);
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
                      return data;
                    })
                  }
  
       
          function renderButtons(question_text, options){
            var texture_gradient = new THREE.TextureLoader().load('assets/user-interface/button.png');
             
           
            var gui_question_tex = new THREE.TextureLoader().load('/assets/user-interface/question_board.png');
           
              function createTextMesh( text, color, x, y, ){
               
             
            
               renderer.setClearColor( 0x000000, 0 ); // the default

                
               var scoreboard_material = new THREE.MeshBasicMaterial({ color: color, map: gui_question_tex, side: THREE.DoubleSide });
              
               var scoreboard_geo = new THREE.PlaneGeometry(90, 30, 10, 10);
                
               scoreboard_material.transparent = true;
               scoreboard_mesh = new THREE.Mesh( scoreboard_geo, scoreboard_material);
               scoreboard_mesh.position.set(x, y, 40);
               scoreboard_mesh.name ="scoreboard_mesh";
                
                 createText('scoreboard_text', text, x - 15, y - 4);
                return scoreboard_mesh;
           }
  
             var offset_y = -25; // the position bottom of the gui 
         
              
             
              var ButtonA_tex, ButtonB_tex,ButtonC_tex, ButtonD_tex   = gui_question_tex; //new THREE.TextureLoader().load(`assets/user-interface/button.png`);
              
             //new THREE.TextureLoader().load('assets/user-interface/button.png');
             // var gui_question_material = new THREE.MeshLambertMaterial({ color:'red'  });
             var gui_question_material = new THREE.MeshBasicMaterial({ color: 'white', map: gui_question_tex, side: THREE.DoubleSide });
             gui_question_material.transparent = true;
             
              //gui_question_material.transparent = true;
  
  
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
  
              buttonB.position.set(bttn_b_x, bttn_b_y, 20 );
              buttonB.name ="button_b";
              createText('question_text_b',options[0]['b'], bttn_b_x - text_pos_x,  bttn_b_y + text_pos,  0xFFFFFF)
             
              buttonC.position.set(bttn_c_x, bttn_c_y, 20 )
              buttonC.name ="button_c";
              createText('question_text_c',options[0]['c'], bttn_c_x - text_pos_x, bttn_c_y + text_pos,  0xFFFFFF)
  
              buttonD.position.set( bttn_d_x, bttn_d_y , 20,  0xFFFFFF);;
              buttonD.name ="button_d";
              createText('question_text_d',options[0]['d'], bttn_d_x - text_pos_x, bttn_d_y + text_pos,  0xFFFFFF)
  
  
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
                  var score_button_default = new THREE.Color('mediumturquoise');

                  score_mesh[1] = createTextMesh('1000', score_button_default, score_mesh_x, score_mesh_bttm, texture_gradient );
                  score_mesh[2] = createTextMesh('2,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[3] = createTextMesh('4,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[4] = createTextMesh('8,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[5] = createTextMesh('10,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[6] = createTextMesh('12,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[7] = createTextMesh('14,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[8] = createTextMesh('16,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad , texture_gradient);
                  score_mesh[9] = createTextMesh('18,000',score_button_default, score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  score_mesh[10] = createTextMesh('20,000', 'gold', score_mesh_x, score_mesh_bttm += score_pad, texture_gradient);
                  
                  
                  score_mesh.forEach(element => {
  
                      scene.add(element);
                      
                  });
  
  
              /// LIFELINES
                   var geometry = new THREE.CircleGeometry( 24, 32 );
  
  
                  var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  
                    var lifeline_1 = new THREE.Mesh( geometry, material );
                  lifeline_1.position.set(window.innerWidth / 20 * -7.3, 200, 20);
                  scene.add( lifeline_1 );
  
                  var lifeline_2 = new THREE.Mesh( geometry, material );
                  lifeline_2.position.set(window.innerWidth / 20 * -8, 200, 20);
                  scene.add( lifeline_2 );
  
                  var lifeline_3 = new THREE.Mesh( geometry, material );
                  lifeline_3.position.set(window.innerWidth / 20 * -8.7, 200, 20);
                  scene.add( lifeline_3 );
                }


          function removeGui(){
              
              var elem = scene.getObjectByName("gui_question", true);
              scene.remove(elem);
              scene.remove(scene.getObjectByName("button_a"));
              scene.remove(scene.getObjectByName("button_b"));
              scene.remove(scene.getObjectByName("button_c"));
              scene.remove(scene.getObjectByName("button_d"));

              scene.remove(scene.getObjectByName("question_text_a"));
              scene.remove(scene.getObjectByName("question_text_b"));
              scene.remove(scene.getObjectByName("question_text_c"));
              scene.remove(scene.getObjectByName("question_text_d"));
              scene.remove(scene.getObjectByName("question_text"));
            

           
          }
          function clearScene(){
             
              for( i = 0; i < scene.children.length; i++){ 
                 // console.log(scene.children[i])
               scene.remove(scene.children[i]); 
            }
            if(scene.children[0]){
                clearScene();
          }
        }
  