function Stopwatch() {
  let startTime = null;
  let endTime = null;
  let running = false;
  let duration = 0;

  // getter
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    }
  });

  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    }
  });

  Object.defineProperty(this, 'endTime', {
    get: function () {
      return endTime;
    }
  });

  Object.defineProperty(this, 'running', {
    get: function () {
      return running;
    }
  });
}

Stopwatch.prototype.start = function () {
  if (this.running)
    throw new Error('Stop watch already running!!');

  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running)
    throw new Error('Stopwatch has not started...');

  this.running = false;
  this.endTime = new Date();
  this.duration += (endTime.getTime() - startTime.getTime()) / 1000;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};


const sw = new Stopwatch();
console.log(sw);