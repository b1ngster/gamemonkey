
            class Sequencer {
                constructor() {
                    var item, _items = [], _itemsActive = [], _itemsToRemove = [], _currentItem = 0, _totalItems = 0, _nextItem = 0, _nextItemToRemove = 0, _time = 0, _layersNeedSorting = false;
                    
                    var speed = 2; //units a second
                    var delta = 0;
                    var item_clock = 0;
                    var urls = [];
                    var finished = false;
                    var clock =  new THREE.Clock();
                    var itemIndex = 0;
                    var countdownTimer;
                    this.add = function (item, start, end, init, scene) {

                      //  console.log(item);
                        item = item;
                        item.id = Math.random().toString(36).substr(2, 9);
                        item._active = false;
                        item._start = start;
                        
                        item._duration = end - start;
                        item._end = end;
                        item.timer;
                        item._scene = scene;
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
                        //console.log(urls)
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

                    this.createItem = function(item){

                        console.log(item);
                        _itemsToRemove.push(item);
                      
                        if(item['videos']){
                        
                           video =  renderVideo(item['videos'][0]['question'])
                        }
                         else{
                        
                        renderVideo('videos/CountdownTimer.mp4');
                            
                           }
                          item.start = performance.now();
                         ++_currentItem;
                         renderButtons(item['question'], item['answers']);
                         return this;
                        
                    }
                    this.coundown = function () {
                        renderVideo('videos/CountdownTimer.mp4');
                    };
                    this.getItems = function () {
                        return _items;
                    };
                 
                    this.checkTime = function(){
                       return clock - performance.now() / 1000;
                    }

                    this.finished = function (){
                        
                    }
                    
                    this.next = function (video) {
                      
                       //console.log()
                        item = _items[_currentItem];
                        
                      //  removeGui();
                     //   
                       
                        if(_currentItem === 0){
                        this.createItem(item);
                        }
                      
                        
                        console.log(this.getClockTime(item))
                      
                      
                      
                        if(  item.finished){

                        
                    console.log('item finished');
                        if(item.first === true||this.checkTime > 30){
                        this.createItem(item);
                        item.first = false;
                        }
                
                    }
                  
                       //video.load(); // must call after setting/changing source
                      // item.clock = this.clockStart();
                       
                     
                      // video.play();
                    };


                
                   

                    this.current = function () {
                        return _currentItem;
                    };
                    this.nextVideo = function () {
                        return ++_currentItemVideo;
                    };
                    this.clockStart = function(){
                        clock = performance.now();
                    }
                    this.getClockTime = function(){
                    var t  =  performance.now() - clock;

                      return  t
                    }
                    this.finished = function(){
                        console.log(this.getClockTime);
                    }
                    this.currentVideo = function () {

                        console.log(_items)
                        return _currentItem;
                    };

                    this.preload = function(){

                        urls = new Set(this.getUrls());
                        console.log(urls);
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
            }