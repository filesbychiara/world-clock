function updateTime() {

  //LA
  
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTimeZone = losAngeles.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  
  losAngelesDate.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeZone.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small]");
  
  //Sydney
  
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTimeZone = sydney.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  
  sydneyDate.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeZone.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);
