
            class Sequencer {
                constructor() {
                    var item, _items = [], _itemsActive = [],  _itemsToRemove = [], _currentItem = 0, _totalItems = 0, _nextItem = 0, _nextItemToRemove = 0, _time = 0, _layersNeedSorting = false;
                    
                    var speed = 2; //units a second
                    var delta = 0;
                    var urls = [];
                    var finished = false;
                    var _video;
                    this.userInput = undefined;
                    var itemIndex = 0;
                    var countdownTimer;
                    this.add = function (item, start, end, init, scene, ) {

                        item = item;
                        item.id = Math.random().toString(36).substr(2, 9);
                        item._active = false;
                        item._start = start;
                        item.coundown = false;
                        item._duration = end - start;
                        item._end = end;
                        
                        item._scene ? scene : function(){

                           
                        };
                        item._init = init;
                        item._first = true;
                        
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
                            )
                            
                        }
                        _items.push(item);
                        _items.sort(function (a, b) { return a.__start - b.__start; });
                     
                      //  _itemsToRemove.sort(function (a, b) { return a.__end - b.__end; });
                        
                   
                    };
                    this.get = function () {
                        return this;
                    };
                    this.getUrls = function(){
                        return urls;
                    }

                    this.createItem = function(){
                        
                        console.log('create item')
                        removeGui();
                   if(video.ended){
                    console.log('create video ended');
                     item = _items[_currentItem];
                    // item = Object.prototype.toString.call(item)
                      //item = JSON.stringify(item);
                      console.log(item);
                        removeGui();
                     renderButtons(item['question'], item['answers']);
                       
                        this._finished = false;
                        this.userInput = false;
                       // item._time = performance.now
                      
                        if(item['videos']){
                            
                            
                            this._video = 'question';
                        
                            return video = renderVideo(item['videos'][0]['question'])
                        }
                         else{
                             this._video = 'question_timed'
                        
                         renderVideo('videos/CountdownTimer.mp4');
                            
                           }
                          item.start = performance.now();
                       
                        

                         return this;
                   }
                    }
                    this.coundownTimer = function () {
                        this._video = 'coundown_90';
                        renderVideo('videos/CountdownTimer.mp4');
                    };
                    this.getItems = function () {
                        return _items;
                    };
                 
                    this.checkTime = function(){
                       return _time - performance.now() / 1000;
                    }

                   this.increment = function(){
                       removeGui();
                  _currentItem++;
                   console.log('increment')
                    return this.createItem();
                    
                   }
                    
                    this.next = function (video, ...args) {
                    
                    
                        if(video){
                        if(this._video === 'Gameover'){
                           // window.location.reload(true);
                        }
                        if(this.userInput === 'win'){
                            removeGui();
                            console.log('winner');
                            console.log(video);
                          this._video = 'win';
                            
                          renderVideo('videos/questions/lewis/questions/win.mp4');

                         
                      
                        }
                        if(this._video === "win"){

                           //this.increment();
                        }
                        
                        if(_currentItem === 0){
                            this.createItem(item);
                            }
                          

                      
                  //  console.log(video.attributes)
                        

                      //  removeGui();
                     //   
                       
                   
                    } 
                       // console.log(this.getClockTime(item))
                      
                      
                      
                        if(  this.finished(item)){

                        console.log('finished is a success');
                  //  console.log('item finished');
                        this.createItem(item);
                        item.first = false;
                        }
                
                    }
                  
                       //video.load(); // must call after setting/changing source
                      // item.clock = this.clockStart();
                       
                     
                      // video.play();
                   
                
                   

                    this.current = function () {
                        return item;
                    };
                    this.currentVideo = function () {
                        

                    };
                    this.clockStart = function(){
                        clock = performance.now();
                    }
                    this.getClockTime = function(){
                     
                    var t  =  item.clock;
                 //   console.log(t)
                      return  t
                    }
                    this.finished = function(){
                     
                       if(this._video === 'win'){
                      
                        console.log('incrementing');
                      this.increment();
                     this.userInput = undefined;
                         }

                       if(this.userInput === 'win' ){
                        console.log(this._video);
                        renderVideo('videos/questions/lewis/questions/win.mp4')
                        this.video = "win"
                   } else if(this.userInput === 'fail'){
                    console.log(this._video)
                     
                    
                       }
                       
                       if(this._video === 'question' && this.userInput === undefined ){
                        
                        this.video = 'countdown';
                     video = renderVideo('videos/CountdownTimer.mp4');

                       }

                     if(this.userInput === undefined  && this.video === 'countdown'){
                         console.log(this.userInput);
                         console.log('no input called')
                  //  video.ended = (e) => {
                  //     this.noInput()
                  //    }
                    }

                    }
                     //return 
                          //    )
                        
                    
                    this.noInput = function (e) {
                        ////video.load();
                        console.trace();
                        if(this.previous = 'countdown'){
                        this._video = 'Gameover';
                        video.removeAttribute('src');
                        video =  renderVideo('videos/game_over.mp4');
                        video.addEventListener("ended",function _f(e){
                       //     windows.location.reload()
                            console.log('no Input Event:' +e)
                       
                            console.log('no Input function:' +_f)

                        }
                        )};
                    }

                    this.reload = function(){
                        console.log('reloading')
                        location.reload(true);
                    }
                    this.preload = function(){

                        urls = new Set(this.getUrls());
                       // console.log(urls);
                        urls.forEach( value =>{
                        var preloadLink = document.createElement("video");
                        preloadLink.src = value;
                        preloadLink.preload = "auto";
                        preloadLink.style.visibility = "hidden"; 
                        //preloadLink.as = "video";
                        
                        document.body.appendChild(preloadLink);
                        })
                        
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
                
                }
            

            handleClick(handle){

                this.userInput = handle;
                if(handle === this.current().correct){
                
                    console.log('correct');
                    this.userInput = 'win'
                   // this.next();
                   this.next();
                  // this.renderVideo('videos/questions/lewis/questions/win.mp4')
                    
               
                }else{
                    renderVideo('videos/questions/lewis/questions/fail.mp4')
                }
            }
            }