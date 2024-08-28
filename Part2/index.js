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
        if (!stats.state) {
            stats.state = true;
            setInterval(() => {
                stats.time++;
                console.log(stats.time)
            }, 1000);
        }
    };

    this.stop = function () { 
        stats.state = false;  
        console.log(stats.time);  
    };  
}  
  
const sw = new Stopwatch();   