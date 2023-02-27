function realtimeClock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var amPm = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    document.getElementById('clock').innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
} // End realtimeClock()
          

function updatebar(ele) {
            if (event.key === "Enter") {
              var cupCount = ele.value;
              var multiplier = 12.5;
              var bar = document.getElementById("bar");
              if (cupCount == 8) {
                bar.style.backgroundColor = "rgb(1, 208, 254)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 7) {
                bar.style.backgroundColor = "rgb(1, 190, 235)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 6) {
                bar.style.backgroundColor = "rgb(1, 172, 216)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 5) {
                bar.style.backgroundColor = "rgb(1, 154, 197)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 4) {
                bar.style.backgroundColor = "rgb(1, 136, 178)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 3) {
                bar.style.backgroundColor = "rgb(1, 118, 159)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 2) {
                bar.style.backgroundColor = "rgb(1, 100, 140)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 1) {
                bar.style.backgroundColor = "rgb(1, 82, 121)";
                bar.style.width = cupCount * multiplier + "%";
              } else if (cupCount == 0) {
                bar.style.backgroundColor = "rgb(1, 64, 102)";
                bar.style.width = cupCount * multiplier + "%";
              } else {
                bar.style.backgroundColor = "rgb(1, 46, 83)";
                alert("Please Enter: 1-8 cups");
              }
            }
          }