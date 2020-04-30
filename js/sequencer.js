
            class Sequencer {
                constructor() {
                    var item, _items = [], _itemsActive = [],  _itemsToRemove = [], _currentItem = 0, _totalItems = 0, _nextItem = 0, _nextItemToRemove = 0, _time = 0, _layersNeedSorting = false;
                    
                    var input_sequence = Array();
                    var speed = 2; //units a second
                    var delta = 0;
                    var urls = [];
                    
                    var finished = false;
                    var _video;
                    this.userInput = undefined;
                    var _current = 0;
                    var countdownTimer;
                    var state = {};
                    var cache = {};
                    var _processing = false;
                  

                 this.add = function (item, start, end, init, scene, ) {

                        item = item;
                        item.id = Math.random().toString(36).substr(2, 9);
                        item._active = false;
                        item._start = start;
                        item.coundown = false;
                        item._duration = end - start;
                        item._end = end;
                        item._scene  = scene
                        item._init = init;
                        
                        if (typeof item.init == 'function') {
                           // item.init();
                        }
                        
                        
                        if(item.videos !== undefined){
                            

                            //remove duplicates to create an array loaded values
                            const duplicates = (e, i, arr) => arr.indexOf(e) === i
                            item.videos.forEach((link)=>{
                               
                              var links = Object.values(link)
                             .forEach((value, i)=>{

                                urls.push(value);
                             
                                })}
                            );
                            
                            
                        }
                        _items.push(item);
                        _items.sort(function (a, b) { return a.__start - b.__start; });
                     
                      //  _itemsToRemove.sort(function (a, b) { return a.__end - b.__end; });
                        
                   
                    }
                
                
                    this.get = function () {
                        return this;
                    };
                    this.getUrls = function(){
                        return urls;
                    }

                    this.createItem = function(item){

                     
                     try{   removeGui();
                     }catch(e){}
                     renderer.clear();
                        item = _items[_currentItem];
                        this.current = _items[_currentItem];
                        console.log('create item' + this.current)
                       
                        //create item with videos
                     if(item['videos'] ){

                       var vid =  renderVideo(item['videos'][0]['question']);
                     }else{
                        var vid =  renderVideo('videos/CountdownTimer.mp4');
                     }
                      vid.play().then(function(e)
                   {
                       item._time = new Timer();
                       item._time.start();
                  
                       console.log('question' + item['question'] )
                     //  clearScene();
                 renderButtons(item['question'], item['answers']);
              
                       console.log('video played event' +this);

                   }
                  
                   
                     )
                  
                     if(vid.ended){
                    

                       try{ 
                         removeGui();
                        clearScene();
                       }catch{}


                        var cdown = renderVideo('videos/CountdownTimer.mp4');
                   
                       // renderButtons(item['question'], item['answers']);

                        cdown.play();
                        cdown.addEventListener('ended', (function _func(e){

                          removeGui();
                            console.log('cdown.ended')
                            e.target.removeEventListener("ended", _func);
                     
                            return this.noInput(e);
                        }).bind(this));
                        cdown.play()
                        }
                   
                
                      
                   return video;
                }


            
                    this.preload = function(){

                        urls = Array.from(new Set(this.getUrls()));
                        
                        urls.forEach( function(urls){

                        var preloadLink = document.createElement("link");

                        
                        preloadLink.setAttribute('rel', "preload");
                      preloadLink.setAttribute('src', urls);
                        preloadLink.preload = "auto";
                        preloadLink.as = "video";
                        document.head.appendChild(preloadLink);

                        
                         } );

                        return this
                         };

                    this.coundownTimer = function () {
                        this._video = 'coundown_90';
                        renderVideo('videos/CountdownTimer.mp4');
                    };

                    this.getItems = function () {
                        return _items;
                    };
                 

                   this.increment = function(){
                     clearScene();
                      removeGui();
                      textGeo = null;
                      console.log('remove gui called');
                  _currentItem++;
                   console.log('increment')
                    return this.createItem();
                    
                   }

                   this.cachefn = function (cache, fn, args){
                    //function memorization  
                    //console.log(args)
                    //json.stringify misses out functions 
                    let key = fn.name + JSON.stringify(args);
                  
                  //  if( key in cache){
                      //   return cache[key]

                 //   }
               //     else{
                       let result = fn.apply(this, args);
                        
                        cache[key] = result;
                        console.log('playing' + cache + result);
                        return result;
                   // }

                }
                   
                    this.init = function(){

                    }



             for (let index = 0; index < data.length; index++) {

                for (let j = 0; j < data[0].length; j++) {
                
                this.add(data[index][j]);
                // console.log(sequence);
                 //}
                   }

                }
                this.processing = function(){

                    return _processing;
                }
                  /*Function checks the video before incrementing
                      and creating the
                  */
                this.next = function (video, ...args) {
                    //the first video is intro   
                  
                    console.log('The next function is called');
                       //console.log(cache);
                      item = _items[_currentItem];
                      
                     try{  
                      removeGui()
                    }catch{
                        console.log( 'Tried clearnign gui for' +video)

                    }
                    this.createItem();
                    // this.cachefn(cache, this.createItem, item) ;

                       
                 
                         }
                    
                
                  
                   

                 this.finished = function(){
                        
                        clearGui();
                        clearScene();
                     Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
                     get: function(){
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
                  }
                  })
                    this.increment();
                  //  this.userInput = undefined;
                         
/*
                       if(this.userInput === 'win' ){
                        console.log(this._video);
                        renderVideo('videos/questions/lewis/questions/win.mp4');
                        this.video = "win"
                       
                       } else if(this.userInput === 'fail'){
                        console.log(this._video)
                        renderVideo('videos/fail.mp4');
                       
                    
                       }
                       */
                       if(this._video === 'question' && this.userInput === undefined ){
                        
                        this.video = 'countdown';
                         video = renderVideo('videos/CountdownTimer.mp4');

                       }

                     if(this.userInput === undefined  && this.video === 'countdown'){
                         console.log(this.userInput);
                         console.log('no input called')
                     video.onended = (e) => {
                       this.noInput()
                      }
                    }

                }
                    
                     //return 
                          //    )
                        
                    
                    this.noInput = function (e) {


                        ////video.load();
                    //   e.target.removeEventListener(_func);
                      console.log('no input game ended');
                      removeGui();
                        clearScene();
                       video = renderVideo('videos/game_over.mp4')
                       video.play();
                      
                        video.addEventListener("ended",function _f(e){
                  // window.location.reload()
                           }
                        );

                    };
                    
             this.Load = function () {
                        var data = this.getQuestions();
                        //return data;
                    };

          this.renderScene = function(){

            
                        
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
            
                    
              this.input_sequence = function (){

                return input_sequence;
              }  
                
                
           

            this.option = function(handle){
              //video.paus
                this.userInput = handle;
                if(handle === this.current.correct){
                
                    input_sequence.push('win');
                    this.increment();
                    this.userInput = 'win';

                 removeGui();
            
                  video = renderVideo('videos/win.mp4');
                    video.play();
                    //clearScene();
                   // this.next();
               
                }else{

                   /* HANDLE LOOSE */
                  
                  
                  input_sequence.push('loose');
                 
                  console.log('fail video should play');
                //  video.pause();
                   video =  renderVideo('videos/fail.mp4');
                   video.play();
               //   this.next();
                 
                 
                  
                  if(input_sequence.find(()=>'loose').length == 3){
                   console.log('more than three')
                   video =  renderVideo('videos/game_over.mp4');
                      video.play();
                      Location.reload;
                  }
             
                }
               
            }
        
       }
     }
