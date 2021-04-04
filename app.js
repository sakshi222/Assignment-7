var input = document.getElementById('input')
var btn = document.getElementById('btn')
var temp = document.getElementById('temp')
var humid = document.getElementById('humid')
var cityname = document.getElementById('city')
var weath = document.getElementById('weath')
var visib = document.getElementById('visib')
var winds = document.getElementById('wind')

btn.addEventListener('click',()=>{
    var city = input.value
    const apiKey = 'c50ccc8fe02e7fe5146e5e7ff1139e97'
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then(data=>data.json())
    .then((res)=>{
        console.log(res)
        const text1 = `${city}`
        cityname.innerText = text1
        const celsius = res.main.temp - 273
        weath.innerText = `${res.weather[0].main}`
        const text2 = `Temp : ${celsius.toFixed(2).substring(0,2)} °C`
        temp.innerText = text2 
        humid.innerText = `Humidity : ${res.main.humidity} %`
        visib.innerText = `Visibility : ${res.visibility}`
        winds.innerText = `Wind speed : ${res.wind.speed} m/s`
        var date = document.getElementById('date');

        var dateToday = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sept";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        var monthName = month[dateToday.getMonth()];
        var dayToday = weekday[dateToday.getDay()];
        date.innerText = dayToday +'   ' +String(dateToday.getDate()).padStart(2,'0') + ' ' +monthName + ',' +dateToday.getFullYear();
    })
})

