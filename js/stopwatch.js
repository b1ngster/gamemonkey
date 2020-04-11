// performance.now() shim
window.performance = window.performance || {};
performance.now = (function() {
  return performance.now       ||
         performance.mozNow    ||
         performance.msNow     ||
         performance.oNow      ||
         performance.webkitNow ||
         function() { return Date.now(); };
})();

/**
 * A timer.
 *
 * Adapted from the
 * [three.js clock](https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js).
 *
 * If you only care about how long something takes (e.g. when testing
 * performance) and you don't need to stop the timer, Timer#event() and
 * Timer#getTimeSince() are more efficient than instantiating a new Timer
 * object.
 *
 * @param {Boolean} [autoStart=true]
 *   Whether to start the timer immediately upon instantiation or wait until
 *   the Timer#start() method is called.
 */
function Timer(autoStart) {
  this.autoStart = typeof autoStart === 'undefined' ? true : autoStart;
  this.lastStartTime = 0;
  this.lastDeltaTime = 0;
  this.elapsedTime = 0;
  this.running = false;
  /**
   * Get the time elapsed in seconds since the last time a delta was measured.
   *
   * Deltas are taken when the timer starts or stops or elapsed time is
   * measured.
   *
   * Note that if the timer is stopped and autoStart is on, calling this method
   * will start the timer again.
   */
  this.getDelta = function() {
    var diff = 0;
    if (this.running) {
      var now = performance.now();
      diff = (now - this.lastDeltaTime) / 1000; // ms to s
      this.lastDeltaTime = now;
      this.elapsedTime += diff;
    }
    return diff;
  };
  /**
   * Start the timer.
   */
  this.start = function() {
    if (this.running) {
      return;
    }
    this.lastStartTime = this.lastDeltaTime = performance.now();
    this.running = true;
  };
  /**
   * Stop the timer.
   */
  this.stop = function () {
    this.elapsedTime += this.getDelta();
    this.running = false;
  };
  /**
   * Get the amount of time the timer has been running, in seconds.
   */
  this.getElapsedTime = function() {
    this.getDelta();
    return this.elapsedTime;
  };
  if (this.autoStart) {
    this.start();
  }
}

(function() {
  var events = {}, noID = 0;
  /**
   * Register the time at which an event occurred.
   *
   * If you only care about how long something takes (e.g. when testing
   * performance) and you don't need to stop the timer, Timer#event() and
   * Timer#getTimeSince() are more efficient than instantiating a new Timer
   * object.
   *
   * @param {String} [id]
   *   An identifier for the event.
   * @static
   */
  Timer.event = function(id) {
    if (typeof id === 'undefined') {
      noID = performance.now();
    }
    else {
      events[id] = performance.now();
    }
  };
  /**
   * Return the time since an event occurred.
   *
   * If you only care about how long something takes (e.g. when testing
   * performance) and you don't need to stop the timer, Timer#event() and
   * Timer#getTimeSince() are more efficient than instantiating a new Timer
   * object.
   *
   * @param {String} [id] An identifier for the event.
   * @return {Number} Seconds since the event, or 0 if the event is not found.
   * @static
   */
  Timer.getTimeSince = function(id) {
    var startTime = typeof events[id] === 'undefined' ? noID : events[id];
    return startTime ? (performance.now() - startTime) / 1000 : 0;
  };
  /**
   * Get the average amount of time required to run the specified function.
   *
   * @param {Function} callback The function to measure.
   * @param {Number} iterations The number of times to run the function.
   * @return {Number} The mean number of seconds the function took to run.
   * @static
   */
  Timer.getMeanExecutionTime = function(callback, iterations) {
    Timer.event('profile');
    while (iterations--) {
      callback();
    }
    return Timer.getTimeSince('profile') / iterations;
  }
})();