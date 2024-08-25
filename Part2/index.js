// property: duration - user input
// method: start: it adds seconds to duration - toggle state
// method: stop: it stops adding the seconds - toggle state
// method: reset: it resets the duration property

function Stopwatch() {
    let stats = {
        time: 0,
        state: false,
    };

    this.duration = function () {
        return stats.time;
    }

    this.start = function () {
        while (stats.state === true) {
            stats.time++;
        }
    };

    this.stop = function () {
        stats.state = false;
    };
}

const sw = new Stopwatch();