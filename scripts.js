window.onload = function () {
    var s = 00;
    var cs = 00;
    var min = 00;
    var outputseconds = document.getElementById("seconds");
    var outputtens = document.getElementById("tens");
    var outputminutes = document.getElementById("minutes");
    var Interval;
   
    function op1activator() {        
        cs++;
        if (cs <= 9) {
            outputtens.innerHTML = `0${cs}`;
        }
        if (cs > 9) {
            outputtens.innerHTML = `${cs}`;
        }
        if (cs > 99) {
            s++;            
            outputseconds.innerHTML = `0${s}`;
            cs = 00;  
            outputtens.innerHTML = `0${cs}`;
        }
        if (s > 9) {
            outputseconds.innerHTML = s;
        }
        if (s > 59) {
            min++;
            outputminutes.innerHTML = "0" + min;
            s = 0;
            outputseconds.innerHTML = "0" + s;
        }
        if (min > 9) {
            outputminutes.innerHTML = min;
        }
        
    };
    document.getElementById("start").onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(op1activator, 10);
    }
    document.getElementById("stop").onclick = function () {
        clearInterval(Interval)
    }
    document.getElementById("reset").onclick = function () {
        clearInterval(Interval)
        s = 00;
        cs = 00;
        outputtens.innerHTML = `0${cs}`;
        outputseconds.innerHTML = `0${s}`;
    }
}