function updateTime() {

  //Sydney
  
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTimeZone = sydney.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  
  sydneyDate.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeZone.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small]");
  
  //Tokyo
  
  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTimeZone = tokyo.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  
  tokyoDate.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeZone.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");

  //London
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTimeZone = london.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  
  londonDate.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeZone.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small]");

  //New York
  let newYork = document.querySelector("#new-york");
  let newYorkDate = newYork.querySelector(".date");
  let newYorkTimeZone = newYork.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  
  newYorkDate.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeZone.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);

  
  function updateCity(event) {
    let cityTimeZone =  event.target.value;
    let cityName = cityTimeZone.replace ("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = 
    `<div class="city">
    <div>
    
    <h2>${cityName}</h2>
    <div class="date">
    ${cityTime.format("MMMM Do YYYY")}
    </div>
    </div>
    
    <div class="time">
    ${cityTime.format("h:mm:ss")}
  <small>${cityTime.format("A")}</small>
  </div>
  </div>`;
}


let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
