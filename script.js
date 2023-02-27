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

          let weather = {
            apiKey : "ad25070f8ead3713464f14f8187b467d",

            fetchWeather: function(city){
              fetch("https://api.openweathermap.org/data/2.5/weather?q="
              + city
              +"&units=imperial&appid="
              +this.apiKey)
              .then((response) => response.json())
              .then((data) => this.displayWeather(data));
            },
            displayWeather: function(data){
              const { name } = data;
              const { icon, description } = data.weather[0];
              const { temp, humidity } = data. main;
              const { speed } = data.wind;
              document.querySelector(".city").innerText = name;
              document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
              document.querySelector(".description").innerText = description;
              document.querySelector(".temperature").innerText = temp + "°F";
              document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
              document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
            },
          };