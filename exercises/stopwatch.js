// property: duration - user input
// method: start: it adds seconds to duration - toggle state
// method: stop: it stops adding the seconds - toggle state
// method: reset: it resets the duration property

function Stopwatch() {
    let startTime = null;
    let endTime = null;
    let running = false;
    let duration = 0;

    // functions
    this.start = function() {
        if (running) 
            throw new Error('Stop watch already running!!');

        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch has not started...');

        running = false;
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime()) / 1000;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    // getter
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

const sw = new Stopwatch();   